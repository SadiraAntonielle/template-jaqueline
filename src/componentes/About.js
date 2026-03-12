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
              Um atendimento construído com acolhimento, ética e respeito à
              singularidade de cada paciente.
            </p>
          </div>

          <div>
            <p className="mb-3 inline-flex rounded-full border border-[#dcc7aa] bg-[#fffdf9] px-3 py-1 text-xs tracking-wide text-[#7a6248]">
              Sobre a profissional
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#2F241C] md:text-4xl">
              Escuta qualificada, cuidado humanizado e um espaço seguro para o
              seu processo.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#6E5843] md:text-lg">
              Jaqueline Valéria de Almeida atua com atendimento psicológico para
              adultos e idosos, com abordagem em psicanálise. Sua condução
              terapêutica é empática, ética, acolhedora e sem julgamentos,
              oferecendo um espaço de escuta e cuidado respeitando a história,
              o tempo e a singularidade de cada paciente.
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
                      Flexibilidade para que o cuidado aconteça da forma que
                      melhor se encaixa na rotina e necessidade de cada paciente.
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
                      Adultos, idosos e diferentes demandas emocionais
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6E5843]">
                      Atuação com ansiedade, condições crônicas, pacientes
                      oncológicos, idosos e outras questões que impactam o
                      bem-estar emocional.
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
                      Cuidado integral e olhar individualizado
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6E5843]">
                      Um acompanhamento pensado de forma sensível, respeitosa e
                      alinhada à realidade de cada pessoa.
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