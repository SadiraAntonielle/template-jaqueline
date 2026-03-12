import Container from "./Container";
import Reveal from "./Reveal";

const WHATSAPP_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento.";

export default function Contact() {
  return (
    <section id="contato" className="bg-neutral-50">
      <Container className="py-14 md:py-20">
        <Reveal>
          <div className="grid gap-6 rounded-[2rem] border border-neutral-200 bg-white p-6 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
                Contato
              </h2>
              <p className="mt-3 text-neutral-600">
                Para agendar um atendimento ou tirar dúvidas, entre em contato.
              </p>

              <div className="mt-6 space-y-3 text-sm text-neutral-700">
                <p>📍 Endereço: Rua Comendador José Garcia, 1420, Santo Ivo - Instituto Ágape</p>
                <p>📞 E-mail: jaqvalerialmeidapsi@gmail.com</p>
                <p>📱 Instagram: @psijaquevaleria</p>
                <p>🕒 Atendimento mediante agendamento</p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(135deg,#B8954E,rgba(184,149,78,0.78))] px-5 py-3 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:shadow-md md:w-auto"
              >
                Agendar pelo WhatsApp
              </a>
            </div>

            <div className="rounded-[1.6rem] border border-neutral-200 bg-neutral-100 p-4">
              <div className="flex h-full min-h-[240px] flex-col items-center justify-center rounded-[1.2rem] bg-neutral-50 px-6 text-center">
                <p className="text-lg font-semibold text-neutral-950">
                  Jaqueline Psicóloga
                </p>
                <p className="mt-2 text-sm text-neutral-600">CRP 04/47119</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Atendimento psicológico para adultos e idosos, com abordagem em
                  psicanálise, escuta acolhedora e cuidado humanizado.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}