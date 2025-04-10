# Contributing to the BSides SWFL 2025 Website

Thank you for your interest in contributing to the BSides Southwest Florida 2025 website! Whether you're part of the FSW Software Engineering Club or a community volunteer, we welcome your help in building something awesome for our tech community.

---

## 🛠️ Getting Started

1. **Fork** this repository.
2. **Clone** your fork to your local machine:
    ```bash
    git clone https://github.com/YOUR-USERNAME/bsides-swfl-2025.git
    cd bsides-swfl-2025
    ```
3. **Checkout the `staging` branch** for development:
    ```bash
    git checkout staging
    ```

All development work should be done on `staging`. Only pull requests from `staging` to `main` will be reviewed for production deployment.

---

## 🔐 Branch Protection Rules

The `main` branch is protected by a GitHub ruleset. This means:

- 🚫 **No direct commits or pushes** to `main`
- ✅ **All changes must go through a pull request (PR)**
- ✅ **At least 1 approving review** is required to merge
- ✅ **All review conversations must be resolved** before merging
- ✅ **Only squash merges are allowed** for a clean history

If you attempt to push to `main`, GitHub will block the action. Always work from `staging` or a feature branch created from it.

---

## 💡 Ways to Contribute

- Improve layout and styling (HTML/CSS)
- Add JavaScript functionality
- Build pages (e.g. About, Sponsors, Speakers, CFP)
- Optimize images or branding assets
- Improve accessibility or responsive design
- Fix typos, grammar, or formatting
- Add documentation

---

## 🔀 Workflow

1. Create a new branch from `staging`:
    ```bash
    git checkout -b your-feature-name
    ```

2. Make your changes and **commit** clearly:
    ```bash
    git add .
    git commit -m "Add sponsor section to homepage"
    ```

3. Push to your fork:
    ```bash
    git push origin your-feature-name
    ```

4. Open a **pull request** into the `staging` branch from your fork.

---

## 📝 Commit Message Style

Write concise and clear messages. Examples:
- Add initial schedule layout 
- Fix alignment issues on mobile 
- Include logo in assets folder

---

## 📄 Licensing

All contributions will be licensed under the [MIT License](LICENSE).

---

## 🙌 Thanks

We appreciate your help making BSides SWFL 2025 awesome.  
If you need direction or support, please reach out to the project maintainers.

Let’s build something great together!
