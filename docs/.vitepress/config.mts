import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ISBN Product Security Wiki",
  description: "Wiki for sharing knowledge in the team.",
  themeConfig: {
    outline: { level: [2,3], label: 'On this page' },
//    nav: [
//      { text: 'Home', link: '/Home/' },
//      { text: 'Examples', link: '/markdown-examples' }
//   ],

    sidebar: [
      {
        text: 'ISBN Product Security Wiki',
        items: [
          { text: 'Home', link: '/Home/' },
          { text: "Creating & Changing documentation", link: '/CreatingDocumentation/' },
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
              { text: 'Vulnerability Management', link: '/Runbooks/VulnerabilityManagement' },
              { text: 'Security Incident Management', link: '/Runbooks/IncidentManagement' },
              { text: 'Security Requirements', link: '/Runbooks/Requirements' },
              { text: 'Security Reviews', link: '/Runbooks/SecurityReviews' },
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
