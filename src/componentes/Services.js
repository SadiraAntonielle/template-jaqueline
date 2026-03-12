import Container from "./Container";
import Reveal from "./Reveal";
import StaggerItem from "./StaggerItem";

const services = [
  { title: "Serviço 1", desc: "Descrição curta e objetiva." },
  { title: "Serviço 2", desc: "Benefício claro, sem textão." },
  { title: "Serviço 3", desc: "Foco em resultado e conforto." },
  { title: "Serviço 4", desc: "O que a pessoa ganha com isso." },
  { title: "Serviço 5", desc: "Use palavras simples." },
  { title: "Serviço 6", desc: "Confiança + clareza." },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-neutral-50 dark:bg-neutral-900">
      <Container className="py-14 md:py-20">
         <Reveal>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Serviços
          </h2>
          <p className="mt-3 text-neutral-600">
            Uma seleção do que você faz. Curto, elegante e fácil de entender.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
  <StaggerItem key={s.title} delay={index * 120}>
    <div className="rounded-[1.6rem] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 h-10 w-10 rounded-2xl bg-[rgba(200,169,106,0.18)]" />
      <p className="text-base font-semibold text-neutral-950">
        {s.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
        {s.desc}
      </p>
    </div>
  </StaggerItem>
))}
        </div>
        </Reveal>
      </Container>
    </section>
  );
}