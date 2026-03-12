import Container from "./Container";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="bg-white">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
              Atuação profissional
            </h2>
            <p className="mt-3 text-neutral-600">
              Uma trajetória construída com cuidado, escuta ativa e compromisso com
              o bem-estar emocional em diferentes contextos de atendimento.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.6rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="overflow-hidden rounded-[1.2rem]">
                <Image
                  src="/images/1.jpeg"
                  alt="Atendimento psicológico"
                  width={900}
                  height={700}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                Centro de Especialidades Maura Célia de Souza Faria
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Atuação com pacientes, especialmente pessoas com hipertensão e
                diabetes, sempre com um olhar humanizado e personalizado às
                necessidades de cada um.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-neutral-200 bg-neutral-50 p-6">
              <div className="overflow-hidden rounded-[1.2rem]">
                <Image
                  src="/images/2.jpeg"
                  alt="Cuidado e acolhimento"
                  width={900}
                  height={700}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-neutral-950">
                CAPO e Instituto Ágape
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Participação em equipe multidisciplinar com foco no acolhimento de
                pacientes oncológicos, familiares, idosos e pessoas em cuidados
                paliativos, reforçando o cuidado integral e o respeito à história
                de cada paciente.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}