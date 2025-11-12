---
title: Lessons Learned
description: How we capture and share project lessons so the next person moves faster.
---

# Lessons Learned

Use this space to publish concise, actionable write-ups from **projects, initiatives, and trainings**. Each lesson gets its **own page** and a **sidebar entry** under:

**Continuous Improvement & Knowledge Sharing → Lessons Learned → _Lesson Learned_**

---

## When to add a lesson

- A decision, workaround, or pattern that others will likely repeat  
- A pitfall that cost time (and how to avoid it)  
- A script/query/config that’s reusable  
- A control, audit, or SLA tactic that passed review  
- A training takeaway that changed how we work

---

## Where to put it (folders & names)

- Folder: `/docs/ContinuousImprovement/LessonsLearned/<project-slug>/`
- File: `index.md` (one folder per lesson)
- Slug style: `short-kebab-title` (e.g., `grc-drc-inbound-pipeline`)

---

## Sidebar entry (add in your config)

```ts
// .vitepress/config.ts (excerpt)
{
  text: 'Continuos Improvement & Knowledge Sharing',
  collapsed: true,
  items: [
    {
      text: 'Lessons Learned',
      collapsed: true,
      items: [
        // Add your project here:
        { text: 'GRC → DRC Inbound Pipeline', link: '/ContinuousImprovement/LessonsLearned/grc-drc-inbound-pipeline/' }
      ]
    }
  ]
}
