# hyungseokseo.com

Astro 기반 개인 홈페이지. 영문·국문을 한 페이지에 나란히 보여주는 구성.

## 구조
```
src/data/site.ts        메인 문구·경력·연구·Journey 사진·연락처 (여기만 고치면 됨)
src/data/teaching.ts    Teaching 페이지 과목 정보
src/styles/global.css   디자인 토큰 (폰트·색·여백·2단/3단 그리드)
src/layouts/Base.astro  상단 메뉴, 푸터, SEO, Person 스키마
src/components/         Hero(사진+테두리 타이틀), Band(회색 띠 섹션), Journey(사진 스트립)
src/pages/              URL = 파일 경로
public/qahub/, public/experimental/   이전 사이트 페이지 (원본 유지, 추후 새 스타일로 전환)
```

## 로컬 실행
```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```

## 자주 하는 수정
- Journey 사진 추가: `public/journey/`에 파일 → `site.ts`의 `journey`에 한 줄
- 메뉴 추가: `site.ts`의 `nav`
- 새 페이지: `src/pages/이름/index.astro` 생성 → `Base` + `Hero` + `Band` 조합

## 배포 (Cloudflare Pages)
- GitHub 저장소 연결 → Framework preset: Astro
- Build command: `npm run build` / Output: `dist`
- Custom domains에 `hyungseokseo.com` 추가

## T1A PTE 101 (`/pte101/`)
- 문구·주차·과제 문항: `src/data/pte101.ts` (문항 코드 B1, Q1… 는 응답 시트와 연결되므로 유지)
- 웰컴과제 응답 저장: Google 시트 + Apps Script 웹 앱 (`tools/pte101/Code.gs`)
  1. script.google.com 독립형 프로젝트 "PTE101 웰컴과제 응답 수신"(snupe96@gmail.com)에 `Code.gs` (SHEET_ID로 시트 지정)
  2. 배포 → 새 배포 → 웹 앱 / 실행: 나 / 액세스: 모든 사용자 → URL 복사
  3. `src/data/pte101.ts`의 `endpoint`에 URL 입력 → 배포
