import { Reveal } from "./Reveal";

export function Section({
  id,
  number,
  title,
  alt = false,
  children,
}: {
  id: string;
  number: string;
  title: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-24 ${alt ? "bg-surface-2/60" : ""}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <h2 id={`${id}-title`} className="mb-10 flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="font-mono text-base font-medium text-accent">{number}.</span>
            {title}
            <span className="ml-2 hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  );
}
