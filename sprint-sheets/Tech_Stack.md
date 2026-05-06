# 🛠️ Recommended Tech Stack

**Project:** Tragad Soni Community Website
**Prepared by:** Milan SNTL84 · [desidevloper.com](https://desidevloper.com)

---

## 🏗️ Full Stack Overview

| Layer | Technology | Why This Choice | Cost/Month | Skill Level | Priority |
|-------|-----------|-----------------|------------|-------------|----------|
| Frontend | React.js + Next.js | Fast, SEO-friendly, Gujarati Unicode, mobile-first | Free / Open Source | Mid-level dev | High |
| Frontend | Tailwind CSS | Rapid styling, responsive, minimal CSS code | Free | Any dev | High |
| Frontend | i18next (translation) | Easy English ↔ Gujarati language toggle | Free | Mid-level dev | High |
| Backend | Node.js + Express | Fast APIs, large community, good for real-time features | Free | Mid-level dev | High |
| Backend (Alt) | WordPress + Elementor | Easier for non-technical admins, large plugin ecosystem | ₹500–2,000/mo | Non-technical | Alt Option |
| Database | PostgreSQL | Reliable relational DB for members, families, profiles | Free (self-hosted) | Mid-level dev | High |
| Database (Alt) | MySQL | Simpler alternative, widely supported with WordPress | Free | Any dev | Alt Option |
| Auth | Firebase Auth / Auth0 | Secure login, OTP via phone/email, Google sign-in | Free tier avail. | Mid-level dev | High |
| Hosting | Vercel (Frontend) | Free tier, auto-deploy from GitHub, CDN built-in | Free–₹1,500/mo | Any dev | High |
| Hosting | DigitalOcean Droplet | VPS for backend & DB, full control | ₹900–1,800/mo | Senior dev | High |
| Hosting (Alt) | Hostinger / Bluehost India | WordPress hosting, easy cPanel, good India support | ₹200–700/mo | Non-technical | Alt Option |
| Storage | AWS S3 / Cloudflare R2 | Gallery photos, documents, cheap bulk storage | ₹100–500/mo | Mid-level dev | High |
| Email | Zoho Mail (Free) | Professional tragadsoni.org emails for committee | Free (5 users) | Non-technical | Medium |
| Notifications | WhatsApp Business API | Send event reminders, notices to members via WhatsApp | ₹0.40/message | Developer | Medium |
| Notifications | Firebase Push + Email | Browser push notifications + transactional email | Free tier avail. | Developer | Medium |
| Search | Algolia / MeiliSearch | Fast member & business directory search with filters | Free tier avail. | Developer | Medium |
| Maps | Google Maps API | Show member/business locations, event venues on map | Free (limited) | Developer | Low |
| Analytics | Google Analytics 4 | Track page visits, member signups, popular sections | Free | Non-technical | Medium |
| Security | Cloudflare (Free) | CDN + DDoS protection + SSL + fast global delivery | Free tier | Non-technical | High |
| Payments | Razorpay / Paytm | Accept donations, event fees, membership dues online | 1.5–2% per txn | Developer | High |
| Version Control | GitHub | Code repository, collaboration, deployment automation | Free | Developer | High |
| CI/CD | GitHub Actions | Auto-deploy on code push + test automation | Free | Developer | Medium |

---

## 🏠 Recommended Stack Decision

### Option A — Custom React/Node (Recommended for scalability)

```
Frontend : Next.js + Tailwind CSS + i18next
Backend  : Node.js + Express
Database : PostgreSQL
Auth     : Firebase Auth (OTP + Google login)
Hosting  : Vercel (FE) + DigitalOcean (BE/DB)
Storage  : Cloudflare R2
Payments : Razorpay
Email    : Zoho Mail (Free)
Security : Cloudflare (Free CDN + SSL)
CI/CD    : GitHub Actions
```

**Pros:** Highly scalable, full control, best performance, SEO-ready, bilingual-ready
**Cons:** Requires mid-level developer, more setup time
**Estimated Monthly Cost:** ₹1,500–3,000/mo

---

### Option B — WordPress + Elementor (Alt for faster non-technical launch)

```
CMS      : WordPress + Elementor Pro
Database : MySQL
Auth     : WooCommerce / custom OTP plugin
Hosting  : Hostinger Business India Plan
Storage  : Jetpack / local uploads
Payments : Razorpay WooCommerce plugin
Email    : Zoho Mail (Free)
Security : Cloudflare (Free CDN + SSL)
```

**Pros:** Faster launch, non-technical admin can manage, many plugins
**Cons:** Less scalable for large member portal, performance limits at 5,000+ members
**Estimated Monthly Cost:** ₹700–1,500/mo

> **Recommendation:** Option A for long-term scalability. Option B for fastest possible launch if dev resources are limited.

---

## 💰 Cost Comparison Table

| Component | Option A (Custom) | Option B (WordPress) |
|-----------|-------------------|---------------------|
| Frontend Hosting | ₹0 (Vercel free) | ₹300/mo (Hostinger) |
| Backend/DB Hosting | ₹900/mo (DigitalOcean) | Included |
| Storage | ₹100–500/mo | Included (limited) |
| Domain | ₹900/yr (~₹75/mo) | ₹900/yr (~₹75/mo) |
| Email | Free (Zoho 5 users) | Free (Zoho 5 users) |
| Security | Free (Cloudflare) | Free (Cloudflare) |
| **Total/Month** | **₹1,075–1,475/mo** | **₹375–775/mo** |

---

## 🔒 Security Checklist

| Requirement | Tool | Priority |
|-------------|------|----------|
| SSL certificate | Cloudflare / Let’s Encrypt | 🔴 High |
| HTTPS enforce | Cloudflare page rules | 🔴 High |
| DDoS protection | Cloudflare Free | 🔴 High |
| Member data encryption | PostgreSQL row-level / bcrypt | 🔴 High |
| OTP verification | Firebase Auth | 🔴 High |
| Admin role access control | Custom middleware | 🔴 High |
| PDPA / IT Act compliance | Privacy policy + data handling | 🟡 Medium |

---

*Part of the Tragad Soni Community Website Roadmap — [View Master Roadmap](./Master_Roadmap.md) · Prepared by Milan SNTL84*
