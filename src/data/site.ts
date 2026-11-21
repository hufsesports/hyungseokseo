// 사이트의 모든 문구는 이 파일에서 고칩니다.
// 새 섹션을 추가할 때도 데이터를 여기에 넣고, 컴포넌트는 기존 것을 재사용합니다.

export type Lang = 'ko' | 'en';

export const links = {
  scholar: 'https://scholar.google.com/citations?user=pczk6zgAAAAJ&hl=en',
  hufs: 'https://sport.hufs.ac.kr/profl/sport/71/4585/artclView.do',
  instagram: 'https://instagram.com/seo.hyeongseok',
  emailWork: 'esports@hufs.ac.kr',
  emailPersonal: 'snupe96@gmail.com',
};

// 사진 추가: public/journey/에 파일을 넣고 아래에 한 줄 추가
export const journey = [
  { src: '/journey/t1b_2005.webp', year: 2005, ko: 'SK텔레콤 T1 · SKY 프로리그 2005 후기리그 우승', en: 'SK Telecom T1 · SKY Proleague 2005 champions' },
  { src: '/journey/t1a_2005.webp', year: 2005, ko: 'SK텔레콤 T1', en: 'SK Telecom T1' },
  { src: '/journey/kespa_2008.webp', year: 2008, ko: '한국e스포츠협회(KeSPA)', en: 'Korea e-Sports Association (KeSPA)' },
  { src: '/journey/un_2010.webp', year: 2010, ko: 'UN', en: 'United Nations' },
  { src: '/journey/imag_2013.webp', year: 2013, ko: '인천 실내무도아시아경기대회 기술대표 회의', en: 'Incheon 2013 Asian Indoor & Martial Arts Games · Technical Delegates Meeting' },
  { src: '/journey/gamemeca_2013.webp', year: 2013, ko: '게임메카', en: 'GameMeca' },
  { src: '/journey/feg_2019.webp', year: 2019, ko: 'Future E-sports Group', en: 'Future E-sports Group' },
  { src: '/journey/krkpl_2019.webp', year: 2019, ko: 'KRKPL', en: 'KRKPL' },
  { src: '/journey/dailyesportsb_2019.webp', year: 2019, ko: '데일리e스포츠 인터뷰', en: 'Daily Esports interview' },
  { src: '/journey/ecea_2021.webp', year: 2021, ko: 'ECEA', en: 'ECEA' },
  { src: '/journey/kespa_forum3_2025.webp', year: 2025, ko: 'KeSPA 글로벌 이스포츠 포럼', en: 'KeSPA Global Esports Forum' },
  { src: '/journey/kespa_forum2_2025.webp', year: 2025, ko: 'KeSPA 글로벌 이스포츠 포럼', en: 'KeSPA Global Esports Forum' },
];

export const copy = {
  ko: {
    meta: {
      title: '서형석 Henry Seo — From E to F: Esports to Future Sports',
      description:
        '한국외국어대학교 겸임교수, 22년 넘게 코칭·리그 운영·협회 전략·국제대회를 거쳐 온 e스포츠 실무자 서형석(Henry Seo)입니다.',
    },
    nav: [
      { label: 'Teaching', href: '/teaching/' },
      { label: 'QA Hub', href: '/qahub/' },
    ],
    name: '서형석',
    nameAlt: 'Henry Seo',
    tagline: 'From E to F — Esports to Future Sports.',
    intro:
      '한국외국어대학교 겸임교수이자, 22년 넘게 코칭, 리그 운영, 협회 전략, 국제 비즈니스와 국제대회를 거쳐 온 e스포츠 실무자입니다.',
    profileTitle: 'Profile',
    profile:
      'e스포츠 거버넌스, 대회 운영, 생태계, 비즈니스 경영, 시설·기술 표준을 다룹니다.',
    roles: [
      '한국외국어대학교 글로벌스포츠산업학부 겸임교수',
      'Future E-sports Group 파트너',
      '한국대학e스포츠협의회 이사',
      '전 SK텔레콤 T1 감독',
      '전 한국e스포츠협회(KeSPA) 경기·사업 총괄',
      '2013 인천 실내무도아시아경기대회 e스포츠 기술위원장',
    ],
    researchTitle: 'Research',
    researchNote: '세 가지 응용 연구 축으로 연구와 협업을 진행합니다.',
    research: [
      {
        title: 'e스포츠 실험 연구',
        body: 'e스포츠 맥락에서 수행, 의사결정, 행동 지표를 다루는 실험·준실험 연구.',
        href: '/experimental/',
      },
      {
        title: 'e스포츠 게임 디자인·제작',
        body: '학생이 만든 e스포츠·게임 프로토타입, QA 허브, 플레이테스트부터 배포까지의 제작 워크플로.',
        href: '/qahub/',
      },
      {
        title: 'e스포츠 교육·커리큘럼 개발',
        body: '학부 과정의 커리큘럼과 실습 설계, 인재 육성, 산업과 연계된 학습 성과.',
        href: '/teaching/',
      },
    ],
    journeyTitle: 'Journey',
    journeyNote: '코칭, 리그 운영, 전략, 교육, 국제 표준화를 거쳐 온 주요 장면들.',
    contactTitle: 'Contact',
    contact: {
      work: '업무',
      personal: '개인',
      scholar: 'Google Scholar',
      hufs: 'HUFS 교수 프로필',
      instagram: 'Instagram',
    },
    more: '자세히',
    langSwitch: { label: 'EN', href: '/en/' },
  },
  en: {
    meta: {
      title: 'Seo Hyung Seok (Henry Seo) — From E to F: Esports to Future Sports',
      description:
        'Adjunct professor at Hankuk University of Foreign Studies and an esports practitioner with 22+ years across coaching, league operations, association strategy, and international events.',
    },
    nav: [
      { label: 'Teaching', href: '/teaching/' },
      { label: 'QA Hub', href: '/qahub/' },
    ],
    name: 'Henry Seo',
    nameAlt: 'Seo Hyung Seok · 서형석',
    tagline: 'From E to F — Esports to Future Sports.',
    intro:
      'Adjunct professor at Hankuk University of Foreign Studies (HUFS) and an esports practitioner with 22+ years across coaching, league operations, association strategy, international business and international events.',
    profileTitle: 'Profile',
    profile:
      'My work focuses on esports governance, tournament operations, ecosystems, business management and facility/technology standards.',
    roles: [
      'Adjunct Professor, Division of Global Sports Industry, HUFS',
      'Partner, Future E-sports Group',
      'Board Member, Korea University Esports Council',
      'Former Head Coach, SK Telecom T1',
      'Former Director of Competition & Business, KeSPA',
      'Technical Committee Chair for Esports, Incheon 2013 Asian Indoor & Martial Arts Games',
    ],
    researchTitle: 'Research',
    researchNote: 'Three applied strands guide my research and collaboration.',
    research: [
      {
        title: 'Esports Experimental Research',
        body: 'Experimental and quasi-experimental studies in esports contexts, including performance, decision-making, and behavior metrics.',
        href: '/experimental/',
      },
      {
        title: 'Esports Game Design & Production',
        body: 'Student-built esports/game prototypes, QA hub, and production workflows for playtesting, iteration, and deployment.',
        href: '/qahub/',
      },
      {
        title: 'Esports Education & Curriculum Development',
        body: 'Curriculum and practicum design for undergraduate programs, talent development, and industry-aligned learning outcomes in esports.',
        href: '/teaching/',
      },
    ],
    journeyTitle: 'Journey',
    journeyNote: 'Selected moments across coaching, league operations, strategy, education, and international standardization.',
    contactTitle: 'Contact',
    contact: {
      work: 'Work',
      personal: 'Personal',
      scholar: 'Google Scholar',
      hufs: 'HUFS Profile',
      instagram: 'Instagram',
    },
    more: 'More',
    langSwitch: { label: 'KR', href: '/' },
  },
} as const;
