import { profile } from "@/data/profile";
import { Reveal } from "../Reveal";
import { Section } from "../Section";

export function About() {
  return (
    <Section id="about" number="01" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="card divide-y divide-border p-0">
            {profile.facts.map((f) => (
              <div key={f.label} className="px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">{f.label}</dt>
                <dd className="mt-1 text-sm font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
