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
  { label: 'Publications', href: '/#publications' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'QA Hub', href: '/qahub/' },
  { label: 'Contact', href: '/#contact' },
];

export const meta = {
  title: 'Seo Hyung Seok (Henry Seo) 서형석 — From E to F: Esports to Future Sports',
  description:
    'Adjunct professor at Hankuk University of Foreign Studies and an esports practitioner since 2002 across coaching, league operations, association strategy, and international events. 한국외국어대학교 겸임교수 서형석.',
};

export const hero = {
  sub: 'Seo Hyung Seok (Henry Seo) · 서형석',
  tagline: 'From E to F — Esports to Future Sports.',
};

// <b>…</b> 로 강조할 부분을 감쌉니다.
export const intro = {
  en: [
    'I am Seo Hyung Seok (Henry Seo), an adjunct professor in the Division of Global Sports Industry at Hankuk University of Foreign Studies (HUFS), and <b>an esports practitioner since 2002</b>, with experience across coaching, league operations, association strategy, international business and international events.',
    'My work focuses on <b>esports governance, tournament operations, ecosystems, business management and facility/technology standards</b>.',
  ],
  ko: [
    '한국외국어대학교 글로벌스포츠산업학부 겸임교수 서형석입니다. <b>2002년부터 e스포츠 현장</b>에서 코칭, 리그 운영, 협회 전략, 국제 비즈니스와 국제대회를 거쳐 왔습니다.',
    '<b>e스포츠 거버넌스, 대회 운영, 생태계, 비즈니스 경영, 시설·기술 표준</b>을 연구하고 가르칩니다.',
  ],
};

// 경력: 한국외대 교수 프로필(sport.hufs.ac.kr) 기준. 최신순.
export const career: { date: string; ko: string; en: string; sub?: { date: string; ko: string; en: string }[] }[] = [
  { date: '2024.03 –', ko: '한국외국어대학교 글로벌스포츠산업학부 겸임교수', en: 'Adjunct Professor, Division of Global Sports Industry, HUFS' },
  { date: '2023.01 –', ko: '사단법인 한국대학e스포츠발전협의회 이사', en: 'Board Member, Korea University Esports Development Council' },
  { date: '2023.01 –', ko: '재단법인 꿈나무육성테니스재단 이사', en: 'Board Member, Kkumnamu Youth Tennis Foundation' },
  { date: '2018.03 –', ko: 'FEG(Future E-sports Group) 파트너', en: 'Partner, Future E-sports Group (FEG)' },
  {
    date: '2008.04 – 2020',
    ko: '한국e스포츠협회(KeSPA) — 국내·해외사업 총괄 및 대관 담당',
    en: 'Korea e-Sports Association (KeSPA) — domestic & international business, government relations',
    sub: [
      { date: '2018 – 2020', ko: '이사', en: 'Board Director' },
      { date: '2017.01 – 2018.02', ko: '전략사업국장', en: 'Director, Strategic Business' },
      { date: '2016.01 – 2018.02', ko: 'Properties 이사', en: 'Director, KeSPA Properties' },
      { date: '2016.01 – 2016.12', ko: '사업국장', en: 'Director, Business' },
      { date: '2013.01 – 2015.12', ko: '사업팀장', en: 'Head of Business Team' },
      { date: '2011.12 – 2012.12', ko: '경기국장', en: 'Director, Competition' },
      { date: '2008.04 – 2011.07', ko: '경기국 과장', en: 'Manager, Competition Department' },
    ],
  },
  { date: '2013.02 – 2013.07', ko: '2013 인천 실내무도아시아경기대회 e스포츠 종목 기술위원장', en: 'Technical Committee Chair for Esports, Incheon 2013 Asian Indoor & Martial Arts Games' },
  { date: '2008, 2010', ko: 'IEF 국가대표팀 감독', en: 'Head Coach, Korean National Team at IEF' },
  { date: '2005.04 – 2008.03', ko: 'SK텔레콤 T1 e스포츠팀 수석코치', en: 'Chief Coach, SK Telecom T1' },
  { date: '2002.08 – 2005.03', ko: 'POS e스포츠팀 전략코치', en: 'Strategy Coach, POS esports team' },
];

export const education = {
  en: [
    'Ph.D. student (in progress)',
    'B.A., Seoul National University',
    'M.S., Hankuk University of Foreign Studies',
    'Secondary School Teacher Certificate in Physical Education, Grade 2 (Ministry of Education)',
    'Sports Management Certificate (Ministry of Culture, Sports and Tourism)',
    "Minister's Commendation, Ministry of Culture, Sports and Tourism — for contributing to the founding of the Korea Disabled Esports Federation",
  ],
  ko: [
    '박사과정 재학 중',
    '서울대학교 학사',
    '한국외국어대학교 석사',
    '2급 체육 정교사 자격 (교육부)',
    '스포츠경영관리사 자격 (문화체육관광부)',
    '문화체육관광부 장관 표창 (대한장애인e스포츠연맹 설립 기여)',
  ],
};

// 원문 표기 그대로
export const publications = {
  papers: [
    '박성희, 서형석, 황주희 (2023). e스포츠의 지속발전을 위한 교육 커리큘럼 제안: 한국과 미국의 비교를 중심으로.',
    '박성희, 서형석, 박세진 (2024). Stacey의 의사결정 이론에 근거한 e스포츠 교육커리큘럼 발전 방안.',
    '한국 e스포츠 이해관계자의 관계변화에 대한 탐색적 연구 (An exploratory study of changing relationships among Korean esports stakeholders).',
    'Lee, Y. H., Seo, H., Park, S., & Hwang, J. H. Promoting Stretching Engagement through Health Belief Model-Based Nudges: The Effectiveness of Threat vs. Benefit-Based Nudge Messages.',
  ],
  books: [
    'Esports Business Management (Rick Smith; Eds. David P. Hedlund, Gil Fried) — 번역 박성희, 서형석.',
  ],
  projects: [
    '디지털 세대 도래에 따른 중고교 내 이스포츠 활동 도입 타당성 조사 및 전략 수립 연구 (2024). (사)한국e스포츠협회.',
    '국제 e스포츠 대회 개최·운영 지침 연구 및 ISO 표준 개발 (2025). (사)한국e스포츠협회.',
  ],
  talks: [
    '서형석. e스포츠산업의 발전과제와 전망. 한국융합과학회 국제학술대회, 2023.12.',
    'Seo Hyung Seok. An Exploratory Study of Changing Relationships Among Korean Esports Stakeholders. World Congress on Kinesiology & Sport Science, 2025.',
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
