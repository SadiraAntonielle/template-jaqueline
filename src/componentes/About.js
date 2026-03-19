import Container from "./Container";
import Image from "next/image";
import Reveal from "./Reveal";
import { HeartHandshake, Brain, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="bg-[#fffaf4]">
      <Container className="py-16 md:py-24">
        <Reveal className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#e2d2bb] bg-[#f8f1e8] p-6 shadow-sm">
            <div className="aspect-[4/4.6] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/1.jpeg"
                alt="Foto profissional da psicóloga Jaqueline"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#6E5843]">
              Um atendimento construído com escuta, ética e respeito à história de cada paciente.
            </p>
          </div>

          <div>
            <p className="mb-3 inline-flex rounded-full border border-[#dcc7aa] bg-[#fffdf9] px-3 py-1 text-xs tracking-wide text-[#7a6248]">
              Sobre a profissional
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#2F241C] md:text-4xl">
              Escuta qualificada e um cuidado respeitoso para cada processo.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#6E5843] md:text-lg">
              Jaqueline Valéria de Almeida realiza atendimento psicológico para adultos e idosos, com abordagem em psicanálise. Seu trabalho é conduzido com ética, empatia e atenção à singularidade de cada paciente, oferecendo um espaço seguro de escuta, reflexão e cuidado emocional.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-[#e2d2bb] bg-[#fffdf9] p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(198,161,106,0.22)] text-[#7A5C3E]">
                    <HeartHandshake size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2F241C]">
                      Atendimento online e presencial
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6E5843]">
                      O cuidado pode acontecer de forma online ou presencial, conforme a necessidade e a rotina de cada paciente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e2d2bb] bg-[#fffdf9] p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(198,161,106,0.22)] text-[#7A5C3E]">
                    <Brain size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2F241C]">
                      Adultos e idosos
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6E5843]">
                      Atendimento voltado a diferentes momentos da vida, com escuta atenta às vivências, desafios e necessidades de cada pessoa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e2d2bb] bg-[#fffdf9] p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(198,161,106,0.22)] text-[#7A5C3E]">
                    <Sparkles size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2F241C]">
                      Cuidado individualizado
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6E5843]">
                      Cada processo terapêutico é único e conduzido com respeito ao tempo, à história e à singularidade de quem busca atendimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}