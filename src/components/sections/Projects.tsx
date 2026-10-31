import Link from "next/link";
import { projects } from "@/data/profile";
import { Reveal } from "../Reveal";
import { Section, Tag } from "../Section";
import { ArrowRightIcon } from "../icons";

export function Projects() {
  return (
    <Section id="projects" number="03" title="Featured projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <article className="card group relative flex h-full flex-col hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.kicker}</p>
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
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Read case study
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
