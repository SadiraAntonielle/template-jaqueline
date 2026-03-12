import Container from "./Container";
import Image from "next/image";
import Reveal from "./Reveal";
import StaggerItem from "./StaggerItem";

const testimonials = [
  { name: "Paciente 1", text: "Atendimento impecável. Me senti muito segura.", photo: "/images/5.jpeg" },
  { name: "Paciente 2", text: "Profissionalismo e cuidado do começo ao fim.", photo: "/images/6.jpeg" },
  { name: "Paciente 3", text: "Resultado excelente e atendimento humano.", photo: "/images/5.jpeg" },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-20">
        <Reveal>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Depoimentos
          </h2>
          <p className="mt-3 text-neutral-600">
            Prova social vende. Use frases curtas e reais.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, index) => (
  <StaggerItem key={t.name} delay={index * 140}>
    <div className="rounded-[1.6rem] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 overflow-hidden rounded-full bg-neutral-200">
          <Image
            src={t.photo}
            alt={t.name}
            width={44}
            height={44}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-950">
            {t.name}
          </p>
          <p className="text-xs text-neutral-600">⭐⭐⭐⭐⭐</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-700">
        “{t.text}”
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