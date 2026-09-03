# Shah Hussain — Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Edit your content

Everything text-based (name, job history, projects, skills, links) lives in one file:

```
src/data/content.js
```

Change it there and every section updates automatically. To swap your photo or resume, replace:

```
public/profile.jpg
public/Shah_Hussain_Resume.pdf
```

(keep the same filenames, or update the paths in `src/data/content.js` / `src/components/Hero.jsx`).

## Deploy to Vercel

**Option A — GitHub import (recommended, no CLI needed)**

1. Create a new repo on GitHub (e.g. `portfolio`) and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com and sign in with your GitHub account.
3. Click **Add New → Project**, select your `portfolio` repo.
4. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`, Output Directory: `dist`) and click **Deploy**.
5. In ~1 minute you'll get a live URL like `https://portfolio-yourname.vercel.app`. You can add a custom domain later from the project's **Settings → Domains**.

Every time you push to `main`, Vercel redeploys automatically.

**Option B — Vercel CLI (fastest, no GitHub repo required)**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts (link to a new project)
vercel --prod # promote to your production URL
```

## Tech

- React 19 + Vite
- Tailwind CSS
- lucide-react icons
