const WHATSAPP_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Oi!%20Quero%20agendar%20um%20hor%C3%A1rio.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-neutral-950/95 px-5 py-3 text-sm font-semibold text-white shadow-xl ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      aria-label="Falar no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
        fill="currentColor"
      >
        <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.91.5 3.78 1.45 5.42L2 22l4.83-1.58a9.8 9.8 0 005.21 1.5h.01c5.46 0 9.88-4.42 9.88-9.88S17.5 2 12.04 2z" />
      </svg>

      WhatsApp
    </a>
  );
}