import Container from "./Container";
import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="bg-white dark:bg-neutral-950">
      <Container className="py-14 md:py-20">
        <Reveal className="grid items-center gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/6.jpeg"
              alt="Ambiente / profissional"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            Espaço para foto do ambiente, consultório ou profissional.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Sobre
          </h2>

          <p className="mt-3 text-neutral-600">
            Um texto curto, humano e confiante. Explique sua abordagem e o que a
            pessoa pode esperar no atendimento.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-xl border border-neutral-200 bg-white p-4">
              ✅ Atendimento personalizado
            </li>
            <li className="rounded-xl border border-neutral-200 bg-white p-4">
              ✅ Experiência e atualização constante
            </li>
            <li className="rounded-xl border border-neutral-200 bg-white p-4">
              ✅ Foco em conforto e resultado
            </li>
          </ul>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}