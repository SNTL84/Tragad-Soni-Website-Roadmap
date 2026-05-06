# 🏪 Trade & Business Directory — Feature Specification

**Project:** Tragad Soni Community Website
**Prepared by:** Milan SNTL84 · [desidevloper.com](https://desidevloper.com)
**Phase:** P3 (Development) · **Priority:** High

---

## 📝 Listing Creation

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| List a Business | Member adds business name, category, description, location | Member | P3 | High |
| Business Categories | Jewellery, Goldsmith, Finance, IT, Medical, Real Estate, Retail, etc. | Admin Setup | P3 | High |
| Business Logo Upload | Upload company logo or shop photo | Member | P3 | Medium |
| Multiple Photos | Upload up to 5 photos of shop/product/work | Member | P4 | Low |
| Contact Info | Phone, WhatsApp, email, website link | Member | P3 | High |
| Google Maps Pin | Pin exact location on map | Member | P3 | Medium |
| Operating Hours | Business hours & days | Member | P3 | Low |
| Services Offered | Tags for services (Gold, Silver, Diamonds, Bullion, etc.) | Member | P3 | Medium |
| GST / License Info | Optional GST number, trade license for credibility | Member | P4 | Low |

---

## 🔍 Search & Browse

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Search by Name | Search directory by business name | All | P3 | High |
| Filter by Category | Filter: Jeweller, Retailer, Professional, Service etc. | All | P3 | High |
| Filter by City | Show businesses in selected city | All | P3 | High |
| Nearby Businesses | Show businesses near user’s current location | Members | P4 | Medium |
| Verified Listings | Filter to show only admin-verified businesses | All | P4 | Medium |
| Featured Listings | Highlighted/promoted listings for sponsors or top members | Admin | P4 | Low |

---

## ⭐ Reviews & Trust

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Member Reviews | Community members leave ratings for businesses | Members | P4 | Medium |
| Verified Buyer Badge | Mark reviews from real community members | Admin | P4 | Medium |
| Admin Moderation | Admin can remove inappropriate reviews | Admin | P4 | Medium |

---

## 🔧 Admin Controls

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Approve Listings | Admin reviews & approves before going live | Admin | P3 | High |
| Feature/Boost Listing | Mark a listing as featured on homepage | Admin | P4 | Low |
| Analytics per Listing | Views, clicks, WhatsApp taps per business listing | Admin | P4 | Low |

---

## 💎 Special Categories (Tragad Soni Specific)

| Category | Description | Phase | Priority |
|----------|-------------|-------|----------|
| Jewellery Specialists | Sub-category for gold/silver/diamond craftsmen | P3 | High |
| Bullion & Commodity | Traders dealing in gold/silver bullion | P3 | Medium |
| Professional Services | CAs, Lawyers, Doctors from Soni samaj | P3 | Medium |
| Real Estate | Property dealers, builders from community | P3 | Medium |
| Exports & Manufacturing | Exporters in diamond, textiles from Surat | P3 | Medium |

---

## 📋 Business Listing Card — Fields

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | Business Name | Text | Yes | Shown on listing card |
| 2 | Category | Dropdown | Yes | From admin-defined list |
| 3 | Sub-category | Tags | No | Jewellery, CA, Medical etc. |
| 4 | Description | Textarea | Yes | 200 chars max |
| 5 | Business Logo | Image upload | No | Shown on card |
| 6 | Photos (up to 5) | Image upload | No | P4 feature |
| 7 | Phone | Phone | Yes | Click to call |
| 8 | WhatsApp | Phone | No | Click to chat |
| 9 | Email | Email | No | Optional |
| 10 | Website | URL | No | Optional |
| 11 | Google Maps Pin | Map picker | No | Location on map |
| 12 | City / Area | Text | Yes | For city filter |
| 13 | Services Offered | Tags | No | Gold, Silver etc. |
| 14 | Operating Hours | Text | No | Mon–Sat 10am–7pm |
| 15 | GST Number | Text | No | Optional credibility |
| 16 | Member ID (auto) | Auto-linked | Yes | Linked to member profile |

---

*Part of the Tragad Soni Community Website Roadmap — [View Master Roadmap](./Master_Roadmap.md) · Prepared by Milan SNTL84*
