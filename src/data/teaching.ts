// Teaching 페이지 문구 (영문). 과목 추가는 courses 배열에 한 항목 추가.

export const teaching = {
  title: 'Teaching',
  tagline: 'Undergraduate Esports Curriculum Portfolio.',
  intro:
    'A set of practice-informed courses designed and delivered at Hankuk University of Foreign Studies (HUFS), spanning governance and media rights, industry and facilities, performance training, production and events, and experimental research.',
  approachTitle: 'Signature approach',
  approach:
    'The portfolio is structured as an applied pathway: conceptual foundations through lecture-based analysis, industry-aligned competencies through fieldwork and operational modeling, and studio-based production where students ship artifacts (reports, prototypes, events, and research outputs) under professional constraints.',
  stages: [
    {
      no: '01',
      title: 'Conceptual foundations',
      body: 'Lecture-driven frameworks and case analysis to build shared language (governance, media rights, industry structure, facilities).',
    },
    {
      no: '02',
      title: 'Industry-aligned competencies',
      body: 'Fieldwork and operational modeling that translate concepts into decisions, workflows, and performance routines.',
    },
    {
      no: '03',
      title: 'Studio outputs',
      body: 'Students ship artifacts under professional constraints: prototypes, event deliverables, and experimental research outputs.',
    },
  ],
  groups: [
    {
      title: 'Foundations',
      courses: [
        {
          name: 'Global Esports Governance',
          tags: ['Lecture', 'Policy & institutions'],
          body: 'Examines governance architectures in esports, including the roles of publishers, leagues, associations, broadcasters, and public institutions. Students interpret governance dilemmas through real cases and develop strategies for addressing contested authority, regulation, integrity, and stakeholder coordination.',
          outcomes: [
            'Map governing bodies and stakeholder roles across domestic and international contexts.',
            'Analyze governance issues using structured frameworks (legitimacy, regulation, integrity, dispute resolution).',
            'Produce a short policy memo or governance case brief grounded in evidence.',
          ],
        },
        {
          name: 'Global Esports Media Industry & Broadcasting Rights',
          tags: ['Lecture', 'Media platforms & rights'],
          body: 'Surveys the esports media value chain, platform strategies, distribution models, and rights negotiations. The course emphasizes strategic analysis of streaming workflows, data/measurement, emerging formats, and their implications for monetization and market structure.',
          outcomes: [
            'Understand broadcasting-rights economics, deal structures, and platform incentives.',
            'Evaluate how technology reshapes production, audience behavior, and media monetization.',
            'Deliver a rights-case analysis and a strategic recommendation brief.',
          ],
        },
        {
          name: 'Global Esports Industry Theory',
          tags: ['Lecture', 'Ecosystem & business'],
          body: 'Introduces the esports ecosystem—industry history, stakeholders, business models, and the evolving relationship between esports and traditional sport. Students build an analytical lens for explaining value creation, competition formats, and regional market differences.',
          outcomes: [
            'Explain key ecosystem actors, revenue streams, and value-creation mechanisms.',
            'Assess market trends and strategic positioning across regions and titles.',
            'Produce an industry landscape report and present implications for sport management.',
          ],
        },
        {
          name: 'Global Esports Facility Management',
          tags: ['Lecture', 'Fieldwork', 'Facilities & operations'],
          body: 'Focuses on esports venues and training environments as operational systems. Topics include facility typologies, space programming, technology infrastructure, event-readiness, safety/maintenance, and sustainability. The course typically includes visits to major domestic esports facilities and case-based evaluations.',
          outcomes: [
            'Explain how venue design and infrastructure shape competitive integrity and production quality.',
            'Model operational requirements (staffing, maintenance, risk, budgeting, stakeholder coordination).',
            'Complete a facility visit report or operational audit with evidence-based recommendations.',
          ],
        },
      ],
    },
    {
      title: 'Applied Studios',
      courses: [
        {
          name: 'Global Esports Practice Practicum',
          tags: ['Lecture + practice', 'Performance training'],
          body: 'Combines tactical theory with structured practice. Students study match fundamentals, teamwork/communication, and professional training methodologies while applying them in team-based sessions. Replay analysis and feedback loops are used to support measurable performance improvement.',
          outcomes: [
            'Develop strategic thinking, role clarity, and team communication protocols.',
            'Apply training cycles (goal-setting, practice design, review, adjustment) to improve performance.',
            'Produce match analysis notes and an individual/team development plan.',
          ],
        },
        {
          name: 'Esports Game Design & Production Practicum',
          tags: ['Studio', 'Prototype → publish'],
          body: 'A project-based studio where students design and build playable web or mobile games informed by esports game structures. Students write a Game Design Document (GDD), develop prototypes with AI-assisted coding, iterate with user personas and feedback, publish the build, and complete a postmortem.',
          outcomes: [
            'Translate gameplay goals into systems, rules, UX flows, and a coherent GDD.',
            'Build and ship a playable prototype with iterative testing and feedback integration.',
            'Publish and present the final build alongside a production postmortem.',
          ],
          link: { label: 'Student QA Hub', href: '/qahub/' },
        },
        {
          name: 'Esports Event Planning & Operations Practicum',
          tags: ['Studio', 'Plan → execute'],
          body: 'Guides students through the full lifecycle of an esports event—from concept and stakeholder alignment to operations, production, and post-event evaluation. Students deliver one (or more) events intended to grow into a recognizable local initiative, emphasizing professional workflows and execution discipline.',
          outcomes: [
            'Build an operations plan (scope, timeline, roles, budget, and risk controls).',
            'Run event-day operations across competition, broadcast, and participant experience.',
            'Submit a post-event report with evaluation metrics and improvement actions.',
          ],
        },
        {
          name: 'Global Esports Convergence',
          tags: ['Research studio', 'Experimental design'],
          body: 'A hands-on course where students design and execute feasible experiments (or quasi-experiments) in esports contexts. Students build or adapt a simple game/gamified tool, set up treatment/control conditions, collect performance metrics (accuracy, reaction time, success rate, completion time), and write a reproducible report while following research ethics.',
          outcomes: [
            'Operationalize esports-relevant constructs into measurable variables and procedures.',
            'Implement controlled manipulations (feedback, information, constraints) and collect data reliably.',
            'Produce a concise research report with ethics, data management, and replication notes.',
          ],
          link: { label: 'Course page', href: '/experimental/' },
        },
      ],
    },
  ],
};
