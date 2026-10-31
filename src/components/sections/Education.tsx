import { certGroups, education } from "@/data/profile";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function Education() {
  return (
    <Section id="education" number="04" title="Education & certifications" alt>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <ol className="relative space-y-8 border-l-2 border-border pl-6">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span
                  className="absolute top-1.5 -left-[33px] size-4 rounded-full border-4 border-bg bg-accent"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-accent">
                  {e.start} – {e.end}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                <p className="text-muted">{e.school}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="space-y-5">
          {certGroups.map((g, i) => (
            <Reveal key={g.issuer} delay={i * 0.08}>
              <div className="card">
                <h3 className="mb-3 font-semibold">
                  {g.issuer} <span className="font-mono text-xs font-normal text-muted">· {g.certs.length} certificates</span>
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  {g.certs.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
