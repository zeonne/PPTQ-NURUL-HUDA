import {
  Building2,
  BookOpenText,
  Compass,
  GraduationCap,
  HeartHandshake,
  Languages,
  Lightbulb,
  Moon,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Building2,
  BookOpenText,
  Compass,
  GraduationCap,
  HeartHandshake,
  Languages,
  Lightbulb,
  Moon,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
};

export function getIcon(name: string): LucideIcon {
  return icons[name] ?? Sparkles;
}
