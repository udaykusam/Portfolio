import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">
        Back home
      </Link>
    </div>
  );
}
