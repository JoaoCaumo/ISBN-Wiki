---
title: "GRC: Access Review Automation – Cut Cycle Time by 60%"
summary: "How we automated quarterly access reviews in SAP GRC, reduced rework, and tightened evidence quality."
date: 2025-11-12
author: "João Caumo"
lob: ["Enterprise Platforms"]
tools: ["SAP GRC", "Jira", "Splunk", "GitHub Actions"]
tags: ["governance", "automation", "audit", "SLA"]
links:
  - text: Jira Epic
    url: "https://jira.example/EPIC-1234"
  - text: Splunk Dashboard
    url: "https://splunk.example/app/grc/access-review"
  - text: GitHub Action (workflow)
    url: "https://github.com/org/repo/.github/workflows/grc-review.yml"
---

# GRC: Access Review Automation – Cut Cycle Time by 60%

## Context
Quarterly SAP GRC access reviews were taking ~12–15 business days, with frequent rework due to missing evidence and inconsistent reviewer responses. Audit asked for stronger proof and a standard cadence.

## Objective
Reduce review cycle time by 50% while improving evidence quality to pass internal audit on first submission.

## What we tried
- Manual CSV exports + email reminders (too error-prone).
- One-off Splunk reports (helpful, but no consistent delivery).
- Ad-hoc macros in spreadsheets (broke when column orders changed).

## What finally worked
**Pipeline + guardrails**:
1. **Nightly export** from GRC (roles/owners/findings) to a controlled bucket.
2. **Normalization job** (GitHub Action) converts exports to a stable schema and signs artifacts (hash + timestamp).
3. **Splunk dashboards** show reviewer queues, overdue items, and exceptions; widgets link directly to Jira subtasks.
4. **Automated reminders** (GitHub Action on a schedule) @mention owners with counts, due dates, and direct links.
5. **Evidence pack builder** bundles the signed CSV, dashboard PDF, and approval trail into a single artifact for audit.

### Snippet: evidence pack job (excerpt)
```yaml
name: grc-evidence-pack
on:
  workflow_dispatch:
  schedule:
    - cron: "0 22 * * 1"  # Mondays 22:00 UTC
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Normalize export
        run: python scripts/normalize_grc.py input/grc.csv out/grc_normalized.csv
      - name: Sign artifact
        run: shasum -a 256 out/grc_normalized.csv > out/grc_normalized.csv.sha256
      - name: Package
        run: zip -j out/grc_evidence_$(date +%F).zip out/grc_normalized.csv out/grc_normalized.csv.sha256 docs/approval_trail.pdf
      - uses: actions/upload-artifact@v4
        with:
          name: grc-evidence
          path: out/*.zip
