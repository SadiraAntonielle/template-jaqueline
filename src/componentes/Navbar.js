import Container from "./Container";

const WHATSAPP_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Oi!%20Quero%20agendar%20um%20hor%C3%A1rio.";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <Container className="flex items-center justify-between py-4">
        <a href="#topo" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#C8A96A]" />
          <span className="text-sm font-semibold tracking-wide text-neutral-950">
            Nome Profissional
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
          <a href="#sobre" className="transition hover:text-neutral-950">
            Sobre
          </a>
          <a href="#servicos" className="transition hover:text-neutral-950">
            Serviços
          </a>
          <a href="#contato" className="transition hover:text-neutral-950">
            Contato
          </a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          WhatsApp
        </a>
      </Container>
    </header>
  );
}