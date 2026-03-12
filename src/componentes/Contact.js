import Container from "./Container";
import Reveal from "./Reveal";

const WHATSAPP_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Oi!%20Quero%20agendar%20um%20hor%C3%A1rio.";

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
              Clique no WhatsApp e fale direto. Simples e rápido.
            </p>

            <div className="mt-6 space-y-3 text-sm text-neutral-700">
              <p>📍 Endereço: Rua X, Centro — Cidade/UF</p>
              <p>🕒 Horário: Seg a Sex, 08h–18h</p>
              <p>📞 Telefone: (xx) xxxxx-xxxx</p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(135deg,#C8A96A,rgba(200,169,106,0.75))] px-5 py-3 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:shadow-md md:w-auto"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <div className="rounded-[1.6rem] border border-neutral-200 bg-neutral-100 p-4">
            <div className="flex h-full min-h-[240px] items-center justify-center rounded-[1.2rem] bg-neutral-200 text-sm text-neutral-600">
              Mapa aqui (opcional)
            </div>
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}