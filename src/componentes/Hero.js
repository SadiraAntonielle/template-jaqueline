import Container from "./Container";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento.";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[#F6EEE6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(211,154,86,0.22),transparent_55%)]" />

      <Container className="relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-[#E2C7AA] bg-[#FFF9F4]/90 px-3 py-1 text-xs tracking-wide text-[#8B5E3B] backdrop-blur">
            Atendimento online e presencial
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#4B3124] md:text-5xl">
            Um espaço de escuta, acolhimento e cuidado emocional.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7A5230] md:text-lg">
            Atendimento psicológico para adultos e idosos, com abordagem em
            psicanálise, escuta ética e um olhar humanizado para cada história.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#D39A56,rgba(197,138,71,0.9))] px-6 py-3 text-sm font-semibold text-[#4B3124] shadow-sm ring-1 ring-[#C58A47]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
              >
                <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.91.5 3.78 1.45 5.42L2 22l4.83-1.58a9.8 9.8 0 005.21 1.5h.01c5.46 0 9.88-4.42 9.88-9.88S17.5 2 12.04 2zm0 17.9c-1.63 0-3.22-.44-4.61-1.27l-.33-.2-2.87.94.94-2.8-.21-.34a7.86 7.86 0 01-1.2-4.2c0-4.35 3.54-7.89 7.9-7.89 2.11 0 4.1.82 5.59 2.31a7.85 7.85 0 012.31 5.58c0 4.36-3.54 7.9-7.9 7.9zm4.33-5.92c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.41-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
              </svg>
              Agendar pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="rounded-xl border border-[#E2C7AA] bg-[#FFF9F4] px-5 py-3 text-sm font-medium text-[#4B3124] transition hover:bg-[#F1E1D0]"
            >
              Ver áreas de atuação
            </a>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-xs text-[#7A5230]">
            <div className="rounded-xl border border-[#E2C7AA] bg-[#FFF9F4] p-3">
              <p className="font-medium text-[#4B3124]">Acolhimento</p>
              <p className="mt-1">Escuta sensível e sem julgamentos</p>
            </div>
            <div className="rounded-xl border border-[#E2C7AA] bg-[#FFF9F4] p-3">
              <p className="font-medium text-[#4B3124]">Ética</p>
              <p className="mt-1">Condução profissional e cuidadosa</p>
            </div>
            <div className="rounded-xl border border-[#E2C7AA] bg-[#FFF9F4] p-3">
              <p className="font-medium text-[#4B3124]">Flexibilidade</p>
              <p className="mt-1">Online e presencial</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(75,49,36,0.06),transparent_60%)]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E2C7AA] bg-[#FFF9F4] p-3 shadow-sm">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/2.jpeg"
                alt="Foto profissional de Jaqueline Psicóloga"
                width={600}
                height={750}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                priority
              />
            </div>

            <div className="mt-4 rounded-2xl border border-[#E2C7AA] bg-[#FFF9F4] p-4">
              <p className="text-sm font-medium text-[#4B3124]">
                Jaqueline Psicóloga
              </p>
              <p className="mt-1 text-sm text-[#7A5230]">
                CRP 04/47119 • Pouso Alegre/MG
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}