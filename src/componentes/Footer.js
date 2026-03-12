import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950">
      <Container className="py-10">
        <div className="flex flex-col gap-2 border-t border-neutral-200 pt-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nome do Profissional</p>
          <p>Site criado por Sadira Oliveira</p>
        </div>
      </Container>
    </footer>
  );
}