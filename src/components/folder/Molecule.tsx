import { useState } from "react";
import { cn } from "@/lib/utils";

type Atom = "Cu" | "As" | "O" | "H";

const ATOMS: Record<
  Atom,
  { name: string; z: number; mass: string; role: string; fill: string; text: string }
> = {
  Cu: {
    name: "Cobre",
    z: 29,
    mass: "63,55 u",
    role: "Metal de transição que dá o tom verde-azulado típico dos sais de cobre. Aqui ele está no estado de oxidação +2 (Cu²⁺).",
    fill: "#8a5a28",
    text: "#f3ecd8",
  },
  As: {
    name: "Arsênio",
    z: 33,
    mass: "74,92 u",
    role: "Semimetal extremamente tóxico. No pigmento aparece como arsenito (AsO₃³⁻ / HAsO₃²⁻). É o responsável pelos envenenamentos.",
    fill: "#5a4a78",
    text: "#f3ecd8",
  },
  O: {
    name: "Oxigênio",
    z: 8,
    mass: "16,00 u",
    role: "Três átomos de oxigênio ligam o arsênio no ânion arsenito. Representam cerca de um quarto da massa da fórmula.",
    fill: "#8b2e2e",
    text: "#f3ecd8",
  },
  H: {
    name: "Hidrogênio",
    z: 1,
    mass: "1,01 u",
    role: "Um único hidrogênio torna a fórmula um hidrogenoarsenito de cobre (CuHAsO₃), a versão mais citada do pigmento.",
    fill: "#d7d2c4",
    text: "#16210a",
  },
};

export function Molecule() {
  const [active, setActive] = useState<Atom>("As");
  const info = ATOMS[active];

  return (
    <div className="rounded-lg border border-ink/10 bg-paper-edge/50 p-4">
      <p className="font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-scheele-deep uppercase">
        Toque num átomo · fórmula empírica CuHAsO₃
      </p>
      <div className="mt-3 grid gap-4 sm:grid-cols-[1fr_14rem]">
        <svg viewBox="0 0 320 210" className="h-auto w-full" role="img" aria-label="Modelo simplificado de CuHAsO3">
          <line x1="160" y1="108" x2="64" y2="108" stroke="#16210a" strokeWidth="3" opacity="0.35" />
          <line x1="160" y1="108" x2="232" y2="52" stroke="#16210a" strokeWidth="3" opacity="0.35" />
          <line x1="160" y1="108" x2="248" y2="148" stroke="#16210a" strokeWidth="3" opacity="0.35" />
          <line x1="160" y1="108" x2="160" y2="176" stroke="#16210a" strokeWidth="3" opacity="0.35" />
          <AtomNode id="Cu" cx={64} cy={108} r={28} active={active} onSelect={setActive} />
          <AtomNode id="As" cx={160} cy={108} r={32} active={active} onSelect={setActive} />
          <AtomNode id="O" cx={232} cy={52} r={20} active={active} onSelect={setActive} />
          <AtomNode id="O" cx={248} cy={148} r={20} active={active} onSelect={setActive} />
          <AtomNode id="O" cx={160} cy={176} r={20} active={active} onSelect={setActive} />
          <AtomNode id="H" cx={288} cy={168} r={14} active={active} onSelect={setActive} />
          <line x1="264" y1="156" x2="278" y2="166" stroke="#16210a" strokeWidth="2.5" opacity="0.35" />
        </svg>
        <div>
          <p className="font-display text-xl text-ink">
            {active} · {info.name}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            Z = {info.z} · massa atômica {info.mass}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{info.role}</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Modelo didático, não cristalográfico. O pigmento histórico era uma mistura de arsenitos e
        arseniatos de cobre; a fórmula mais citada é CuHAsO₃. Cores dos átomos seguem a convenção CPK.
      </p>
    </div>
  );
}

function AtomNode({
  id,
  cx,
  cy,
  r,
  active,
  onSelect,
}: {
  id: Atom;
  cx: number;
  cy: number;
  r: number;
  active: Atom;
  onSelect: (id: Atom) => void;
}) {
  const atom = ATOMS[id];
  const isOn = active === id;
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${id}, ${atom.name}`}
      className="cursor-pointer"
      onClick={() => onSelect(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(id);
        }
      }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={atom.fill}
        stroke={isOn ? "#478800" : "rgba(22,33,10,0.35)"}
        strokeWidth={isOn ? 4 : 1.5}
      />
      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={atom.text}
        fontSize={id === "H" ? 11 : 14}
        fontFamily="Figtree, sans-serif"
        fontWeight={600}
      >
        {id}
      </text>
    </g>
  );
}

export function MassBars() {
  const rows = [
    { id: "As", label: "Arsênio", pct: 40.0 },
    { id: "Cu", label: "Cobre", pct: 33.9 },
    { id: "O", label: "Oxigênio", pct: 25.6 },
    { id: "H", label: "Hidrogênio", pct: 0.54 },
  ];
  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div key={row.id}>
          <div className="mb-1 flex items-baseline justify-between text-xs">
            <span className="font-medium text-ink">
              {row.id} · {row.label}
            </span>
            <span className="font-mono tabular-nums text-muted">{row.pct.toString().replace(".", ",")}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-ink/10">
            <div
              className={cn("h-full rounded-full bg-scheele")}
              style={{ width: `${Math.max(row.pct, 3)}%` }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-muted">
        Percentuais em massa para CuHAsO₃ (massa molar ≈ 187,47 g/mol). O tom do pigmento muda com a
        razão cobre/arsênio e com a temperatura de secagem.
      </p>
    </div>
  );
}
