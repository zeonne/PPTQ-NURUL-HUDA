import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export function StatCard({
  value,
  suffix,
  label,
  description,
}: {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setDisplay(value);
      return;
    }
    let frame = 0;
    const total = 48;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, reduceMotion, value]);

  return (
    <div ref={ref} className="surface-card p-7 text-center">
      <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">
        {display.toLocaleString("id-ID")}
        {suffix ? <span className="text-gold">{suffix}</span> : null}
      </p>
      <p className="mt-3 font-display text-sm font-semibold tracking-wide uppercase">{label}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
