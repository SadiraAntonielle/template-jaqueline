import Container from "./Container";
import Reveal from "./Reveal";
import StaggerItem from "./StaggerItem";

const services = [
  {
    title: "Psicoterapia para adultos",
    desc: "Atendimento psicológico voltado ao acolhimento emocional, autoconhecimento e enfrentamento das questões da vida adulta.",
  },
  {
    title: "Psicoterapia para idosos",
    desc: "Escuta sensível e cuidado voltado às vivências do envelhecimento, perdas, autonomia e qualidade de vida.",
  },
  {
    title: "Ansiedade e sofrimento emocional",
    desc: "Espaço terapêutico para acolher angústias, inseguranças, medos e outras demandas emocionais.",
  },
  {
    title: "Pacientes com diabetes e hipertensão",
    desc: "Atendimento com olhar humanizado para pessoas que convivem com condições crônicas e seus impactos emocionais.",
  },
  {
    title: "Apoio a pacientes oncológicos e familiares",
    desc: "Suporte emocional, acolhimento e escuta durante o processo de adoecimento, tratamento e enfrentamento do diagnóstico.",
  },
  {
    title: "Uso problemático de substâncias",
    desc: "Acompanhamento psicológico com ética, cuidado e respeito à singularidade de cada história.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-neutral-50 dark:bg-neutral-900">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
              Áreas de atuação
            </h2>
            <p className="mt-3 text-neutral-600">
              Atendimento psicológico com escuta qualificada, acolhimento e cuidado
              integral, respeitando a individualidade de cada paciente.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => (
              <StaggerItem key={s.title} delay={index * 120}>
                <div className="rounded-[1.6rem] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 h-10 w-10 rounded-2xl bg-[rgba(184,149,78,0.18)]" />
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