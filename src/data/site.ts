// 사이트 문구는 이 파일에서 고칩니다. 영문(en)·국문(ko)을 나란히 보여주는 구조입니다.

export const links = {
  scholar: 'https://scholar.google.com/citations?user=pczk6zgAAAAJ&hl=en',
  hufs: 'https://sport.hufs.ac.kr/profl/sport/71/4585/artclView.do',
  instagram: 'https://instagram.com/seo.hyeongseok',
  emailWork: 'esports@hufs.ac.kr',
  emailPersonal: 'snupe96@gmail.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/#research' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'QA Hub', href: '/qahub/' },
  { label: 'Contact', href: '/#contact' },
];

export const meta = {
  title: 'Seo Hyung Seok (Henry Seo) 서형석 — From E to F: Esports to Future Sports',
  description:
    'Adjunct professor at Hankuk University of Foreign Studies and an esports practitioner with 22+ years across coaching, league operations, association strategy, and international events. 한국외국어대학교 겸임교수 서형석.',
};

export const hero = {
  title: 'Seo Hyung Seok',
  sub: 'Henry Seo · 서형석',
  tagline: 'From E to F — Esports to Future Sports.',
};

// <b>…</b> 로 강조할 부분을 감쌉니다.
export const intro = {
  en: [
    'I am Seo Hyung Seok (Henry Seo), an adjunct professor in the Division of Global Sports Industry at Hankuk University of Foreign Studies (HUFS), and <b>an esports practitioner with 22+ years</b> across coaching, league operations, association strategy, international business and international events.',
    'My work focuses on <b>esports governance, tournament operations, ecosystems, business management and facility/technology standards</b>.',
  ],
  ko: [
    '한국외국어대학교 글로벌스포츠산업학부 겸임교수 서형석입니다. 코칭, 리그 운영, 협회 전략, 국제 비즈니스와 국제대회를 거쳐 온 <b>22년 차 e스포츠 실무자</b>입니다.',
    '<b>e스포츠 거버넌스, 대회 운영, 생태계, 비즈니스 경영, 시설·기술 표준</b>을 연구하고 가르칩니다.',
  ],
};

export const career = {
  en: [
    'Adjunct Professor, Division of Global Sports Industry, HUFS',
    'Partner, Future E-sports Group',
    'Board Member, Korea University Esports Council',
    'Former Head Coach, SK Telecom T1',
    'Former Head of Domestic & International Business and Government Relations, Korea e-Sports Association (KeSPA)',
    'Technical Committee Chair for Esports, Incheon 2013 Asian Indoor & Martial Arts Games',
  ],
  ko: [
    '한국외국어대학교 글로벌스포츠산업학부 겸임교수',
    'Future E-sports Group 파트너',
    '한국대학e스포츠협의회 이사',
    '전 SK텔레콤 T1 감독',
    '전 한국e스포츠협회(KeSPA) 국내·해외사업 총괄 및 대관 담당',
    '2013 인천 실내무도아시아경기대회 e스포츠 기술위원장',
  ],
};

export const focus = {
  headline: 'Experiment. Production. Education.',
  sub: 'Three applied strands guide my research and collaboration.',
  items: [
    {
      title: 'Experimental Research',
      ko: 'e스포츠 실험 연구',
      bullets: [
        'Performance & decision-making metrics',
        'Experimental & quasi-experimental design',
        'Behavioral logs + brief surveys',
        'Ethics & reproducibility',
      ],
      href: '/experimental/',
    },
    {
      title: 'Game Design & Production',
      ko: 'e스포츠 게임 디자인·제작',
      bullets: [
        'Student-built esports/game prototypes',
        'QA hub & playtesting',
        'Iteration and deployment workflows',
        'AI-assisted production',
      ],
      href: '/qahub/',
    },
    {
      title: 'Education & Curriculum',
      ko: 'e스포츠 교육·커리큘럼 개발',
      bullets: [
        'Undergraduate curriculum design',
        'Practicum & studio courses',
        'Talent development',
        'Industry-aligned learning outcomes',
      ],
      href: '/teaching/',
    },
  ],
};

// 사진 추가: public/journey/에 파일을 넣고 아래에 한 줄 추가
export const journey = [
  { src: '/journey/t1b_2005.webp', year: 2005, en: 'SK Telecom T1 · SKY Proleague 2005 champions', ko: 'SK텔레콤 T1 · 프로리그 2005 후기리그 우승' },
  { src: '/journey/t1a_2005.webp', year: 2005, en: 'SK Telecom T1', ko: 'SK텔레콤 T1' },
  { src: '/journey/kespa_2008.webp', year: 2008, en: 'KeSPA', ko: '한국e스포츠협회' },
  { src: '/journey/un_2010.webp', year: 2010, en: 'United Nations', ko: 'UN' },
  { src: '/journey/imag_2013.webp', year: 2013, en: 'Incheon 2013 AIMAG · Technical Delegates Meeting', ko: '인천 실내무도아시아경기대회 기술대표 회의' },
  { src: '/journey/gamemeca_2013.webp', year: 2013, en: 'GameMeca', ko: '게임메카' },
  { src: '/journey/feg_2019.webp', year: 2019, en: 'Future E-sports Group', ko: 'Future E-sports Group' },
  { src: '/journey/krkpl_2019.webp', year: 2019, en: 'KRKPL', ko: 'KRKPL' },
  { src: '/journey/dailyesportsb_2019.webp', year: 2019, en: 'Daily Esports interview', ko: '데일리e스포츠 인터뷰' },
  { src: '/journey/ecea_2021.webp', year: 2021, en: 'ECEA', ko: 'ECEA' },
  { src: '/journey/kespa_forum3_2025.webp', year: 2025, en: 'KeSPA Global Esports Forum', ko: 'KeSPA 글로벌 이스포츠 포럼' },
  { src: '/journey/kespa_forum2_2025.webp', year: 2025, en: 'KeSPA Global Esports Forum', ko: 'KeSPA 글로벌 이스포츠 포럼' },
];
