# hyungseokseo.com

Astro로 만든 미니멀 개인 홈페이지. KR(`/`) · EN(`/en/`).

## 구조
```
src/data/site.ts        모든 문구·연락처 (여기만 고치면 됨)
src/styles/global.css   디자인 토큰 (폰트·색·여백)
src/layouts/Base.astro  공통 머리/꼬리, SEO, Person 스키마
src/components/         Section(공통 섹션 틀), Home(메인)
src/pages/              URL = 파일 경로
```

## 로컬 실행
```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```

## 새 페이지 추가 (예: Research)
1. `src/pages/research.astro`, `src/pages/en/research.astro` 생성
2. `Base` 레이아웃과 `Section` 컴포넌트로 감싸기
3. 문구는 `src/data/site.ts`에 추가
4. 푸시하면 자동 배포

## 배포 (Cloudflare Pages)
- GitHub 저장소 연결 → Framework preset: Astro
- Build command: `npm run build` / Output: `dist`
- Custom domains에 `hyungseokseo.com` 추가
