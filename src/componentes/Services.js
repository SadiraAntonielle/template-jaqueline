import Container from "./Container";
import Reveal from "./Reveal";
import StaggerItem from "./StaggerItem";
import {
  User,
  HeartHandshake,
  Brain,
  Activity,
  Ribbon,
  ShieldPlus,
} from "lucide-react";

const services = [
  {
    title: "Psicoterapia para adultos",
    desc: "Atendimento psicológico voltado ao acolhimento emocional, autoconhecimento e enfrentamento das questões da vida adulta.",
    icon: User,
  },
  {
    title: "Psicoterapia para idosos",
    desc: "Escuta sensível e cuidado voltado às vivências do envelhecimento, perdas, autonomia e qualidade de vida.",
    icon: HeartHandshake,
  },
  {
    title: "Ansiedade e sofrimento emocional",
    desc: "Espaço terapêutico para acolher angústias, inseguranças, medos e outras demandas emocionais.",
    icon: Brain,
  },
  {
    title: "Pacientes com diabetes e hipertensão",
    desc: "Atendimento com olhar humanizado para pessoas que convivem com condições crônicas e seus impactos emocionais.",
    icon: Activity,
  },
  {
    title: "Apoio a pacientes oncológicos e familiares",
    desc: "Suporte emocional, acolhimento e escuta durante o processo de adoecimento, tratamento e enfrentamento do diagnóstico.",
    icon: Ribbon,
  },
  {
    title: "Uso problemático de substâncias",
    desc: "Acompanhamento psicológico com ética, cuidado e respeito à singularidade de cada história.",
    icon: ShieldPlus,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[#f3eadf]">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2F241C]">
              Áreas de atuação
            </h2>
            <p className="mt-3 text-[#6E5843]">
              Atendimento psicológico com escuta qualificada, acolhimento e cuidado
              integral, respeitando a individualidade de cada paciente.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => {
              const Icon = s.icon;

              return (
                <StaggerItem key={s.title} delay={index * 120}>
                  <div className="rounded-[1.6rem] border border-[#eadfcf] bg-[#fffaf4] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(198,161,106,0.22)] text-[#7A5C3E]">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <p className="text-base font-semibold text-[#2F241C]">
                      {s.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#6E5843]">
                      {s.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}