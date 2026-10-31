import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Section";
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon, GitHubIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: `${project.title} | ${profile.name}`, description: project.summary },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg">
        <ArrowLeftIcon className="size-4" /> All projects
      </Link>

      <Reveal>
        <header className="mt-8">
          <p className="font-mono text-sm uppercase tracking-wider text-accent">{project.kicker}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalIcon className="size-4" /> Live demo
              </a>
            )}
            <a
              href={project.githubUrl ?? profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={project.liveUrl ? "btn-ghost" : "btn-primary"}
            >
              <GitHubIcon className="size-4" /> {project.githubUrl ? "View source" : "GitHub profile"}
            </a>
          </div>
        </header>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="mt-14" aria-labelledby="problem">
          <h2 id="problem" className="text-xl font-bold">The problem</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="mt-12" aria-labelledby="built">
          <h2 id="built" className="text-xl font-bold">What I built</h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="mt-12" aria-labelledby="stack">
          <h2 id="stack" className="text-xl font-bold">Tech stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
        </section>
      </Reveal>

      <nav className="mt-16 border-t border-border pt-8" aria-label="Next project">
        <Link href={`/projects/${next.slug}`} className="card group flex items-center justify-between hover:border-accent/60">
          <span>
            <span className="block font-mono text-xs uppercase tracking-wider text-muted">Next project</span>
            <span className="mt-1 block text-lg font-semibold">{next.title}</span>
          </span>
          <ArrowRightIcon className="size-5 text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </nav>
    </article>
  );
}
