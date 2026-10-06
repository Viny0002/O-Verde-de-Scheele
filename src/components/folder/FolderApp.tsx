import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Palette,
  Printer,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageOrigem } from "./PageOrigem";
import { PageArte } from "./PageArte";
import { PageQuimica } from "./PageQuimica";
import { PageFontes } from "./PageFontes";

const PAGES = [
  { id: 0, label: "Origem", icon: BookOpen, node: <PageOrigem /> },
  { id: 1, label: "Arte", icon: Palette, node: <PageArte /> },
  { id: 2, label: "Química e riscos", icon: FlaskConical, node: <PageQuimica /> },
  { id: 3, label: "Curiosidades e fontes", icon: Quote, node: <PageFontes /> },
] as const;

export function FolderApp() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const sheetRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setPage((current) => {
      const clamped = Math.max(0, Math.min(PAGES.length - 1, next));
      setDir(clamped >= current ? 1 : -1);
      return clamped;
    });
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (!open) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(true);
        }
        return;
      }
      if (e.key === "ArrowRight") go(page + 1);
      if (e.key === "ArrowLeft") go(page - 1);
      if (e.key >= "1" && e.key <= "4") go(Number(e.key) - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, open, page]);

  useEffect(() => {
    sheetRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, open]);

  return (
    <div className="desk min-h-dvh text-ink">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Ir ao conteúdo
      </a>

      {!open ? <Cover onOpen={() => setOpen(true)} /> : null}

      <div className={cn("mx-auto max-w-6xl px-3 pb-10 pt-4 sm:px-6", !open && "hidden print:block")}>
        <FolderChrome
          page={page}
          onClose={() => setOpen(false)}
          onPrint={() => window.print()}
          onGo={go}
        >
          <div
            id="conteudo"
            ref={sheetRef}
            className="paper-grain max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-[calc(var(--radius-lg)-6px)] px-4 py-6 sm:px-8 sm:py-8 print:max-h-none print:overflow-visible"
            onTouchStart={(e) => {
              touchX.current = e.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchX.current == null) return;
              const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
              touchX.current = null;
              if (dx < -56) go(page + 1);
              if (dx > 56) go(page - 1);
            }}
          >
            {PAGES.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "print-sheet",
                  item.id === page ? "block" : "hidden print:block",
                  item.id === page && (dir > 0 ? "animate-in" : "animate-in"),
                )}
                style={
                  item.id === page
                    ? {
                        animation: "folder-page 420ms var(--ease-out)",
                      }
                    : undefined
                }
              >
                {item.node}
              </div>
            ))}
          </div>
        </FolderChrome>
      </div>

      <style>{`
        @keyframes folder-page {
          from { opacity: 0; transform: translateX(calc(var(--step, 1) * 18px)); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-4 py-8 print:hidden sm:px-8">
      <p className="mb-5 text-center font-sans text-[0.7rem] font-semibold tracking-[0.28em] text-paper/70 uppercase">
        Química · Arte · História · Ensino médio
      </p>
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,18rem)_1fr]">
        <div className="mx-auto w-full max-w-xs">
          <button
            type="button"
            onClick={onOpen}
            className="cardboard group relative block aspect-folder w-full overflow-hidden rounded-xl text-left shadow-[0_28px_60px_rgba(0,0,0,0.45)] ring-1 ring-paper/20 transition-transform duration-300 ease-[var(--ease-out)] hover:-translate-y-1"
            aria-label="Abrir a pasta O Verde de Scheele"
          >
            <img
              src="/images/still-life.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-multiply"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-linear-to-t from-moss/90 via-moss/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-sans text-[0.65rem] tracking-[0.26em] text-paper/80 uppercase">
                Pasta didática · 4 páginas
              </p>
              <p className="mt-1 w-full whitespace-normal font-display text-2xl leading-[1.08] text-paper">
                O Verde
                <br />
                de Scheele
              </p>
            </div>
          </button>
        </div>

        <div className="text-paper">
          <h1 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
            A cor mais cobiçada — e mais venenosa — do século XIX
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/80 sm:text-base">
            Em 1775, Carl Wilhelm Scheele inventou um verde-amarelado feito de cobre e arsênio.
            Esta pasta de quatro páginas conta a origem da cor, as obras e os vestidos que a
            usaram, a fórmula CuHAsO₃, os riscos à saúde e as fontes em ABNT.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-paper/70 uppercase">
            {PAGES.map((item) => (
              <span key={item.id} className="rounded-full border border-paper/20 px-3 py-1">
                0{item.id + 1} {item.label}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onOpen}
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-5 text-sm font-semibold text-moss transition-transform duration-150 hover:-translate-y-0.5"
          >
            Abrir a pasta
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </main>
  );
}

function FolderChrome({
  children,
  page,
  onClose,
  onPrint,
  onGo,
}: {
  children: ReactNode;
  page: number;
  onClose: () => void;
  onPrint: () => void;
  onGo: (n: number) => void;
}) {
  return (
    <div className="cardboard rounded-xl p-2 shadow-[0_24px_50px_rgba(0,0,0,0.38)] ring-1 ring-paper/15 sm:p-3">
      <div className="no-print mb-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onClose}
          className="min-h-11 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper hover:bg-moss/40"
        >
          Fechar pasta
        </button>
        <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto">
          {PAGES.map((item) => {
            const Icon = item.icon;
            const active = item.id === page;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onGo(item.id)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-3 text-sm",
                  active ? "bg-paper text-ink" : "text-paper/90 hover:bg-moss/25",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">0{item.id + 1}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={onPrint}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper hover:bg-moss/40"
        >
          <Printer className="size-4" />
          Imprimir
        </button>
      </div>

      {children}

      <div className="no-print mt-2 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onGo(page - 1)}
          disabled={page === 0}
          className="inline-flex min-h-11 items-center gap-1 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper disabled:opacity-40"
        >
          <ChevronLeft className="size-4" />
          Anterior
        </button>
        <p className="font-mono text-xs tracking-widest text-paper/80 uppercase">
          Página {String(page + 1).padStart(2, "0")} / 04
        </p>
        <button
          type="button"
          onClick={() => onGo(page + 1)}
          disabled={page === PAGES.length - 1}
          className="inline-flex min-h-11 items-center gap-1 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper disabled:opacity-40"
        >
          Próxima
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
