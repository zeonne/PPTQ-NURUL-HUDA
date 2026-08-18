export type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string; description?: string }[];
};

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  benefits: string[];
  activities: string[];
  image: string;
  icon: string;
};

export type Teacher = {
  name: string;
  position: string;
  education: string;
  expertise: string[];
  email?: string;
  instagram?: string;
  linkedin?: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  category: "Prestasi" | "Kegiatan" | "Pengumuman" | "Artikel";
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  readMinutes: number;
};

export type EventItem = {
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  place: string;
};

export type Facility = {
  name: string;
  description: string;
  image: string;
  detail: string;
};

export type GalleryItem = {
  title: string;
  category: "Kegiatan" | "Fasilitas" | "Prestasi" | "Asrama";
  image: string;
  type: "photo" | "video";
  videoUrl?: string;
};

export type Faq = { question: string; answer: string };

export type TimelineEntry = { year: string; title: string; description: string };
