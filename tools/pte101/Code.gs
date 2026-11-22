/**
 * T1A PTE 101 웰컴과제 응답 수신기 (Google Apps Script)
 * script.google.com 새 프로젝트(독립형)에 붙여넣고 웹 앱으로 배포합니다. SHEET_ID 시트에 기록합니다.
 *  - '응답' 탭: 학생 1명(제출 1건) = 1행, 역량 격차 GAP 포함
 *  - '응답_long' 탭: 제출·문항·응답 1개 = 1행 (DB·AI 분석용)
 * 같은 학생이 여러 번 내면 행이 쌓이고, 분석할 때는 이름별 마지막 제출을 씁니다.
 */
const CLASS_CODE = 'T1PTE7'; // 수업 시간에 학생들에게 알려줄 코드 (대소문자 무시)
const SHEET_ID = '16_Oem1Tlqh2o48OeAQgj0U3YCU9BFfh4degOfLvaSTc'; // 응답 시트
const WIDE = '응답';
const LONG = '응답_long';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.website) return out_({ ok: true }); // 스팸 봇
    if (String(d.classCode || '').trim().toUpperCase() !== CLASS_CODE.toUpperCase()) {
      return out_({ ok: false, error: '수업 코드가 올바르지 않습니다.' });
    }
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const wide = ss.getSheetByName(WIDE) || ss.insertSheet(WIDE, 0);
    const long = ss.getSheetByName(LONG) || ss.insertSheet(LONG, 1);

    // 헤더 준비 (문항이 늘어나면 뒤에 열 추가)
    if (wide.getLastRow() === 0) wide.appendRow(['SUBMITTED_AT', 'SUBMISSION_ID'].concat(d.columns));
    let header = wide.getRange(1, 1, 1, wide.getLastColumn()).getValues()[0];
    const missing = d.columns.filter((c) => header.indexOf(c) < 0);
    if (missing.length) {
      wide.getRange(1, header.length + 1, 1, missing.length).setValues([missing]);
      header = header.concat(missing);
    }

    // 같은 제출 id는 한 번만 저장
    if (wide.getLastRow() > 1) {
      const ids = wide.getRange(2, 2, wide.getLastRow() - 1, 1).getValues().map((r) => r[0]);
      if (ids.indexOf(d.id) >= 0) return out_({ ok: true, duplicate: true });
    }

    const now = new Date();
    wide.appendRow(header.map((h) => (h === 'SUBMITTED_AT' ? now : h === 'SUBMISSION_ID' ? d.id : safe_(d.wide[h]))));

    if (long.getLastRow() === 0) long.appendRow(['SUBMITTED_AT', 'SUBMISSION_ID', 'NAME', 'PART', 'KEY', 'QUESTION', 'VALUE', 'LABEL']);
    const rows = (d.long || []).map((r) => [now, d.id, safe_(d.wide.NAME), r.part, r.key, r.q, r.value, safe_(r.label)]);
    if (rows.length) long.getRange(long.getLastRow() + 1, 1, rows.length, 8).setValues(rows);

    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: '저장 중 오류가 났습니다.' });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return out_({ ok: true, service: 'T1A PTE 101 welcome' });
}

// 학생 입력이 =, +, -, @ 로 시작하면 수식으로 실행되지 않게 막음
function safe_(v) {
  if (v === undefined || v === null) return '';
  if (typeof v === 'string' && /^[=+\-@]/.test(v)) return "'" + v;
  return v;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
