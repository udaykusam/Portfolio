import { profile } from "@/data/profile";
import { CopyEmailButton } from "../CopyEmailButton";
import { Reveal } from "../Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent">05. What&apos;s next?</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            I&apos;m looking for Software Engineer roles, both full-stack and backend. If you have
            an opportunity or just want to talk tech, my inbox is open.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <MailIcon className="size-4" /> Say hello
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
          <p className="mt-4 font-mono text-sm text-muted">{profile.email}</p>
          <ul className="mt-8 flex justify-center gap-6 text-sm font-medium text-muted">
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
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
