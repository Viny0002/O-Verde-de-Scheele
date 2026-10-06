import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Figure({
  src,
  alt,
  caption,
  credit,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-md bg-paper-edge", className)}>
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full object-cover"
        crossOrigin="anonymous"
      />
      <figcaption className="border-t border-ink/10 px-3 py-2.5 text-xs leading-snug text-muted">
        <span className="font-medium text-ink">{caption}</span>
        {credit ? <span className="mt-0.5 block italic">{credit}</span> : null}
      </figcaption>
    </figure>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-scheele uppercase">
      {children}
    </p>
  );
}

export function PageHeading({
  number,
  title,
  lead,
}: {
  number: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="border-b border-ink/10 pb-5">
      <div className="flex items-end justify-between gap-4">
        <Kicker>Pasta didática · Página {number} de 04</Kicker>
        <span className="font-display text-3xl leading-none text-scheele">{number}</span>
      </div>
      <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{lead}</p>
    </header>
  );
}

export function Callout({
  label,
  children,
  tone = "green",
}: {
  label: string;
  children: ReactNode;
  tone?: "green" | "ink";
}) {
  return (
    <aside
      className={cn(
        "rounded-lg px-4 py-3.5 text-sm leading-relaxed",
        tone === "green"
          ? "bg-scheele text-paper"
          : "bg-moss text-paper",
      )}
    >
      <p className="mb-1.5 font-sans text-[0.68rem] font-semibold tracking-[0.18em] uppercase opacity-80">
        {label}
      </p>
      <div className="[&_p+p]:mt-2">{children}</div>
    </aside>
  );
}

export function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside className="rounded-lg border border-scheele/30 bg-scheele/8 px-4 py-3 text-sm leading-relaxed text-ink">
      <p className="mb-1 font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-scheele-deep uppercase">
        {label}
      </p>
      {children}
    </aside>
  );
}
