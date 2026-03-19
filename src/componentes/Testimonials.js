import Container from "./Container";
import Reveal from "./Reveal";
import StaggerItem from "./StaggerItem";
import { GraduationCap, Heart, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    title: "Especialização e atualização contínua",
    text: "Formação em Saúde Mental pela Universidade São Francisco e em Cuidados Paliativos pela Faculdade Israelita Albert Einstein, além de constante aperfeiçoamento profissional.",
    icon: GraduationCap,
  },
  {
    title: "Atendimento humanizado",
    text: "Condução terapêutica com empatia, ética e acolhimento, oferecendo um espaço seguro e sem julgamentos.",
    icon: Heart,
  },
  {
    title: "Cuidado integral",
    text: "Um olhar que considera não apenas a demanda apresentada, mas também a história, o contexto e a singularidade de cada paciente.",
    icon: ShieldCheck,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f3eadf]">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2F241C]">
              Diferenciais
            </h2>
            <p className="mt-3 text-[#6E5843]">
              Uma atuação guiada por escuta qualificada, responsabilidade
              profissional e cuidado com cada história.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, index) => {
              const Icon = t.icon;

              return (
                <StaggerItem key={t.title} delay={index * 140}>
                  <div className="rounded-[1.6rem] border border-[#eadfcf] bg-[#fffaf4] p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(198,161,106,0.22)] text-[#7A5C3E]">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#2F241C]">
                      {t.title}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#5F4A38]">
                      {t.text}
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