# ⚙️ Phase 3 — Development Sprint

**Project:** Tragad Soni Community Website
**Prepared by:** Milan SNTL84 · [desidevloper.com](https://desidevloper.com)
**Timeline:** Week 6–12 · **Milestone:** M3 — Beta Site Ready for Testing
**Total Estimated Hours:** 356 hrs · ~44 working days

---

## 📋 Task List

| # | Task | Deliverable | Start | End | Owner | Dependency | Status | Est. Hrs | Priority | Planning Notes |
|---|------|-------------|-------|-----|-------|------------|--------|----------|----------|----------------|
| 1 | Dev Environment Setup | Git repo, CI/CD pipeline, local dev, staging server on Vercel/DO | Wk 6 | Wk 6 | Developer | P2 Done | To Do | 8 | 🔴 High | Use GitHub Actions for auto-deploy |
| 2 | Homepage Development | Hero, member count, events preview, news feed, gallery preview, donation CTA | Wk 6 | Wk 7 | Developer | Setup | To Do | 24 | 🔴 High | Core SEO meta + Open Graph for WhatsApp shares |
| 3 | Member Auth System | Signup, OTP SMS verify, email verify, Google login, password reset | Wk 7 | Wk 8 | Developer | Homepage | To Do | 32 | 🔴 High | Firebase Auth or Auth0 free tier |
| 4 | Member Profile & Directory | Profile CRUD, photo upload, search by name/city/gotra, privacy controls | Wk 8 | Wk 9 | Developer | Auth | To Do | 40 | 🔴 High | Admin approval flow before profile goes live |
| 5 | Family Registration Module | Family head, add members, link existing members, basic family tree | Wk 9 | Wk 9 | Developer | Profile | To Do | 32 | 🔴 High | Auto-generate family code TS-YEAR-XXXX |
| 6 | Events Calendar | Create events, RSVP, reminders via WhatsApp, past events archive | Wk 9 | Wk 10 | Developer | Profile | To Do | 24 | 🔴 High | iCal export for Google Calendar sync |
| 7 | Photo & Video Gallery | Albums by event/year, upload by admin, lightbox viewer, lazy load | Wk 10 | Wk 10 | Developer | Events | To Do | 20 | 🔴 High | Store on AWS S3 / Cloudflare R2 |
| 8 | Trade Directory | Business listings, categories, search, Google Maps pin, contact CTA | Wk 10 | Wk 11 | Developer | Profile | To Do | 32 | 🔴 High | Jewellery / Bullion / CA / Medical sub-cats |
| 9 | Education & School Section | Scholarships, applications, tutor directory, school listings | Wk 11 | Wk 11 | Developer | Directory | To Do | 28 | 🔴 High | See Study Alignment & School Section sheets |
| 10 | Healthcare Module | Doctor directory, blood donor registry, emergency search, health camps | Wk 11 | Wk 12 | Developer | Directory | To Do | 28 | 🔴 High | Blood group search is HIGH priority feature |
| 11 | Matrimony Module | Privacy-first blurred photos, mutual interest reveal, gotra block | Wk 12 | Wk 12 | Developer | Profile | To Do | 36 | 🔴 High | See Matrimony sheet for full field spec |
| 12 | Donation & Payment | Razorpay integration, auto PDF receipt for 80G, membership fee | Wk 12 | Wk 12 | Developer | Auth | To Do | 20 | 🔴 High | Test with 1 live transaction before launch |
| 13 | Admin Panel | Member approval, content CMS, analytics dashboard, role management | Wk 12 | Wk 12 | Developer | All modules | To Do | 32 | 🔴 High | 3 roles: Super Admin, City Admin, Moderator |

---

## 📅 Week-by-Week Breakdown

### Week 6 — Environment + Homepage
| Task | Owner | Output | Hrs |
|------|-------|--------|-----|
| Git repo + CI/CD + staging server setup | Developer | Staging URL live | 8 |
| Homepage development (hero, stats, events, news, gallery, CTA) | Developer | Homepage deployed to staging | 24 |

### Week 7–8 — Auth + Member Profile
| Task | Owner | Output | Hrs |
|------|-------|--------|-----|
| Member signup + OTP + Google login + password reset | Developer | Auth system live | 32 |
| Member profile CRUD + photo upload + privacy controls | Developer | Profile pages live | 40 |

### Week 9 — Family + Events
| Task | Owner | Output | Hrs |
|------|-------|--------|-----|
| Family head registration + add members + family code | Developer | Family module live | 32 |
| Events calendar + RSVP + WhatsApp reminders | Developer | Events module live | 24 |

### Week 10–11 — Gallery + Trade + Education + Healthcare
| Task | Owner | Output | Hrs |
|------|-------|--------|-----|
| Photo/video gallery + album + lightbox | Developer | Gallery live | 20 |
| Business listings + categories + map pins | Developer | Trade directory live | 32 |
| Scholarships + tutor directory + school listings | Developer | Education section live | 28 |
| Doctor directory + blood donors + health camps | Developer | Healthcare module live | 28 |

### Week 12 — Matrimony + Payments + Admin
| Task | Owner | Output | Hrs |
|------|-------|--------|-----|
| Matrimony profiles + browse + mutual interest + gotra block | Developer | Matrimony module live | 36 |
| Razorpay integration + PDF receipt generation | Developer | Payments live | 20 |
| Admin panel: approval, CMS, analytics, roles | Developer | Admin panel live | 32 |

---

## ✅ M3 Completion Criteria

| Criterion | Status |
|-----------|--------|
| All 13 modules deployed to staging server | ⬜ To Do |
| Member registration + OTP working end-to-end | ⬜ To Do |
| Family registration module functional | ⬜ To Do |
| Matrimony with privacy controls working | ⬜ To Do |
| Razorpay payment tested with live transaction | ⬜ To Do |
| Admin panel: 3 roles operational | ⬜ To Do |
| Gujarati language toggle working on all pages | ⬜ To Do |

> ✅ **M3 Complete = Phase 4 TESTING begins**

---

## 🛠️ Tech Stack Reference

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | React.js + Next.js | SEO-friendly, Gujarati Unicode support |
| Styling | Tailwind CSS | Rapid responsive styling |
| i18n | i18next | English ↔ Gujarati toggle |
| Backend | Node.js + Express | REST APIs |
| Database | PostgreSQL | Members, families, profiles |
| Auth | Firebase Auth / Auth0 | OTP + Google login |
| Hosting | Vercel (FE) + DigitalOcean (BE) | Auto-deploy via GitHub Actions |
| Storage | AWS S3 / Cloudflare R2 | Photos, documents |
| Payments | Razorpay | Donations + membership fees |
| Maps | Google Maps API | Business + member locations |

---

## 🏷️ Legend

| Symbol | Meaning |
|--------|---------|
| 🔴 High | High priority task |
| 🟡 Medium | Medium priority task |
| ⬜ To Do | Not yet started |
| ✅ Done | Completed |

---

*Part of the Tragad Soni Community Website Roadmap — [View Master Roadmap](../Master_Roadmap.md) · Prepared by Milan SNTL84*
