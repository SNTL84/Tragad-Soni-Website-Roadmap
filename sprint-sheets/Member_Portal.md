# 👥 Member Portal — Complete Feature Specification

**Project:** Tragad Soni Community Website
**Prepared by:** Milan SNTL84 · [desidevloper.com](https://desidevloper.com)
**Phase:** P3 (Development) · **Priority:** High

---

## 🔐 Registration & Auth

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Member Signup | Register with name, mobile, email, city, gotra, family code | Public | P3 | High |
| OTP Verification | Verify mobile via SMS OTP before account activation | Public | P3 | High |
| Email Verification | Verify email for account security | Public | P3 | High |
| Google / Facebook Login | Social login option for faster onboarding | Public | P3 | Medium |
| Admin Approval Flow | New registrations need admin review before listing | Admin | P3 | High |
| Password Reset | Forgot password flow via OTP or email link | Member | P3 | High |

---

## 👤 Member Profile

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Basic Profile | Name, photo, DOB, gender, gotra, native city/village | Member | P3 | High |
| Contact Details | Phone, email, WhatsApp with privacy settings | Member | P3 | High |
| Address Details | Current city, native place, area/ward, pin code | Member | P3 | High |
| Professional Details | Occupation, business name, industry, designation | Member | P3 | High |
| Educational Details | Highest qualification, college, graduation year | Member | P3 | Medium |
| Profile Photo Upload | Upload photo with cropping tool (moderated) | Member | P3 | High |
| Privacy Controls | Choose public / members-only / private for each field | Member | P3 | High |
| Verified Badge | Admin can mark profiles as verified | Admin | P3 | Medium |

---

## 🔍 Member Directory

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Search by Name | Full-text search by first name, last name, family name | Member | P3 | High |
| Filter by City | Filter directory by current city or native village | Member | P3 | High |
| Filter by Gotra | Browse members by gotra/clan | Member | P3 | Medium |
| Filter by Profession | Find doctors, lawyers, engineers etc. in samaj | Member | P3 | Medium |
| Browse Alphabetically | A–Z listing with quick jump nav | Member | P3 | Medium |
| Member Count Badge | Show total registered members on homepage | Public | P3 | High |

---

## 🏠 Family Module

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Family Head Registration | Register as head of family with family code | Member | P3 | High |
| Add Family Members | Add spouse, children, parents to family profile | Member | P3 | High |
| Family Tree View | Visual tree showing 3 generations | Member | P4 | Medium |
| Link Existing Members | Link already-registered members to your family | Member | P3 | Medium |
| Family Directory | Browse families, see family tree of other members | Member | P3 | Medium |

### Family Registration Form — Key Fields

| # | Field | Type | Required | Visibility |
|---|-------|------|----------|------------|
| 1 | Family Code (auto) | Auto-generated | Yes | Admin only |
| 2 | Family Surname | Text | Yes | Public |
| 3 | Gotra | Dropdown | Yes | Members |
| 4 | Native Village/Town | Text | Yes | Members |
| 5 | Current City | Text + Map pin | Yes | Members |
| 6 | Head's Full Name | Text | Yes | Public |
| 7 | Head's Photo | Image upload | No | Members |
| 8 | Head's DOB | Date picker | Yes | Members |
| 9 | Head's Mobile | Phone + OTP | Yes | Members |
| 10 | Head's WhatsApp | Phone | No | Members |
| 11 | Head's Email | Email | No | Members |
| 12 | Head's Occupation | Text | No | Members |
| 13 | Spouse Full Name | Text | No | Members |
| 14 | Spouse DOB | Date picker | No | Members |
| 15 | Spouse's Maiden Surname | Text | No | Members |
| 16 | Spouse's Gotra | Dropdown | No | Members |
| 17 | Spouse Occupation | Text | No | Members |
| 18–22 | Child 1 (Name, DOB, Gender, Education, Marital Status) | Various | No | Members |
| 23+ | Child 2, 3, N (repeating fields) | Repeating group | No | Members |
| 24 | Full Address | Textarea | Yes | Members |
| 25–28 | City, State, Pincode, Map pin | Various | Yes | Members |
| 29 | Blood Groups | Multi-select | No | Members |
| 30 | Special Skills | Tags | No | Members |
| 31 | Business Name | Text | No | Members |
| 32 | Anniversary Date | Date | No | Admin only |
| 33 | Membership Since | Year picker | No | Admin |
| 34 | Admin Notes | Textarea | No | Admin only |

---

## 💬 Communication

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Member Messaging | Send direct message to another member (moderated) | Member | P4 | Medium |
| Event Announcements | Receive event alerts via SMS/email/WhatsApp | Member | P3 | High |
| Samaj Notices Board | Read official notices from committee | Member | P3 | High |

---

## 💳 Donations & Fees

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Online Donation | Donate to samaj trust via Razorpay | Member/Public | P3 | High |
| Membership Fee | Pay annual membership online | Member | P3 | Medium |
| Event Registration Fee | Pay for ticketed events online | Member | P3 | Medium |
| Donation Receipt | Auto-generate PDF receipt for tax purposes | Member | P3 | Medium |

---

## 🔧 Admin Panel

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Member Management | Approve, reject, edit, deactivate member accounts | Admin | P3 | High |
| Content Management | Post news, notices, gallery, events from backend | Admin | P3 | High |
| Dashboard Analytics | Total members, recent signups, active users, top pages | Admin | P4 | Medium |
| Role Management | Assign roles: Super Admin, City Admin, Moderator | Admin | P3 | Medium |
| Export Member Data | Export directory as CSV/Excel for committee use | Admin | P4 | Medium |

---

*Part of the Tragad Soni Community Website Roadmap — [View Master Roadmap](./Master_Roadmap.md) · Prepared by Milan SNTL84*
