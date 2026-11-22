// T1A PTE 101 섹션 문구·과제 문항. 문항 코드(B1, Q1 …)는 응답 시트·코드북과 연결되므로 바꾸지 마세요.

/** Apps Script 웹 앱 URL (배포 후 붙여넣기). 비어 있으면 제출 버튼이 비활성화됩니다. */
export const endpoint = 'https://script.google.com/macros/s/AKfycbzM70U-SX60sI1VCRHVXNgMd0SbzvO7ZRv8lXzaycyrA834HWaVsWHuN3UrkeuN3vMr/exec';

export const course = {
  title: 'T1A PTE 101',
  sub: 'e스포츠 산업의 이해 · T1 Academy Pathway to Esports 7기',
  intro:
    'e스포츠 산업에 진입하려는 분들을 위한 12주 기초 과정입니다. 산업 구조와 생태계, 미디어·거버넌스·비즈니스 모델을 배우고, T1 현업자 특강과 과제를 통해 나만의 커리어 포트폴리오를 만듭니다.',
  meta: '2026.11.22 – 2027.02.21 · 매주 일요일 13:00–15:00 · 서형석 교수',
  weeks: [
    { w: '1주', date: '11/22', topic: '오리엔테이션 & e스포츠의 이해', note: '웰컴과제 안내' },
    { w: '2주', date: '11/29', topic: 'e스포츠 생태계와 산업 구조', note: '웰컴과제 발표' },
    { w: '3주', date: '12/06', topic: '특강 · 구단의 커뮤니케이션', note: 'T1 Communications' },
    { w: '4주', date: '12/13', topic: '특강 · T1의 성장 전략', note: 'T1 Strategic Growth' },
    { w: '5주', date: '12/20', topic: '한국 및 글로벌 e스포츠 산업', note: '' },
    { w: '6주', date: '01/03', topic: 'e스포츠 미디어와 콘텐츠', note: '중간과제 안내' },
    { w: '7주', date: '01/10', topic: 'e스포츠 거버넌스와 국제대회', note: '중간과제 발표' },
    { w: '8주', date: '01/17', topic: '특강 · T1 스트리밍의 구조와 역할', note: 'T1 Streaming' },
    { w: '9주', date: '01/24', topic: 'e스포츠 비즈니스 모델과 지속가능성', note: '' },
    { w: '10주', date: '01/31', topic: '데이터·AI와 e스포츠 커리어', note: '기말과제 안내' },
    { w: '11주', date: '02/14', topic: '특강 · T1의 현재와 미래', note: 'T1 COO' },
    { w: '12주', date: '02/21', topic: '기말과제 발표 & 수료식', note: '' },
  ],
  assignments: [
    { name: '웰컴과제', title: '나의 e스포츠 커리어 맵 & 역량 로드맵', due: '11/28(토) 23:59', href: '/pte101/welcome/', open: true },
    { name: '중간과제', title: 'e스포츠 산업 구조 분석 리포트', due: '6주차 안내', href: '', open: false },
    { name: '기말과제', title: '커리어 포트폴리오', due: '10주차 안내', href: '', open: false },
  ],
};

// ── 웰컴과제 문항 ─────────────────────────────────────
export const DOMAINS = ['종목사(게임사)', '리그·대회 운영사', '구단', '미디어·플랫폼', '스폰서·브랜드', '협회·거버넌스', '에이전시·제작사', '아직 모름'];
export const JOBS = ['사업 기획·전략', '리그·대회 운영', '이벤트·행사 기획', '파트너십·스폰서십', '마케팅·브랜딩', '팬 경험·커뮤니티', '콘텐츠·영상 제작', '중계·방송 제작', '데이터·경기 분석', '선수단 운영·코칭', '커머스·MD', '국제사업·정책', '기타', '아직 모름'];
export const COMP = [
  { key: 'IND', name: '산업 이해', desc: '생태계 구조, 수익 모델, 트렌드' },
  { key: 'JOB', name: '직무 실무 스킬', desc: '기획서·제안서, 계약, 예산 등' },
  { key: 'EVT', name: '이벤트 기획·실행', desc: '대회·행사 기획, 현장 운영, 일정·인력 관리' },
  { key: 'COM', name: '커뮤니케이션·협업', desc: '발표, 협상, 이해관계자 조율' },
  { key: 'DAT', name: '데이터·AI 활용', desc: '엑셀·분석, 성과 측정, AI 툴' },
  { key: 'GLB', name: '언어·글로벌', desc: '외국어, 해외 시장 이해' },
];
export const LEVELS = ['들어본 적 있음', '배워본 적 있음', '혼자 해본 적 있음', '성과를 낸 적 있음', '남을 가르칠 수 있음'];
export const ACTIONS = ['온라인 강의·독서', '자격증·어학 시험', '스터디·동아리', '공모전·해커톤', '대회·행사 스태프·봉사', '행사 직접 기획·개최', '개인 프로젝트·포트폴리오', '콘텐츠 발행(블로그·영상)', '인턴·계약직', '현업자 멘토링·네트워킹', '대학원·전문 과정', '입사·이직 지원'];
export const PERIODS = [
  { key: 'S', name: '단기 · PTE 12주', hint: 'PTE 과제·특강을 어떻게 활용할지 꼭 포함하세요' },
  { key: 'M', name: '중기 · 1년', hint: '' },
  { key: 'L', name: '장기 · 3~5년', hint: '' },
];

export type Question = {
  code: string;
  q: string;
  type: 'text' | 'single' | 'multi' | 'multiN';
  n?: number;
  opts?: string[];
  hint?: string;
  placeholder?: string;
  optional?: boolean;
};

export const parts: { no: string; title: string; en: string; questions: (Question | { special: 'comp' | 'road' })[] }[] = [
  {
    no: '기본 정보', title: '', en: '',
    questions: [
      { code: 'NAME', q: '이름', type: 'text', placeholder: '홍길동' },
      { code: 'B1', q: '현재 신분', type: 'single', opts: ['대학생(1~2학년)', '대학생(3~4학년)', '대학원생', '취업준비생', '직장인(타 산업)', '직장인(게임·e스포츠)', '기타'] },
      { code: 'B2', q: '전공 계열', type: 'single', opts: ['경영·경제', '스포츠', '미디어·커뮤니케이션', '컴퓨터·데이터', '디자인·예술', '인문·어학', '기타'] },
    ],
  },
  {
    no: 'Part 1', title: '나의 현재 위치', en: 'Where am I',
    questions: [
      { code: 'Q1', q: '게임·e스포츠 관련 경험', type: 'multi', opts: ['게임 플레이 5년 이상', '경기 정기 시청', '팬 커뮤니티 활동', '대회 출전(아마·대학)', '대회·행사 운영 스태프', '콘텐츠 제작(영상·글)', '업계 인턴·근무', '해당 없음'] },
      { code: 'Q2', q: '주로 즐기는 종목', type: 'multi', opts: ['LoL', '발로란트', '배틀그라운드', '오버워치', 'FC 온라인', '모바일 게임', '격투 게임', '기타'] },
      { code: 'Q3', q: '이 산업에 관심을 갖게 된 계기', type: 'single', opts: ['선수·팀 팬덤', '국제대회 시청', '게임 플레이 경험', '업계 지인 영향', '산업 성장성', '전공·경력과의 연결', '기타'] },
      { code: 'Q4', q: '나의 강점', type: 'multiN', n: 3, opts: ['기획력', '실행·추진력', '커뮤니케이션', '글쓰기', '영상·디자인', '데이터 분석', '외국어', '네트워킹', '꼼꼼함·관리', '게임 이해도', '리더십', '창의성'] },
    ],
  },
  {
    no: 'Part 2', title: '커리어 맵', en: 'Where do I want to be',
    questions: [
      { code: 'Q5', q: '1지망 영역', type: 'single', opts: DOMAINS },
      { code: 'Q6', q: '2지망 영역', type: 'single', opts: DOMAINS },
      { code: 'Q7', q: '1지망 직무군', type: 'single', opts: JOBS },
      { code: 'Q8', q: '2지망 직무군', type: 'single', opts: JOBS },
      { code: 'Q9', q: '3~5년 뒤 목표 포지션 (한 문장)', type: 'text', placeholder: '예) 글로벌 브랜드와 e스포츠 구단을 연결하는 파트너십 매니저' },
      { code: 'Q10', q: '참고한 채용공고 링크', type: 'text', placeholder: '예) 관심 있는 회사의 채용공고 URL 1개', hint: '1지망 직무와 가장 가까운 실제 공고를 찾아 붙여 주세요.' },
      { code: 'Q11', q: '그 공고의 핵심 요건', type: 'multiN', n: 3, opts: ['업계 경력', '기획·제안서', '행사 운영 경험', '외국어', '데이터·엑셀', '영상·디자인 툴', '대외 협업', '게임 이해도', '전공·학위', '기타'] },
    ],
  },
  {
    no: 'Part 3', title: '역량 진단', en: "What's missing",
    questions: [
      { special: 'comp' },
      { code: 'Q14', q: '가장 먼저 보완할 역량', type: 'multiN', n: 2, opts: COMP.map((c) => c.name) },
      { code: 'Q15', q: '그 역량이 부족한 이유', type: 'multi', opts: ['경험이 없어서', '지식이 부족해서', '연습할 기회가 없어서', '피드백 받을 곳이 없어서', '방법을 몰라서', '시간이 부족해서'] },
    ],
  },
  {
    no: 'Part 4', title: '역량 로드맵', en: 'How to get there',
    questions: [
      { special: 'road' },
      { code: 'Q17', q: 'PTE 12주 안에 만들 핵심 결과물 1개', type: 'text', placeholder: '예) 중간과제로 T1 스폰서십 구조를 분석한 케이스 스터디 리포트' },
    ],
  },
  {
    no: 'Part 5', title: 'PTE에 거는 기대', en: '',
    questions: [
      { code: 'Q18', q: 'PTE에서 가장 얻고 싶은 것', type: 'multiN', n: 2, opts: ['e스포츠 산업 전반 이해', '희망 직무 구체화', '포트폴리오 완성', '현업자 네트워크', 'T1 현장 인사이트', '동료 네트워크', '취업·이직 정보'] },
      { code: 'Q19', q: '질문하고 싶은 특강 연사', type: 'single', opts: ['12/6 T1 Communications', '12/13 T1 Strategic Growth', '1/17 T1 Streaming', '2/14 T1 COO'] },
      { code: 'Q20', q: '그 연사에게 할 질문', type: 'text', placeholder: '예) 구단이 새 파트너를 고를 때 가장 먼저 보는 기준은 무엇인가요?' },
      { code: 'Q21', q: '2주차 수업에서 발표하고 싶나요?', type: 'single', opts: ['희망함', '희망하지 않음'], hint: '희망자 중 최대 5명, 1인 3분' },
    ],
  },
];
