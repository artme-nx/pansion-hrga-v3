"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Upit za smještaj — ${name || "gost"}`);
    const body = encodeURIComponent(
      `Ime: ${name}\nŽeljeni termin: ${dates}\nBroj gostiju: ${guests}\n\nPoruka:\n${message}`
    );
    window.location.href = `mailto:info@hrga.net?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-ui text-xs uppercase tracking-[0.12em] text-paper-100/70">Ime i prezime</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-paper-100/25 bg-paper-100/10 px-4 py-3 font-body text-paper-100 placeholder:text-paper-100/40 focus:border-gold focus:outline-none"
            placeholder="Vaše ime"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-ui text-xs uppercase tracking-[0.12em] text-paper-100/70">Broj gostiju</span>
          <input
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="rounded-xl border border-paper-100/25 bg-paper-100/10 px-4 py-3 font-body text-paper-100 placeholder:text-paper-100/40 focus:border-gold focus:outline-none"
            placeholder="npr. 2 odrasla"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-ui text-xs uppercase tracking-[0.12em] text-paper-100/70">Željeni termin</span>
        <input
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="rounded-xl border border-paper-100/25 bg-paper-100/10 px-4 py-3 font-body text-paper-100 placeholder:text-paper-100/40 focus:border-gold focus:outline-none"
          placeholder="npr. 12.–19. kolovoza"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="font-ui text-xs uppercase tracking-[0.12em] text-paper-100/70">Poruka</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="rounded-xl border border-paper-100/25 bg-paper-100/10 px-4 py-3 font-body text-paper-100 placeholder:text-paper-100/40 focus:border-gold focus:outline-none"
          placeholder="Recite nam nešto više o vašem putovanju..."
        />
      </label>

      <button
        type="submit"
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-ui text-sm font-semibold text-ink transition-colors hover:brightness-95"
      >
        <Send className="size-4" /> Pošaljite upit e-poštom
      </button>
      <p className="text-center font-ui text-xs text-paper-100/50">
        Otvara vašu e-mail aplikaciju s već popunjenom porukom prema info@hrga.net
      </p>
    </form>
  );
}
