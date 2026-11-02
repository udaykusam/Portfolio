import Link from "next/link";
import { projects } from "@/data/profile";
import { Reveal } from "../Reveal";
import { Section, Tag } from "../Section";
import { ArrowRightIcon, GitHubIcon } from "../icons";

export function Projects() {
  return (
    <Section id="projects" number="03" title="Featured projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <article className="card group relative flex h-full flex-col hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.kicker}</p>
                <p className="font-mono text-xs text-muted">{p.dates}</p>
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-tight">
                <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 focus:outline-none">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.slice(0, 5).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
                {p.tech.length > 5 && <Tag>+{p.tech.length - 5}</Tag>}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read case study
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                {p.githubUrl && (
                  // Sits above the card-wide link overlay so it stays clickable on its own.
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} source code on GitHub`}
                    className="relative z-10 text-muted hover:text-fg"
                  >
                    <GitHubIcon className="size-5" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
