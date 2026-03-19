import Container from "./Container";
import Reveal from "./Reveal";

const WHATSAPP_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento.";

export default function Contact() {
  return (
    <section id="contato" className="bg-[#F6EEE6]">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="grid gap-6 rounded-[2rem] border border-[#E2C7AA] bg-[#FFF9F4] p-6 shadow-[0_10px_30px_rgba(75,49,36,0.06)] md:grid-cols-2 md:p-10">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#E2C7AA] bg-[#FFF3E8] px-3 py-1 text-xs tracking-wide text-[#8B5E3B]">
                Entre em contato
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#4B3124]">
                Contato
              </h2>

              <p className="mt-3 text-[#7A5230]">
                Se você deseja iniciar seu processo terapêutico ou tirar alguma dúvida, entre em contato.
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#6E4A33]">
                <p>📍 Endereço: Rua Comendador José Garcia, 1420, Santo Ivo - Instituto Ágape</p>
                <p>✉️ E-mail: jaqvalerialmeidapsi@gmail.com</p>
                <p>📱 Instagram: @psijaquevaleria</p>
                <p>🕒 Atendimento mediante agendamento</p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(135deg,#D39A56,rgba(197,138,71,0.9))] px-5 py-3 text-sm font-semibold text-[#4B3124] shadow-sm ring-1 ring-[#C58A47]/30 transition hover:-translate-y-0.5 hover:shadow-md md:w-auto"
              >
                Agendar pelo WhatsApp
              </a>
            </div>

            <div className="rounded-[1.6rem] border border-[#E2C7AA] bg-[linear-gradient(180deg,#FFF3E8,#E9C8A3)] p-4 shadow-[0_10px_30px_rgba(75,49,36,0.08)]">
              <div className="flex h-full min-h-[240px] flex-col items-center justify-center rounded-[1.2rem] bg-[#FFF9F4] px-6 text-center">
                <p className="text-lg font-semibold text-[#4B3124]">
                  Jaqueline Psicóloga
                </p>
                <p className="mt-2 text-sm text-[#7A5230]">CRP 04/47119</p>
                <p className="mt-4 text-sm leading-relaxed text-[#6E4A33]">
                  Atendimento psicológico para adultos e idosos, com abordagem em psicanálise, escuta ética e cuidado individualizado.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}