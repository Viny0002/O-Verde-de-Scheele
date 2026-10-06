import { Callout, Figure, Note, PageHeading } from "./chrome";

const REFS = [
  "SCHEELE’S green. In: WIKIPEDIA: the free encyclopedia. Disponível em: https://en.wikipedia.org/wiki/Scheele%27s_green. Acesso em: 6 out. 2026.",
  "CAMEO. Scheele’s green. Boston: Museum of Fine Arts. Disponível em: https://cameo.mfa.org/wiki/Scheele%27s_green. Acesso em: 6 out. 2026.",
  "MUNOZ, Leonardo Pantoja et al. Hidden in plain sight: revisiting the synthesis, characterisation, degradation and the intricate relationship between Scheele’s green and Emerald green. npj Heritage Science, [s. l.], v. 12, artigo 94, 2024. DOI: https://doi.org/10.1038/s40494-024-01192-7. Disponível em: https://www.nature.com/articles/s40494-024-01192-7. Acesso em: 6 out. 2026.",
  "FIEDLER, Inge; BAYARD, Michael. Emerald Green and Scheele’s Green. In: FITZHUGH, Elisabeth West (ed.). Artists’ pigments: a handbook of their history and characteristics. v. 3. Washington: National Gallery of Art, 1997. p. 219-271.",
  "GETTENS, Rutherford J.; STOUT, George L. Painting materials: a short encyclopaedia. New York: Dover, 1966.",
  "TOWNSEND, Joyce H. The materials of J. M. W. Turner: pigments. Studies in Conservation, [s. l.], v. 38, n. 4, p. 231-254, 1993.",
  "JONES, David E. H.; LEDINGHAM, Kenneth W. D. Arsenic in Napoleon’s wallpaper. Nature, v. 299, p. 626-627, 1982. DOI: https://doi.org/10.1038/299626a0.",
  "UNIVERSITY OF DELAWARE. Poison Book Project. Disponível em: https://sites.udel.edu/poisonbookproject/. Acesso em: 6 out. 2026.",
];

export function PageFontes() {
  return (
    <article className="space-y-6">
      <PageHeading
        number="04"
        title="Curiosidades, ressalvas e fontes ABNT"
        lead="Histórias famosas, o que a ciência realmente sustenta, e a lista de referências no padrão NBR 6023 — pronta para o trabalho escolar."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 text-sm leading-relaxed sm:text-base">
          <h3 className="font-display text-xl text-ink">Napoleão e o quarto verde</h3>
          <p>
            No exílio em Santa Helena (1815–1821), Napoleão viveu em Longwood House, com papéis de
            parede verdes — a cor predileta do imperador. Análises de mechas de cabelo (a partir
            de 1961, confirmadas depois) acharam arsênio muito acima do normal. Em 1982, Jones e
            Ledingham publicaram na <em>Nature</em> que um fragmento do papel de Longwood continha
            arsênio em quantidade relevante.
          </p>
          <p>
            Isso prova exposição. Não prova assassinato. A autópsia e o consenso clínico apontam
            câncer de estômago. Cabelos de outras fases da vida dele também têm arsênio: a substância
            estava em tônicos, cosméticos, conservantes e no vinho da época. O papel úmido pode ter
            piorado um quadro já grave — e o arsênio aumenta o risco de carcinoma gástrico. Conclusão
            honesta para o ensino médio: o verde provavelmente não “matou Napoleão sozinho”, mas
            também não era inofensivo.
          </p>
        </div>
        <Figure
          src="/images/longwood.jpg"
          alt="Interior simples de Longwood House com papel de parede listrado verde."
          caption="Longwood House, Santa Helena: o verde da moda no fim do império."
          credit="Ilustração pedagógica do quarto, sem retratos. Hipótese do papel é famosa; o diagnóstico majoritário continua sendo o câncer."
        />
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {[
          [
            "O descobridor avisou",
            "Scheele publicou a toxicidade junto com a cor. O desastre vitoriano não foi ignorância total: foi desejo + indústria + regulação lenta.",
          ],
          [
            "Inseticida até os anos 1930",
            "Fora da pintura, o arsenito de cobre (e o Paris green) ainda matava ratos, fungos e insetos no século XX.",
          ],
          [
            "A moda matou o próprio verde",
            "No fim da era vitoriana, o verde saiu de moda nas casas em parte porque passou a significar veneno, não primavera.",
          ],
          [
            "Um verde que ainda existe",
            "Reproduções modernas usam pigmentos sem arsênio para chegar perto de #478800 ou #3C7A18. A cor sobreviveu; a fórmula, não.",
          ],
        ].map(([title, body]) => (
          <li key={title} className="rounded-lg border border-ink/10 bg-paper-edge/40 px-4 py-3">
            <p className="font-display text-lg text-ink">{title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
          </li>
        ))}
      </ul>

      <Callout label="Como citar esta pasta (ABNT)">
        <p className="font-normal">
          VERDE de Scheele: pasta didática em quatro páginas. Material didático digital. 2026.
          Disponível em: [endereço da publicação]. Acesso em: 6 out. 2026.
        </p>
        <p className="mt-2 text-sm opacity-90">
          No texto, use o sistema autor-data da NBR 10520: (Munoz et al., 2024) ou, para verbete
          sem autor, a primeira palavra em versal: (Scheele’s green, 2026).
        </p>
      </Callout>

      <div>
        <h3 className="font-display text-xl text-ink">Referências</h3>
        <p className="mt-1 text-xs text-muted">
          NBR 6023:2025 · alinhadas à esquerda · ordem alfabética · acesso em 6 out. 2026
        </p>
        <ol className="mt-3 space-y-2.5">
          {REFS.map((ref) => (
            <li
              key={ref.slice(0, 24)}
              className="border-l-2 border-scheele pl-3 text-xs leading-relaxed text-ink sm:text-sm"
            >
              {ref}
            </li>
          ))}
        </ol>
      </div>

      <Note label="Glossário rápido">
        <p>
          <span className="font-medium">Precipitado:</span> sólido que se forma numa solução.{" "}
          <span className="font-medium">Arsenito / arseniato:</span> oxiânions de arsênio III e V.{" "}
          <span className="font-medium">Carcinógeno:</span> substância capaz de causar câncer.{" "}
          <span className="font-medium">EDX:</span> espectroscopia de raios X usada para achar
          elementos em pinturas. <span className="font-medium">PG22:</span> código internacional
          do pigmento.
        </p>
      </Note>
    </article>
  );
}
