# GitHub Pages Deployment Guide

## Step 1: Prepare Your Repository

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it something like `portfolio` or `data-analyst-portfolio`
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (you already have one)

## Step 2: Configure Vite for GitHub Pages

Already done! Your vite.config.ts is ready.

## Step 3: Install gh-pages

Run this command in your portfolio folder:
```bash
npm install --save-dev gh-pages
```

## Step 4: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Add your GitHub repository as remote (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your portfolio
- Create a `gh-pages` branch
- Push the built files to that branch

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source", select **gh-pages** branch
5. Click **Save**

## Step 7: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

It may take 2-3 minutes for the first deployment.

## 🔄 Updating Your Portfolio

Whenever you make changes:
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## ✅ Quick Checklist

- [ ] Create GitHub repository
- [ ] Install gh-pages: `npm install --save-dev gh-pages`
- [ ] Push code to GitHub
- [ ] Run `npm run deploy`
- [ ] Enable GitHub Pages in repository settings
- [ ] Visit your portfolio URL

**Need help?** Let me know which step you're on!
