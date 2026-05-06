# 💍 Matrimony Section — Feature Specification & Profile Fields

**Project:** Tragad Soni Community Website
**Prepared by:** Milan SNTL84 · [desidevloper.com](https://desidevloper.com)
**Phase:** P3 (Development) · **Priority:** High · **Privacy Level:** Members Only

---

## 🔐 Core Features

| # | Feature | Description | User Role | Phase | Privacy | Priority |
|---|---------|-------------|-----------|-------|---------|----------|
| 1 | Create Matrimony Profile | Separate matrimony profile (not main member profile) | Member | P3 | Members Only | High |
| 2 | Profile Activation Toggle | Member can show/hide matrimony profile anytime | Member | P3 | Members Only | High |
| 3 | Browse Profiles | Browse opposite gender profiles with privacy controls | Member | P3 | Members Only | High |
| 4 | Advanced Match Filters | Filter age, city, gotra, education, profession, height | Member | P3 | Members Only | High |
| 5 | Gotra Check / Block | Automatically warn or block same-gotra matches | System | P3 | Automatic | High |
| 6 | Express Interest | Send anonymous interest — revealed only if mutual | Member | P3 | Members Only | High |
| 7 | Contact Reveal on Mutual | Contact details shared only after both parties agree | System | P3 | Controlled | High |
| 8 | Blurred Profile Photos | Photo blurred by default, visible only to interested members | Member | P3 | Members Only | High |
| 9 | Horoscope Upload | Upload kundali PDF — visible to interested matches | Member | P4 | Members Only | Medium |
| 10 | Shortlist Profiles | Save profiles of interest in private shortlist | Member | P3 | Private | Medium |
| 11 | Admin Moderation | Admin reviews all new matrimony profiles before going live | Admin | P3 | Admin Only | High |
| 12 | Report Inappropriate | Flag fake or inappropriate profiles | Member | P3 | Anonymous | High |
| 13 | Success Stories | Couples who matched via portal can share story (optional) | Member | P4 | Public | Low |
| 14 | Parent/Guardian Access | Parents can manage child’s profile with consent | Member | P4 | Members Only | Medium |
| 15 | Premium Match (Future) | Featured profiles, priority listing for active seekers | Admin | P5 | Members Only | Low |

---

## 📝 Matrimony Profile Fields

### Personal

| # | Field | Description | Input Type | Required | Visibility |
|---|-------|-------------|------------|----------|------------|
| 1 | Display Name | First name or chosen name (no full surname for privacy) | Text | Yes | Members |
| 2 | Profile ID | System ID e.g. TSM-0087 | Auto-generated | Yes | Public |
| 3 | Gender | Male / Female | Dropdown | Yes | Members |
| 4 | Date of Birth | DOB for age calculation | Date picker | Yes | Members |
| 5 | Height | In feet & inches | Dropdown | Yes | Members |
| 6 | Complexion | Fair / Wheatish / Dark (optional) | Dropdown | No | Members |
| 7 | Manglik Status | Manglik / Non-Manglik / Partial | Dropdown | No | Members |
| 8 | Physical Disability | Any disability (optional, private) | Dropdown | No | Members (blurred) |

### Religious & Family

| # | Field | Description | Input Type | Required | Visibility |
|---|-------|-------------|------------|----------|------------|
| 9 | Gotra | Gotra of the candidate | Dropdown | Yes | Members |
| 10 | Native City/Village | Ancestral hometown | Text | Yes | Members |
| 11 | Religious Views | Orthodox / Moderate / Liberal | Dropdown | No | Members |
| 12 | Diet | Vegetarian / Non-vegetarian | Dropdown | Yes | Members |
| 13 | Family Type | Joint Family / Nuclear | Dropdown | No | Members |
| 14 | Father’s Occupation | Father’s profession | Text | No | Members |
| 15 | Mother’s Occupation | Mother’s profession | Text | No | Members |
| 16 | No. of Siblings | Number of brothers & sisters | Number | No | Members |

### Education & Career

| # | Field | Description | Input Type | Required | Visibility |
|---|-------|-------------|------------|----------|------------|
| 17 | Highest Education | 10th / 12th / Diploma / Graduate / PG / PhD | Dropdown | Yes | Members |
| 18 | Field of Study | Commerce, Engineering, Medical, Arts | Text | No | Members |
| 19 | College / University | Name of college attended | Text | No | Members |
| 20 | Occupation | Employed / Self-employed / Business / Student | Dropdown | Yes | Members |
| 21 | Job / Business Profile | Job title or business type | Text | No | Members |
| 22 | Annual Income | Income slab range (not exact) | Dropdown | No | Members |
| 23 | Work City | Current city of work | Text | Yes | Members |

### Partner Preferences

| # | Field | Description | Input Type | Required | Visibility |
|---|-------|-------------|------------|----------|------------|
| 24 | Preferred Age Range | Min-max age of preferred partner | Range slider | Yes | Members |
| 25 | Preferred Education | Minimum education level | Dropdown | No | Members |
| 26 | Preferred City | Open to same city / any city / specific city | Multi-select | No | Members |
| 27 | Preferred Gotra | Accepted gotras (excluding own) | Multi-select | No | Members |
| 28 | Preferred Diet | Vegetarian only / Any | Dropdown | No | Members |
| 29 | About Partner | Free text about ideal partner | Textarea | No | Members |

### Media & Contact

| # | Field | Description | Input Type | Required | Visibility |
|---|-------|-------------|------------|----------|------------|
| 30 | Profile Photo | 1 photo — blurred to non-interested members | Image upload | No | Controlled |
| 31 | Horoscope / Kundali | PDF upload of kundali | File upload | No | Interest Only |
| 32 | Contact Number | Mobile — shared only on mutual interest | Phone | Yes | Interest Only |
| 33 | Contact Person | Name of person to contact (self/parent) | Text | Yes | Interest Only |
| 34 | WhatsApp | Optional WhatsApp for conversation after match | Phone | No | Interest Only |

---

## 🔐 Privacy Architecture

| Stage | What’s Visible |
|-------|----------------|
| Before Interest | Display name, age, city, education, occupation (no photo, no contact) |
| After Sending Interest | Photo revealed (blurred → clear), basic profile |
| After Mutual Interest | Full profile + contact details shared |
| Gotra Check | Auto-block or warning if same gotra |

---

*Part of the Tragad Soni Community Website Roadmap — [View Master Roadmap](./Master_Roadmap.md) · Prepared by Milan SNTL84*
