import Container from "./Container";
import Reveal from "./Reveal";
import StaggerItem from "./StaggerItem";

const testimonials = [
  {
    title: "Especialização e atualização contínua",
    text: "Formação em Saúde Mental pela Universidade São Francisco e em Cuidados Paliativos pela Faculdade Israelita Albert Einstein, além de busca constante por aperfeiçoamento profissional.",
  },
  {
    title: "Atendimento humanizado",
    text: "Condução terapêutica com empatia, ética profissional, acolhimento e sem julgamentos, criando um espaço seguro para o paciente.",
  },
  {
    title: "Cuidado integral",
    text: "Atuação com pacientes oncológicos, idosos e pessoas com condições crônicas, considerando não apenas a demanda clínica, mas também qualidade de vida, contexto e suporte familiar.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
              Diferenciais
            </h2>
            <p className="mt-3 text-neutral-600">
              Uma atuação guiada por escuta qualificada, responsabilidade
              profissional e cuidado com cada história.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <StaggerItem key={t.title} delay={index * 140}>
                <div className="rounded-[1.6rem] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur">
                  <div className="h-11 w-11 rounded-full bg-[rgba(184,149,78,0.18)]" />

                  <p className="mt-4 text-sm font-semibold text-neutral-950">
                    {t.title}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {t.text}
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