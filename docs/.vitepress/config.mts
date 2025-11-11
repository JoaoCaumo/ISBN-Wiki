import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ISBN Product Security",
  base: '/ISBN-Wiki/',
  description: "Wiki for sharing knowledge in the team.",
  head: [['link',  {rel: 'icon', href: '/Images/SAP_Logo.svg' }]],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/JoaoCaumo/ISBN-Wiki/tree/main/docs/:path',
      text: 'Edit this page'
    },
    lastUpdated: { text: 'Last updated' },
    logo: {
      src: '/Images/SAP_Logo.svg',
      alt: 'ISBN Product Security Wiki Logo',
    },
    outline: { level: [2,3], label: 'On this page' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/WikiHome' }
   ],

    sidebar: [
      {
        text: 'ISBN Product Security Wiki',
        items: [
          { text: 'Home', link: '/WikiHome/' },
          { text: 'Contributing to the Wiki', link: '/WikiHome/Contributing' },
          { text: 'About the Team', collapsed: true, items: [
            { text: 'Team Overview', link: '/AboutTheTeam/TeamOverview' },
            { text: 'Mission', collapsed: true, items: [
              { text: 'Scope of Work', link: '/AboutTheTeam/Mission/Scope' },
              { text: 'Primary Security Goals', link: '/AboutTheTeam/Mission/Goals' },
            ] },
            { text: 'Contacts & Communication', link: '/AboutTheTeam/ContactsAndCommunication/', collapsed: true, items: [
              { text: 'Team Structure and Roles', link: '/AboutTheTeam/ContactsAndCommunication/TeamContacts' },
              { text: 'Key Contacts', link: '/AboutTheTeam/ContactsAndCommunication/KeyContacts' },
            ]  },
          ]},
          { text: 'Onboarding & Training', collapsed: true, items: [
            { text: 'First Steps', link: '/Onboarding/FirstSteps' },
            { text: 'Tools & Trainings', link: '/Onboarding/Tools' },
            { text: 'Internal Policies / Standards', link: '/Onboarding/Policies', }
          ]},
          { text: 'Operations & Runbooks', collapsed: true, items: [
            { text: 'Operations Calendar & Reporting Rhythm', link: '/Operations/OpsCalendar' },
            { text: 'Runbooks', collapsed: true, items: [
              { text: 'Operational Guides', link: '/Operations/Runbooks/OperationalGuides' },
              { text: 'Escalation Procedures', link: '/Operations/Runbooks/Escalation' },
              { text: 'Process Ownership Details', link: '/Operations/Runbooks/ProcessOwnership' },
            ]},
            { text: 'Automation & Scripts', link: '/Operations/Automation' },
            { text: 'Vulnerability Analysis', link: '/Operations/VulnerabilityAnalysis' },
          ]},
          { text: 'LoB Architecture', collapsed: true, items: [
            { text: 'Diagrams', link: '/LoBArchitecture/Diagrams' },
            { text: 'Scanning Coverage', collapsed: true, items: [
              { text: 'Coverage per Tool, per LoB', link: '/LoBArchitecture/ScanningCoverage/CoveragePerLoB' },
              { text: 'Excluded Assets/Systems', link: '/LoBArchitecture/ScanningCoverage/ExcludedAssets' },
            ]},
            { text: 'Exceptions & Risks', link: '/LoBArchitecture/ExceptionsAndRisks'}
          ]},
          { text: 'Tool Inventory', link: '/ToolInventory/' },
          { text: 'Data Flows & Repositories', link: '/DataFlowsAndRepositories/' },
          { text: 'Governance & Process Management', collapsed: true, items: [
            { text: 'Global Policy References', link: '/Governance/GlobalPolicy' },
            { text: 'SLA Definitions & References', link: '/Governance/SLADefinitions' },
            { text: 'Audit & Evidence Collection', collapsed: true, items: [
              { text: 'External Audits', link: '/Governance/AuditAndEvidence/ExternalAudits' },
              { text: 'Internal Audits', link: '/Governance/AuditAndEvidence/InternalAudits' },
            ]},
          ]},
          { text: 'Automation Projects', link: '/AutomationProjects/' },
          { text: 'Continuos Improvement & Knowledge Sharing', collapsed: true, items: [
            { text: 'Lessons Learned', link: '/ContinuousImprovement/LessonsLearned' },
            { text: 'Projects' , link: '/ContinuousImprovement/Projects' },
            { text: 'Roadmap & Initiatives', link: '/ContinuousImprovement/Roadmap' },
            { text: 'Trainigs, Certifications & Resources', link: '/ContinuousImprovement/Trainings' },
          ]},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JoaoCaumo/ISBN-Wiki' }
    ],
    search: {
      provider: 'local'
    }
  }
})
