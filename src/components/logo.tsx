import { BookOpenText } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "default",
  className,
}: {
  variant?: "default" | "light";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-2xl border",
          variant === "light"
            ? "border-white/30 bg-white/10 text-gold backdrop-blur-md"
            : "border-primary/15 bg-primary text-gold",
        )}
      >
        <img
          src="/favicon.ico"
          alt=""
          className="size-6 object-contain"
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block font-display text-[0.95rem] font-semibold tracking-tight",
            variant === "light" ? "text-white" : "text-primary",
          )}
        >
          PPTQ Nurul Huda Magetan
        </span>
        <span
          className={cn(
            "block text-[0.7rem]",
            variant === "light" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          Tahfizhul Qur'an
        </span>
      </span>
    </span>
  );
}
