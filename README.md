# Uday Tej Reddy Kusam: Portfolio

Personal portfolio site for job applications, built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.

## Features

- Home page with Hero, About, Skills, Projects, Education & Certifications, and Contact sections
- A case study page for each project at `/projects/<slug>`
- Dark/light mode that follows the system setting, with a manual toggle
- Scroll-reveal animations that respect "reduced motion"
- SEO: page metadata, a generated social-preview image (`/opengraph-image`), `sitemap.xml` and `robots.txt`
- Fully static, responsive and accessible (skip link, semantic landmarks, keyboard-friendly nav)

## Editing content

All content lives in **`src/data/profile.ts`**: bio, skills, projects, education and certifications. Edit that file and the whole site updates.

- **Add your resume:** drop a PDF at `public/resume.pdf`. A "Resume" button appears in the hero automatically on the next build.
- **Add project links:** set `githubUrl` and/or `liveUrl` on a project in `profile.ts` to show "View source" / "Live demo" buttons.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import `udaykusam/Portfolio`, and click **Deploy**. No configuration is needed.
3. Every push to the production branch redeploys automatically.
4. (Optional) To use a custom domain, set the `NEXT_PUBLIC_SITE_URL` environment variable to it so the sitemap and social-preview links use the right URL.

## Project structure

```
src/
  app/
    layout.tsx               # root layout, fonts, metadata, theme
    page.tsx                 # home page
    projects/[slug]/page.tsx # project case studies
    opengraph-image.tsx      # social preview image
    sitemap.ts, robots.ts, not-found.tsx
  components/
    sections/                # Hero, About, Skills, Projects, Education, Contact
    Navbar, Footer, ThemeToggle, Reveal, Section, icons ...
  data/profile.ts            # all site content
```
