import Container from "./Container";

const numero = "5535998364816";
const mensagem = "Olá, gostaria de agendar um atendimento.";
const WHATSAPP_LINK = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E2C7AA]/80 bg-[#FFF9F4]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#FFF9F4]/80">
      <Container className="flex items-center justify-between py-4">
        <a href="#topo" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#C58A47]" />
          <span className="text-sm font-semibold tracking-wide text-[#4B3124]">
            Jaqueline Valéria
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-[#7A5230] md:flex">
          <a href="#sobre" className="transition hover:text-[#4B3124]">
            Sobre
          </a>
          <a href="#servicos" className="transition hover:text-[#4B3124]">
            Atuação
          </a>
          <a href="#contato" className="transition hover:text-[#4B3124]">
            Contato
          </a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#4B3124] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          WhatsApp
        </a>
      </Container>
    </header>
  );
}