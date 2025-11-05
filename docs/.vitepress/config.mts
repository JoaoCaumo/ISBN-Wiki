import { defineConfig } from 'vitepress'
import basicsSidebar from '../Basics/wiki.ts';

export default defineConfig({
  title: "ISBN Product Security Wiki",
  description: "Wiki for sharing knowledge in the team.",
  head: [['link',  {rel: 'icon', href: '/Home/Images/SAP_Logo.svg' }]],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/JoaoCaumo/ISBN-Wiki/tree/main/:path',
      text: 'Edit this page'
    },
    lastUpdated: { text: 'Last updated' },
    footer: {
      message: 'Footer text ...',
      copyright: 'I am a footer '
    },
    logo: {
      src: '/Home/Images/SAP_Logo.svg',
      alt: 'ISBN Product Security Wiki Logo',
    },
    outline: { level: [2,3], label: 'On this page' },
    nav: [
      { text: 'Home', link: '/Home/' },
      { text: 'Wiki', link: '/WikiHome' }
   ],

    sidebar: [
      {
        text: 'ISBN Product Security Wiki',
        items: [
          { text: 'Home', link: '/WikiHome/' },
          { text: "Creating & Changing documentation", link: '/Contributing/' },
          {
            text: 'Basics',
            collapsed: true,
            items: [
              {
                text: 'Onboarding',
                collapsed: true,
                items: [
                  { text: 'First Steps', link: '/Basics/Onboarding/FirstSteps' },
                  { text: 'Accessess', link: '/Basics/Onboarding/Accessess' },
                  { text: 'Learning', link: '/Basics/Onboarding/Learning' },
                ]
              },
              { text: 'Security Survival Guide', link: '/Basics/SurvivalGuide' },
            ]
          },
          { text: 'Runbooks',
            collapsed: true,
            items: [
              { text: 'Security Incident Management', link: '/Runbooks/IncidentManagement' },
              { text: 'Security Requirements', link: '/Runbooks/Requirements' },
              { text: 'Security Reviews', link: '/Runbooks/SecurityReviews' },
            ]
          },
        { text: 'Vulnerability Management',
            collapsed: true,
            items: [
            { text: 'Overview & Policy', link: '/VulnerabilityManagement/OverviewAndPolicy' },
            { text: 'SLAs & Severity Matrix', link: '/VulnerabilityManagement/SLAs' },
            { text: 'Discovery (Scanners & Feeds)', link: '/VulnerabilityManagement/Discovery' },
            { text: 'Exception / Risk Acceptance', link: '/VulnerabilityManagement/Exceptions' },
            { text: 'Remediation & Mitigations', link: '/VulnerabilityManagement/RemediationAndMitigations' },
            { text: 'Tools & Resources', link: '/VulnerabilityManagement/ToolsAndResources' },
            ]
        },
          {
            text: 'Knowledge Base',
            collapsed: true,
            items: [
              { text: 'Hostnames & Environments', link: '/KnowledgeBase/HostnamesEnvironments' },
              { text: 'Useful Links', link: '/KnowledgeBase/UsefulLinks' },
              { text: 'Glossary & Acronyms', link: '/KnowledgeBase/Glossary' },
              { text: 'FAQs', link: '/KnowledgeBase/FAQs' },
            ]
          },
          {
            text: 'Architecture & Systems',
            collapsed: true,
            items: [
              { text: 'System Map', link: '/ArchitectureNSystems/SystemMap' },
              { text: 'Data Flows', link: '/ArchitectureNSystems/DataFlows' },
            ]
          }
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
