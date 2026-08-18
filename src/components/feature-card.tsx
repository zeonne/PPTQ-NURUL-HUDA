import { getIcon } from "@/lib/icons";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = getIcon(icon);
  return (
    <article className="surface-card group h-full p-7">
      <span
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
      >
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
