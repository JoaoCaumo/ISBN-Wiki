---
layout: home

# Hero section
hero:
  name: ISBN Product Security Wiki
  tagline: Living documentation for onboarding, best practices, processes and technical guidance.
  actions:
    - theme: brand
      text: Start Here
      link: /Onboarding/FirstSteps
    - theme: alt
      text: Contribute
      link: /WikiHome/Contributing

# Features section
features:
  - icon: 
      src: /Home/Images/Book.svg
      alt: Book
    title: Operations & Runbooks
    details: A centralized reference for day-to-day security operations. It defines our planning and reporting cadence, captures step-by-step procedures for routine and incident scenarios, clarifies process ownership, and provides vetted automation and vulnerability analyses to reduce toil and drive issues to closure.
    link: /Operations/OpsCalendar
  - icon: 
      src: /Home/Images/Organization.svg
      alt: Team
    title: About the Team
    details: Who we are and how to work with us. This section introduces the team’s mission and scope, lists our primary security goals, and shows how we’re organized (roles, structure, and decision rights).
    link: /AboutTheTeam/TeamOverview
  - icon: 
      src: /Home/Images/DataFlow.svg
      alt: DataFlow
    title: Data Flows & Repositories
    details: A clear map of where our security data lives and how it moves—from sources to pipelines to storage and reporting. It defines owners, refresh cadences, and quality checks so analyses are repeatable, auditable, and aligned across engineering, operations, and leadership.
    link: /DataFlowsAndRepositories
  - icon: 
      src: /Home/Images/Policy.svg
      alt: Policies
    title: Governance
    details: The guardrails for how we operate securely. This section centralizes policy references and control requirements, defines SLA standards and decision rights, and outlines audit & evidence practices for internal/external reviews. 
    link: /Governance/GlobalPolicy
  - icon: 
      src: /Home/Images/LoBs.svg
      alt: L.o.B
    title: LoB's Architecture
    details: A live view of our systems by line of business. It centralizes key diagrams, data flows, and dependencies, maps scanning coverage and known exceptions/risks, and provides context for design reviews, threat modeling, and faster incident investigation and change decisions.
    link: /LoBArchitecture/Diagrams
  - icon: 
      src: /Home/Images/Automation.svg
      alt: Automation
    title: Automation Projects
    details: In-flight automations and scripts that reduce toil and cycle time. It documents business value, owners, and current status, provides usage instructions and guardrails, and explains how to request enhancements or contribute safely through reviews and testing.
    link: /AutomationProjects

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: BTP D@S BR Wiki
  - - meta
    - name: title
      content: BTP D@S BR Wiki
#  - - link
#    - rel: icon
#      type: image/png
#      href: logo.png



---
<footer
  style="
    margin-top:40px;
    border-top:1px solid var(--vp-c-divider);
    background:var(--vp-c-bg-soft);
    color:var(--vp-c-text-1);
  "
>
  <div
    style="
      max-width:var(--vp-layout-max-width);
      margin:0 auto;
      padding:28px 24px 36px 24px;
    "
  >
    <!-- Columns -->
    <div
      style="
        display:flex;
        justify-content:space-between;
        margin-bottom:30px;
      "
    >
      <section style="min-width:220px; flex:1 1 220px;">
        <h4 style="margin:0 0 10px; font-size:14px; font-weight:700; color:var(--vp-c-text-2);">
          Tools
        </h4>
        <ul style="list-style:none; padding:0; margin:0;">
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Tenable</a></li>
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Splunk</a></li>
        </ul>
      </section>
      <section style="min-width:220px; flex:1 1 220px;">
        <h4 style="margin:0 0 10px; font-size:14px; font-weight:700; color:var(--vp-c-text-2);">
          Community
        </h4>
        <ul style="list-style:none; padding:0; margin:0;">
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Our Organization</a></li>
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Contacts</a></li>
        </ul>
      </section>
      <section style="min-width:220px; flex:1 1 220px;">
        <h4 style="margin:0 0 10px; font-size:14px; font-weight:700; color:var(--vp-c-text-2);">
          FAQs
        </h4>
        <ul style="list-style:none; padding:0; margin:0;">
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Vulnerability Related</a></li>
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Product Standard Mailbox </a></li>
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Stack@SAP </a></li>
        </ul>
      </section>
      <section style="min-width:220px; flex:1 1 220px;">
        <h4 style="margin:0 0 10px; font-size:14px; font-weight:700; color:var(--vp-c-text-2);">
          More
        </h4>
        <ul style="list-style:none; padding:0; margin:0;">
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Cloud Security </a></li>
          <li><a href="#" style="color:var(--vp-c-text-1); text-decoration:none;">Compliance Offerings </a></li>
        </ul>
      </section>
    </div>
    <!-- Bottom row -->
    <div
      style="
        display:flex;
        flex-wrap:wrap;
        gap:12px 24px;
        padding-top:18px;
        border-top:1px solid var(--vp-c-divider);
        font-size:12px;
        color:var(--vp-c-text-2);
        justify-content:space-between;
      "
    >
      <span>Copyright © 2025 SAP SE.</span>
    </div>
  </div>
</footer>

