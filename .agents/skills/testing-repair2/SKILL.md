---
name: testing-repair2
description: Test the repair2.ai platform end-to-end. Use when verifying UI pages, interactive flows, or bug fixes across the 5 main pages.
---

# Testing repair2.ai

## Dev Environment
- Run `npm run dev` to start Next.js dev server at `http://localhost:3000`
- No authentication required — all pages are publicly accessible
- No database or external services needed — all data is mock/client-side

## Lint & Build
- `npm run lint` — ESLint check
- `npm run build` — Full production build (catches SSR issues)

## Pages to Test
| Page | URL | Key Interactions |
|------|-----|-----------------|
| Landing | `/` | Hero, stats bar (2,500+, 12, <3 min, 4.9/5), navigation links |
| Assistance | `/assistance` | 3-step flow: form -> 2.5s loading -> matched workshop card |
| Workshops | `/workshops` | Search by name/speciality, city dropdown filter, 6 mock workshops |
| Insurance | `/insurance` | Claim form with insurer dropdown, submit -> success with claim ref |
| Workshop Portal | `/workshop-portal` | Overview/Register tabs, stats cards, registration form -> success |

## Common Test Scenarios
1. **Assistance flow**: Fill car make + description (both required), submit, verify progress indicator highlights completed steps, wait for workshop match (AutoFix Madrid Centro, 2.3 km, 4.8 rating, 12 min ETA), click "Find Another" to reset
2. **Workshop search**: Type "BMW" to filter to TallerPro Barcelona; select "Valencia" city to see MecanicaRapida (Closed badge)
3. **Insurance claim**: Select insurer, fill policy + description, submit -> verify claim ref format is `CLM-{CURRENT_YEAR}-XXXX`
4. **Workshop registration**: Switch to Register tab, fill name/email/city (all required), submit -> success echoes back name and email

## Known Gotchas
- The assistance page uses a `setTimeout(2500)` for the loading animation — you need to wait for the transition
- Insurance claim ref uses `new Date().getFullYear()` — verify year matches current year, not a hardcoded value
- Progress indicator uses index-based comparison (`i <= currentIndex`) — verify step 1 stays blue/checkmarked during step 2
- Workshop search filters on both `name` and `specialities` fields (e.g. "BMW" matches the speciality tag, not the workshop name)
- Specialities and Number of Mechanics fields in workshop registration are uncontrolled (no state binding) — this is intentional for MVP

## Devin Secrets Needed
None — no authentication or API keys required for local testing.
