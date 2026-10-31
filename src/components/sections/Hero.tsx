import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Reveal } from "../Reveal";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

// The resume button only appears once public/resume.pdf exists (checked at build time).
const hasResume = fs.existsSync(path.join(process.cwd(), "public", "resume.pdf"));

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to Software Engineer roles · Willing to relocate
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/#projects" className="btn-primary">
              View my work
            </Link>
            {hasResume && (
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <DownloadIcon className="size-4" /> Resume
              </a>
            )}
            <Link href="/#contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap gap-5 text-sm font-medium text-muted" aria-label="Social links">
            <li>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-fg">
                <GitHubIcon className="size-5" /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-fg">
                <LinkedInIcon className="size-5" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-fg">
                <MailIcon className="size-5" /> Email
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
