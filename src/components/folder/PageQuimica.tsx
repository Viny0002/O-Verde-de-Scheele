import { Callout, Figure, Note, PageHeading } from "./chrome";
import { MassBars, Molecule } from "./Molecule";

export function PageQuimica() {
  return (
    <article className="space-y-6">
      <PageHeading
        number="03"
        title="Composição e o corpo que adoece"
        lead="CuHAsO₃: quatro elementos, uma cor brilhante e um manual de toxicologia. Esta página é a mais importante da pasta — leia com calma."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Cu", "29", "Cobre", "metal, +2"],
          ["H", "1", "Hidrogênio", "não-metal"],
          ["As", "33", "Arsênio", "semimetal"],
          ["O", "8", "Oxigênio", "não-metal ×3"],
        ].map(([sym, z, name, note]) => (
          <div key={sym} className="rounded-lg border border-ink/10 bg-scheele px-3 py-3 text-paper">
            <p className="font-mono text-[0.65rem] tracking-widest uppercase opacity-80">Z = {z}</p>
            <p className="font-display text-3xl leading-none">{sym}</p>
            <p className="mt-1 text-sm font-medium">{name}</p>
            <p className="text-xs opacity-80">{note}</p>
          </div>
        ))}
      </div>

      <Molecule />
      <MassBars />

      <div className="overflow-x-auto rounded-lg border border-ink/10">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <caption className="sr-only">Comparação entre verdes de arsênio e um verde moderno</caption>
          <thead className="bg-scheele text-paper">
            <tr>
              <th className="px-3 py-2 font-medium">Pigmento</th>
              <th className="px-3 py-2 font-medium">Ano</th>
              <th className="px-3 py-2 font-medium">Fórmula</th>
              <th className="px-3 py-2 font-medium">Tom e risco</th>
            </tr>
          </thead>
          <tbody className="bg-paper-edge/40">
            <tr className="border-t border-ink/10">
              <td className="px-3 py-2 font-medium">Verde de Scheele</td>
              <td className="px-3 py-2">1775</td>
              <td className="px-3 py-2 font-mono text-xs">CuHAsO₃</td>
              <td className="px-3 py-2">Verde-amarelado; escurece; tóxico</td>
            </tr>
            <tr className="border-t border-ink/10">
              <td className="px-3 py-2 font-medium">Verde esmeralda / Paris</td>
              <td className="px-3 py-2">1814</td>
              <td className="px-3 py-2 font-mono text-xs">3Cu(AsO₂)₂·Cu(CH₃COO)₂</td>
              <td className="px-3 py-2">Mais vivo; também arsenical</td>
            </tr>
            <tr className="border-t border-ink/10">
              <td className="px-3 py-2 font-medium">Viridiano / ftalocianina</td>
              <td className="px-3 py-2">séc. XIX–XX</td>
              <td className="px-3 py-2 font-mono text-xs">Cr₂O₃·2H₂O / CuPc</td>
              <td className="px-3 py-2">Verdes modernos, sem arsênio</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Note label="O pigmento não era uma substância pura">
        <p>
          Análises recentes (Munoz et al., 2024) mostram uma mistura: meta-arsenito, ortoarsenito,
          arseniatos e até a forma cristalina próxima do mineral trippkeíta, Cu(AsO₂)₂. Íons livres
          de cobre e arsênio migram com umidade — por isso o perigo não ficava “preso” na tinta.
        </p>
      </Note>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 text-sm leading-relaxed sm:text-base">
          <h3 className="font-display text-xl text-ink">Três portas de entrada no corpo</h3>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <span className="font-medium">Inalação.</span> Pó fino de flores artificiais, lixa de
              papel de parede, poeira de ateliê. O arsênio vai a pulmões, estômago e fígado.
            </li>
            <li>
              <span className="font-medium">Ingestão.</span> Mãos na boca, brinquedos lambidos,
              doces corados, pigmento em alimentos. Dose aguda pode matar.
            </li>
            <li>
              <span className="font-medium">Pele e mucosas.</span> Vestidos, luvas, papéis. Sudorese
              na dança soltava o pó. Crianças em berços verdes absorviam o veneno dia após dia.
            </li>
          </ol>
          <p>
            Sintomas agudos: dor abdominal, vômitos, diarreia, gosto metálico, queda de pressão,
            confusão. Crônicos: manchas na pele, linhas de Mees nas unhas, formigamento nos pés
            (neuropatia), anemia — e câncer de pele, pulmão e bexiga. O arsênio é carcinógeno
            humano confirmado.
          </p>
        </div>
        <Figure
          src="/images/flores.jpg"
          alt="Bancada de oficina de flores artificiais coberta de pó verde de arsênio."
          caption="Londres, 1861: o ofício que matou Matilda Scheurer, 19 anos."
          credit="Ela polvilhava folhas de seda com o pigmento. Vômitos verdes, escleróticas verdes, unhas verdes. O artigo Pretty Poison-Wreaths espalhou o caso."
        />
      </div>

      <Callout label="Papel de parede úmido: o gás de Gosio" tone="ink">
        <p>
          Em paredes úmidas, fungos como <em>Scopulariopsis</em> e <em>Paecilomyces</em> metabolizam
          o arsenito e podem liberar compostos voláteis de arsênio (o chamado gás de Gosio, 1893).
          Durante muito tempo acreditou-se que o trimetilarsina era o assassino invisível das casas
          vitorianas. Estudos posteriores mostram que esse gás específico é menos tóxico do que se
          pensava — o que não salva o pigmento: o pó, o contato e os íons solúveis bastam para
          envenenar. A lição de método científico: uma hipótese famosa (Napoleão, papéis, mofo)
          precisa ser separada do que está medido.
        </p>
      </Callout>
    </article>
  );
}
