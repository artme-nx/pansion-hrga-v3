import { Phone, Smartphone, Mail, MapPin } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";

export function HostNoteSection() {
  return (
    <section id="poruka" className="relative bg-terracotta-deep py-20 text-paper-100 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="font-hand text-2xl text-gold">Riječ domaćina</p>
          <div className="note-tilt paper-card mt-4 max-w-xl rounded-3xl px-7 py-8 text-ink sm:px-9 sm:py-10">
            <p className="font-hand text-2xl leading-snug sm:text-3xl">
              Kod nas nema šaltera koji radi od–do. Ako vam nešto zatreba —
              raniji doručak, savjet gdje dobro pojesti, ili samo netko da
              pokaže put do plaže — mi smo tu, uglavnom u blizini kuće.
            </p>
            <p className="mt-5 font-hand text-2xl leading-snug sm:text-3xl">
              Gosti nam često kažu da smo im bili &bdquo;pri ruci kad god
              zatreba&ldquo; — a pokoji put i ponesu smokve iz vrta za put
              kući. To nam je uvijek bio najdraži kompliment.
            </p>
            <p className="mt-6 font-ui text-sm uppercase tracking-[0.15em] text-muted-foreground">
              — Vaši domaćini, obitelj Hrga
            </p>
          </div>

          <div className="mt-10 space-y-4 font-body">
            <a href="tel:+38522442958" className="flex items-center gap-3 hover:text-gold">
              <Phone className="size-5" strokeWidth={1.75} /> +385 22 442 958
            </a>
            <a href="tel:+38598392275" className="flex items-center gap-3 hover:text-gold">
              <Smartphone className="size-5" strokeWidth={1.75} /> +385 98 392 275 (mobitel)
            </a>
            <a href="mailto:info@hrga.net" className="flex items-center gap-3 hover:text-gold">
              <Mail className="size-5" strokeWidth={1.75} /> info@hrga.net
            </a>
            <p className="flex items-center gap-3 text-paper-100/85">
              <MapPin className="size-5 shrink-0" strokeWidth={1.75} /> Stanka
              Mićina 24, 22211 Vodice, Hrvatska
            </p>
          </div>
        </div>

        <div id="kontakt" className="scroll-mt-24">
          <h2 className="text-balance font-hand text-4xl leading-[0.95] sm:text-5xl">
            Pošaljite nam upit
          </h2>
          <p className="mt-4 font-body text-paper-100/85">
            Javite nam termin i broj gostiju — odgovaramo osobno, obično isti
            dan.
          </p>
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
