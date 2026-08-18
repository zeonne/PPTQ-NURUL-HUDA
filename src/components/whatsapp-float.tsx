import { MessageCircle } from "lucide-react";
import { school } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${school.whatsapp}?text=${encodeURIComponent(
        "Assalamu'alaikum, saya ingin bertanya mengenai pendaftaran santri baru PPTQ Nurul Huda.",
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi kami melalui WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-1"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
