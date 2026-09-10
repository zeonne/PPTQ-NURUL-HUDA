import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const topics = [
  "Pendaftaran santri baru Nurul Huda",
  "Program tahfidz di pondok NH",
  "Biaya pendidikan pojdok NH",
  "Kunjungan pondok NH",
  "Lainnya",
];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className="surface-card space-y-5 p-7 hover:translate-y-0 sm:p-9"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") || "");
        const phone = String(formData.get("phone") || "");
        const email = String(formData.get("email") || "");
        const topic = String(formData.get("topic") || "");
        const message = String(formData.get("message") || "");

        const whatsappMessage = `Assalamu'alaikum Admin PPTQ Nurul Huda,

      Nama lengkap: ${name}
      Nomor WhatsApp: ${phone}
      Email: ${email}
      Topik pertanyaan: ${topic}

      Pesan:
      ${message}

      Terima kasihh.`;

        const whatsappUrl = `https://wa.me/6282338832018?text=${encodeURIComponent(
          whatsappMessage,
        )}`;
        //Membuka WA admin
        window.location.href = whatsappUrl;

        //Mengosongi isi form after kirim pesan
        form.reset();
      }}

      // onSubmit={(event) => {
      //   event.preventDefault();
      //   const form = event.currentTarget;
      //   setSubmitting(true);
      //   window.setTimeout(() => {
      //     setSubmitting(false);
      //     form.reset();
      //     toast.success("Pesan terkirim", {
      //       description: "Kami akan menghubungi Anda pada hari kerja berikutnya.",
      //     });
      //   }, 700);
      // }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nama lengkap</Label>
          <Input id="contact-name" name="name" required autoComplete="name" placeholder="Nama Anda" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Nomor WhatsApp</Label>
          <Input
            id="contact-phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="08xxxxxxxxxx"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="nama@email.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-topic">Topik pertanyaan</Label>
        <select
          id="contact-topic"
          name="topic"
          required
          defaultValue={topics[0]}
          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Pesan</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tuliskan pertanyaan Anda di sini"
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        <Send aria-hidden="true" />
        {submitting ? "Mengirim…" : "Kirim Pesan"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Dengan mengirim formulir ini Anda menyetujui panitia menghubungi Anda melalui kontak di atas.
      </p>
    </form>
  );
}
