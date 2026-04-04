# Urology Department Command Center

University of Michigan Department of Urology — operational dashboard and management tools.

## Live Site

**https://tyhugs.github.io/command-center/**

## Structure

| Page | Path | Purpose |
|------|------|---------|
| Command Center Hub | `/` | Main dashboard with links to all tools |
| **Strategy & Planning** | | |
| Strategic Roadmap | `/100-day-plan/` | 3-year vision, Year 1 priorities & KPI targets |
| 100-Day Report | `/100-day-report/` | Accomplishments, metrics & time reporting |
| Key Projects | `/project-management/` | Goals, milestones & project tracking |
| Strategic Plan — Clinical Ops | `/strat-clinops/` | Clinical operations strategy |
| Strategic Plan — Faculty | `/strat-faculty/` | Faculty survey results |
| **Operations & Clinical** | | |
| KPI Dashboard | `/kpi-dashboard/` | Activity & financial KPIs with filtering and sparklines |
| OR Data Monthly | `/or-data-monthly/` | Surgical case volume dashboard + data extraction tools |
| Surgical Yield | `/surgical-yield/` | Clinic-to-OR conversion analytics |
| No-Show Improvement | `/no-show-improvement/` | Predictive no-show reduction project |
| Provider Schedules | `/provider-schedules/` | Provider scheduling tool |
| **Finance & Staffing** | | |
| Finance & Transfers | `/finance/` | Monthly financial reconciliation + raw data by FY |
| Staffing | `/staffing/` | Admin staffing dashboard + faculty effort data |
| BizIQ | `/biziq/` | Business intelligence portal |
| **Other** | | |
| Development | `/development/` | Fundraising & advancement |
| Marketing | `/marketing/` | Marketing initiatives |
| Knowledgebase | `/knowledgebase/` | Department knowledge hub |
| Skills & Automation | `/skills/` | AI-powered workflows & pipelines |
| Urology Website | `/urology-website/` | Department website redesign (multi-file app) |

## Shared Assets

| File | Location | Purpose |
|------|----------|---------|
| Nav snippet | `/_shared/cc-nav-snippet.html` | Back-to-hub nav bar for all sub-dashboards |

## Deployment

This site is deployed automatically via GitHub Pages from the `main` branch root.

A `.gitignore` is configured to exclude `.DS_Store`, Office temp/lock files, and other OS artifacts.
