import { skillGroups } from "@/data/profile";
import { Reveal } from "../Reveal";
import { Section, Tag } from "../Section";

export function Skills() {
  return (
    <Section id="skills" number="02" title="Skills" alt>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.05}>
            <div className="card h-full hover:border-accent/60">
              <h3 className="mb-4 font-semibold">{g.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
