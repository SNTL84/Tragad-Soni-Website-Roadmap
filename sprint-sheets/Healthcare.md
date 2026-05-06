# 🏥 Healthcare Alignment — Feature Specification

**Project:** Tragad Soni Community Website
**Prepared by:** Milan SNTL84 · [desidevloper.com](https://desidevloper.com)
**Phase:** P3 (Development) · **Priority:** High

---

## 👨‍⚕️ Doctor Directory

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Doctor Listings | List doctors from Tragad Soni community by speciality | Admin/Member | P3 | High |
| Speciality Filter | Filter by General, Cardiologist, Ortho, Gynaec, Dentist etc. | All | P3 | High |
| City / Area Filter | Find doctors near your city or locality | All | P3 | High |
| Clinic / Hospital Info | Clinic name, address, timings, OPD schedule | Member | P3 | High |
| Online Appointment | Book appointment directly via WhatsApp/phone link | All | P4 | Medium |
| Free Consultation Flag | Doctor marks if they offer free consult to samaj members | Member | P3 | Medium |

---

## 🏥 Hospitals & Clinics

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Hospital Listings | Hospitals run by or preferred by community members | Admin | P3 | Medium |
| Samaj Discount Badge | Hospitals offering discounts to Tragad Soni members | Admin | P3 | Medium |
| Blood Bank Tie-up | Partner blood banks, request blood group | Admin | P3 | Medium |

---

## 🩸 Blood Donors

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Blood Donor Registry | Members register as blood donors with blood group | Members | P3 | High |
| Emergency Blood Search | Search donors by blood group and city in emergency | All | P3 | High |
| Notify Donors | Send alert to matching donors when blood is urgently needed | Admin/Auto | P4 | Medium |

---

## 🏡 Health Camps

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Health Camp Listings | Post upcoming health camps organised by samaj | Admin | P3 | High |
| Camp Registration | Members register for health camps online | Members | P3 | Medium |
| Camp Reports | Upload post-camp reports (no. attended, tests done etc.) | Admin | P4 | Low |
| Camp Type Tags | Tag camps by type: eye, dental, diabetes, BP etc. | Admin | P3 | Medium |

---

## 💚 Wellness

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Health Tips Articles | Post health articles relevant to community demographics | Admin | P4 | Low |
| Ayurveda / Traditional | Feature Ayurvedic practitioners from community | Members | P4 | Low |
| Mental Health Resources | Post helplines, counsellors, mental wellness info | Admin | P4 | Medium |

---

## 💰 Insurance & Medical Aid

| Feature | Description | User Role | Phase | Priority |
|---------|-------------|-----------|-------|----------|
| Medical Aid Fund | Apply for medical financial aid from samaj trust | Members | P3 | High |
| Community Health Insurance | Post group health insurance scheme for members | Admin | P4 | Medium |
| Aid Application Status | Track medical aid application online | Members | P4 | Medium |

---

## 📝 Doctor Profile Card — Fields

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | Doctor Name | Text | Yes | Display on card |
| 2 | Speciality | Dropdown | Yes | For filter |
| 3 | Qualification | Text | Yes | MBBS, MD etc. |
| 4 | Clinic / Hospital Name | Text | Yes | |
| 5 | Clinic Address | Textarea | Yes | |
| 6 | City / Area | Text | Yes | For location filter |
| 7 | OPD Timings | Text | No | Mon–Sat 10am–7pm |
| 8 | Phone | Phone | Yes | Click to call |
| 9 | WhatsApp | Phone | No | Click to chat |
| 10 | Email | Email | No | Optional |
| 11 | Free Consult for Samaj | Checkbox | No | Shows badge on card |
| 12 | Online Appointment Link | URL | No | Google Forms / Calendly |
| 13 | Member ID (auto) | Auto-linked | Yes | Linked to member profile |

## 🚂 Blood Donor Registry — Fields

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | Donor Name | Text | Yes | |
| 2 | Blood Group | Dropdown (A+/A-/B+/B-/O+/O-/AB+/AB-) | Yes | For search |
| 3 | City | Text | Yes | For city search |
| 4 | Phone | Phone | Yes | Shared on emergency request |
| 5 | WhatsApp | Phone | No | |
| 6 | Last Donation Date | Date | No | Helps determine eligibility |
| 7 | Available to Donate | Toggle | Yes | Active / Paused |
| 8 | Member ID (auto) | Auto-linked | Yes | |

---

*Part of the Tragad Soni Community Website Roadmap — [View Master Roadmap](./Master_Roadmap.md) · Prepared by Milan SNTL84*
