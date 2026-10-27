# lavanya.r — portfolio

Hand-built static site: `index.html`, `style.css`, `script.js`, and `assets/Lavanya_Resume.pdf`. No build step, no framework.

## Editing

- **LinkedIn**: `CONFIG.linkedin` at the top of `script.js` (links hide if it is empty).
- **Projects**: edit the `PROJECTS` array in `script.js`. Each project has a title, a blurb, and the bullet points and stack shown in its pop-up.
- **Skills**: edit `VOCAB` in `script.js`. The text after each skill is what appears when someone hovers over it.
- **Resume**: replace `assets/Lavanya_Resume.pdf` and keep the same filename.

## Preview locally

Opening `index.html` directly in a browser works. You can also run a small local server:

```bash
npx serve .
```

## Free hosting: GitHub Pages (recommended)

1. On GitHub, create a **public** repo named exactly `vampnextdoor.github.io`.
2. Upload these files to it. Either drag them in through "Add file → Upload files", or run:
   ```bash
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/vampnextdoor/vampnextdoor.github.io.git
   git push -u origin main
   ```
3. Go to the repo's **Settings → Pages**, set Source to "Deploy from a branch", choose branch `main` and folder `/ (root)`, and save.
4. After about a minute the site is live at **https://vampnextdoor.github.io**

## Other free hosts

- **Vercel**: on vercel.com, choose "Add New → Project", import the repo and deploy. The site gets a `*.vercel.app` URL.
- **Netlify**: on app.netlify.com/drop, drag this folder onto the page. It goes live straight away with no account setup.
- **Cloudflare Pages**: connect the repo. It's free and fast in India.

**Custom domain:** the GitHub Student Developer Pack (education.github.com/pack) includes a free `.me` domain from Namecheap for a year. Point the domain at any of the hosts above.
