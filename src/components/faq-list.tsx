import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/types";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {items.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`item-${index}`}
          className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)] last:mb-0"
        >
          <AccordionTrigger className="text-left font-display text-base font-medium hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
