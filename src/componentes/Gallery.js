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
            Estrutura
          </h2>
          <p className="mt-3 text-neutral-600">
            Fotos do ambiente e do atendimento (só pra visualização por enquanto).
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/3.jpeg"
              alt="Estrutura 1"
              width={900}
              height={700}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/4.jpeg"
              alt="Estrutura 2"
              width={900}
              height={700}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}