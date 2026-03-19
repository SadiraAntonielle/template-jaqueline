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
    desc: "Um espaço de escuta e elaboração para questões emocionais, relacionamentos, escolhas e desafios da vida adulta.",
    icon: User,
  },
  {
    title: "Psicoterapia para idosos",
    desc: "Atendimento voltado às vivências do envelhecimento, mudanças, perdas e questões emocionais dessa fase da vida.",
    icon: HeartHandshake,
  },
  {
    title: "Ansiedade e sofrimento emocional",
    desc: "Acompanhamento psicológico para momentos de angústia, insegurança, sobrecarga e outras questões que afetam o bem-estar emocional.",
    icon: Brain,
  },
  {
    title: "Pacientes com diabetes e hipertensão",
    desc: "Escuta psicológica para pessoas que convivem com condições crônicas e com os impactos emocionais relacionados ao cuidado com a saúde.",
    icon: Activity,
  },
  {
    title: "Apoio a pacientes oncológicos e familiares",
    desc: "Acolhimento e suporte emocional diante do adoecimento, do tratamento e dos desafios vividos pelo paciente e por sua rede de apoio.",
    icon: Ribbon,
  },
  {
    title: "Uso problemático de substâncias",
    desc: "Atendimento psicológico com ética, escuta e respeito à singularidade de cada história e de cada processo.",
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