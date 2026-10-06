import { Callout, Figure, Note, PageHeading } from "./chrome";

export function PageArte() {
  return (
    <article className="space-y-6">
      <PageHeading
        number="02"
        title="A cor que pintou o século XIX"
        lead="O verde de Scheele saiu da botica e entrou nos ateliês, nos salões, nos livros e nos vestidos de baile. Poucas cores tiveram uma vida social tão intensa — e tão curta."
      />

      <div className="space-y-4 text-sm leading-relaxed sm:text-base">
        <p>
          Artistas queriam um verde que não desbotasse como os lagos vegetais nem puxasse tanto
          para o azul quanto o verdigris. O arsenito de cobre entregou um amarelo-verde cubriente,
          barato, fácil de moer em óleo. Há um porém científico importante para o ensino médio:
          o pigmento original escurecia com sulfetos e poluição. Por isso, em 1814, Wilhelm
          Sattler e Friedrich Russ lançaram em Schweinfurt o{" "}
          <strong className="font-semibold">verde esmeralda</strong> (acetoarsenito de cobre) —
          mais vivo, um pouco mais estável, tão venenoso quanto.
        </p>
        <p>
          Conservadores de museu confirmam o verde de Scheele em poucos objetos (cerca de dez
          casos bem documentados). Muitas vezes ele aparece misturado ao verde esmeralda. Os
          impressionistas e pós-impressionistas usaram sobretudo este segundo verde.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Figure
          src="/images/turner-inspirado.jpg"
          alt="Paisagem romântica inglesa com folhagem verde-amarelada à beira de um rio."
          caption="J. M. W. Turner, Guildford from the Banks of the Wey, c. 1805."
          credit="Ilustração inspirada na obra. Análise por EDX na Tate identificou verde de Scheele neste óleo sobre madeira. Turner trocou o pigmento pelo verde esmeralda por volta dos anos 1830."
        />
        <Figure
          src="/images/monet-inspirado.jpg"
          alt="Cena impressionista de banhistas num rio com verdes intensos."
          caption="Claude Monet, Banhistas em La Grenouillère, 1869."
          credit="Ilustração inspirada na obra. Monet, Cézanne, Pissarro, Gauguin e Van Gogh usaram verde esmeralda (Paris green), o sucessor direto do verde de Scheele."
        />
      </div>

      <Note label="Obras e artistas para anotar">
        <ul className="list-disc space-y-1.5 pl-4">
          <li>
            <span className="font-medium">Turner (confirmado):</span> esboço de Guildford, Tate,
            Londres — um dos raros casos em que o laboratório achou Scheele, não só esmeralda.
          </li>
          <li>
            <span className="font-medium">Georg Friedrich Kersting:</span> interiores românticos
            alemães do início do séc. XIX, quando o pigmento ainda era novidade de paleta.
          </li>
          <li>
            <span className="font-medium">Impressionistas:</span> verdes de arsênio nas árvores,
            nas águas e nas sombras — a cor “impossível” virou luz.
          </li>
          <li>
            <span className="font-medium">Papéis de William Morris:</span> a firma Morris & Co.
            usou verdes arsenicais em papéis de parede; Morris minimizou o risco, mesmo depois dos
            alertas vitorianos.
          </li>
        </ul>
      </Note>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Figure
          src="/images/vestido.jpg"
          alt="Vestido de baile vitoriano de seda verde-amarelada em manequim sem cabeça."
          caption="A moda que adoecia."
          credit="Vestidos de baile, sapatos e luvas tingidos com arsenito. O pó se soltava na dança."
        />
        <Figure
          src="/images/sala-vitoriana.jpg"
          alt="Sala vitoriana inteiramente forrada de papel de parede verde botânico."
          caption="A casa como câmara de gás lenta."
          credit="Papéis úmidos + mofo podiam liberar gases de arsênio. Crianças definhavam em quartos verdes."
        />
        <Figure
          src="/images/livros.jpg"
          alt="Pilha de livros do século XIX com capas de tecido verde de Scheele."
          caption="Até a biblioteca envenenava."
          credit="O Poison Book Project (Universidade de Delaware) ainda encontra encadernações arsenicais em acervos."
        />
      </div>

      <Callout label="Não era só pintura">
        <p>
          O pigmento coloriu papéis de parede, cortinas, velas, brinquedos, flores artificiais,
          sabonetes, naipes de baralho e, em alguns países, até doces e manjares verdes. A Escócia
          ficou com fama de desconfiar de guloseimas verdes — memória popular de uma época em que
          a cor da hortelã podia ser arsênio.
        </p>
      </Callout>
    </article>
  );
}
