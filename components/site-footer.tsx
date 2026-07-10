export function SiteFooter() {
  return (
    <footer className="bg-ink py-10 text-paper-100/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-hand text-2xl text-paper-100">Pansion HRGA — Vodice</p>
        <p className="font-ui text-xs">
          Stanka Mićina 24, 22211 Vodice · +385 22 442 958 · info@hrga.net
        </p>
        <p className="font-ui text-xs text-paper-100/50">
          © {new Date().getFullYear()} Pansion HRGA. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
