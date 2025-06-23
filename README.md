[![Next](https://img.shields.io/badge/NextJS-v15.2.0-blue.svg?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-v19-teal.svg?logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-v4-lightblue.svg?logo=tailwindcss)](https://nextjs.org)
[![@Opennextjs/Cloudflare](https://img.shields.io/badge/OpenNextJS%20Cloudflare-v1.2.1-orange.svg?logo=cloudflare)](https://www.cloudflare.com/)

---

# BSides SWFL 2025 Website

Welcome to the official website repository for the **BSides Southwest Florida 2025** conference, taking place on **November 14–15, 2025**. This is a collaborative project led by FSW's Software Engineering Club and community volunteers. Our goal is to build a clean, accessible, and exciting web presence for BSides SWFL!

![BSides SWFL Logo](BSidesSWFL-Logo-V1.1-Color.png)

## 🧭 Project Goals

This site will provide:

- Event date and location info
- Speaker and sponsor information
- Call for papers and volunteer forms
- Agenda, workshops, and after-party info
- Resources and archives post-event

---

## 📦 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/bsides-swfl-2025.git
   cd bsides-swfl-2025
   ```

2. **Switch to the staging branch**

   ```bash
   git checkout staging
   ```

3. **Open or edit `index.html`**

   ```bash
   code index.html
   ```

   You can also use any editor of your choice.

---

## 🔐 Branch Protection Rules (Important)

The `main` branch is protected by a GitHub ruleset. You **cannot push or commit directly to `main`**. All contributions must go through the following process:

- Work from the `staging` branch (or a feature branch created from it).
- Open a **pull request (PR)** into `main` from `staging`.
- Your PR must meet the following requirements:
  - ✅ At least 1 approval from a reviewer
  - ✅ All conversations must be resolved before merging
  - 🚫 Direct commits and force pushes to `main` are blocked
  - ✅ Merge method is limited to **Squash** for a clean history

These rules ensure a safe, organized, and review-driven development process.

---

## 🧑‍💻 How to Contribute

1. **Work on the `staging` branch only.**  
   Do not commit directly to `main`.

2. **Suggested contributions:**

   - Layout and design updates (HTML/CSS/JS)
   - Components for speaker lists, schedules, forms, etc.
   - Branding updates (use the provided logo)

3. **Submit a pull request from `staging` to `main`**  
   Only when you're ready for production review.

---

## ✅ Commit Guidelines

Use clear and descriptive commit messages like:

- `Add speaker section layout`
- `Style landing page header`
- `Include BSides SWFL logo in assets`

Prefer Conventional Commits:

- `feat(home): add hero section`
- `fix(style): adjust contrast for accessibility`

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌐 Domain

The domain `bsidesswfl.org` is already registered and configured via the `CNAME` file for deployment.

---

## 🙌 Credits

Organized by [BSides SWFL](https://bsidesswfl.org)  
Developed by the **FSW Software Engineering Club** and community volunteers.

---

Thanks for contributing — let’s build something awesome together!
