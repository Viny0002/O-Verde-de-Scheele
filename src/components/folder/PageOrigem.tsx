import { Callout, Figure, Note, PageHeading } from "./chrome";

export function PageOrigem() {
  return (
    <article className="space-y-6">
      <PageHeading
        number="01"
        title="A origem de um verde impossível"
        lead="Até o século XVIII, um verde vivo, barato e estável era o sonho frustrado de pintores e tintureiros. Em 1775, na Suécia, um boticário encontrou a cor — e, com ela, um veneno."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4 text-sm leading-relaxed sm:text-base">
          <p>
            Carl Wilhelm Scheele (1742–1786) era um farmacêutico alemão-sueco que trabalhava em
            boticas de Estocolmo e, depois, de Köping. Sem laboratório universitário, descobriu o
            oxigênio, o cloro, o manganês, o tungstênio (na scheelita), o ácido tartárico, a
            glicerina — e ainda assim ficou famoso por uma cor.
          </p>
          <p>
            Em 1775, ao estudar compostos de arsênio, misturou uma solução de arsenito de sódio
            com sulfato de cobre (o “vitríolo azul”). Formou-se um precipitado insolúvel, de um
            verde-amarelado que ninguém fabricava em escala. Os verdes antigos — terra verde,
            verdigris, malaquita, carbonatos de cobre — eram opacos, azulados ou desbotavam. O
            novo pigmento parecia grama viva sobre o papel.
          </p>
          <p>
            Scheele não escondeu o perigo. Em 1777 avisou um colega de que o pigmento era
            venenoso. Em 1778 publicou o método no periódico da Academia Real Sueca de Ciências —
            e publicou também a toxicidade. O segredo nunca foi um segredo. A Europa simplesmente
            quis a cor mais do que temeu o arsênio.
          </p>
        </div>
        <Figure
          src="/images/laboratorio.jpg"
          alt="Laboratório de boticário do século XVIII, com precipitado verde se formando numa tigela."
          caption="Köping, por volta de 1775: o verde nasce de um precipitado."
          credit="Ilustração pedagógica. O boticário aparece de costas: não é um retrato de Scheele."
        />
      </div>

      <ol className="grid gap-3 sm:grid-cols-3">
        {[
          ["1775", "Síntese", "Scheele obtém o arsenito de cobre enquanto mapeia a química do arsênio."],
          ["1777–78", "Aviso e receita", "Primeiro alerta privado; depois, publicação oficial com o método e o veneno."],
          ["c. 1780", "Moda europeia", "O pigmento entra em papéis de parede, tecidos, livros e paletas de artistas."],
        ].map(([year, title, body]) => (
          <li key={year} className="rounded-lg border border-ink/10 bg-paper-edge/40 px-4 py-3">
            <p className="font-mono text-xs text-scheele-deep">{year}</p>
            <p className="mt-1 font-display text-lg text-ink">{title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
          </li>
        ))}
      </ol>

      <div className="grid gap-6 lg:grid-cols-2">
        <Figure
          src="/images/pigmento.jpg"
          alt="Pó cristalino verde-amarelado de pigmento de Scheele sobre papel creme."
          caption="O tom oficialmente reproduzido hoje é o hex #478800."
          credit="Macro didático do pigmento: verde-amarelado, opaco, de brilho mineral."
        />
        <div className="space-y-4">
          <Note label="Por que o verde era tão difícil?">
            <p>
              A clorofila das plantas morre fora da folha. Os minerais verdes naturais tendem ao
              azul (cobre) ou ao oliva apagado (terra). Um verde “de relva”, barato e cubriente,
              só aparece com a química industrial do arsênio — e dura cerca de 120 anos na moda
              antes de ser banido das casas.
            </p>
          </Note>
          <Callout label="Nomes da mesma cor">
            <p>
              Verde de Scheele, Schloss green, Swedish green, mineral green, vert de Scheele,
              Scheelesgrün, Pigment Green 22 (CI 77412). Não confundir com o verde esmeralda /
              verde de Schweinfurt / Paris green, inventado em 1814 — parente químico, ainda mais
              intenso, igualmente tóxico.
            </p>
          </Callout>
        </div>
      </div>

      <Figure
        src="/images/still-life.jpg"
        alt="Natureza-morta com pó verde, cristais azuis de sulfato de cobre, almofariz e frasco."
        caption="Os ingredientes da cor: cobre (azul), arsênio (o perigo invisível) e calor."
        credit="Ainda-vida pedagógica no espírito de um gabinete de química do século XVIII."
      />
    </article>
  );
}
