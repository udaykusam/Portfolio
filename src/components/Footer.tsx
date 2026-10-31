import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

// Cached so the page stays fully static; the year refreshes on each deploy.
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © <CurrentYear /> {profile.name} · Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-fg">
              <GitHubIcon className="size-5" />
            </a>
          </li>
          <li>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-fg">
              <LinkedInIcon className="size-5" />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg">
              <MailIcon className="size-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
