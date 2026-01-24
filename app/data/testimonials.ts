export type Locale = "en" | "id";

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  date: string;
  time: string;
  avatar: string;
};

export type TestimonialStat = {
  label: string;
  value: string;
};

export function getTestimonials(locale: Locale): Testimonial[] {
  const t = (en: string, id: string) => (locale === "id" ? id : en);

  return [
    {
      name: "Sarah Jonas",
      role: t("Product Designer", "Desainer Produk"),
      text: t(
        "Empower your product team to make better decisions and drive innovation with advanced analytics platforms.",
        "Membantu tim bekerja lebih efektif melalui proses yang lebih rapi, cepat, dan terstruktur."
      ),
      date: t("Jan 17, 2024", "17 Jan 2024"),
      time: "9:00 AM",
      avatar: "/avatars/a.jpg",
    },
    {
      name: "Michael Lee",
      role: t("Law Consultant", "Konsultan Hukum"),
      text: t(
        "A reliable tool that improves our workflow and supports complex legal documentation processes.",
        "Layanannya terpercaya, proses jelas, dan sangat membantu untuk kebutuhan dokumen hukum yang kompleks."
      ),
      date: t("Apr 12, 2024", "12 Apr 2024"),
      time: "3:45 PM",
      avatar: "/avatars/b.jpg",
    },
    {
      name: "Emily Clarke",
      role: t("Senior Advisor", "Penasihat Senior"),
      text: t(
        "Easy to use, beautifully designed, and extremely helpful for our daily operations.",
        "Pelayanan ramah, rapi, dan sangat membantu kebutuhan dokumen kami sehari-hari."
      ),
      date: t("Aug 5, 2024", "5 Agu 2024"),
      time: "1:20 PM",
      avatar: "/avatars/c.jpg",
    },
    {
      name: "Daniel Scott",
      role: t("Notarial Client", "Klien Notaris"),
      text: t(
        "Professional, accurate, and efficient. It saves us hours every week.",
        "Profesional, teliti, dan efisien. Proses jadi lebih cepat dan tidak membingungkan."
      ),
      date: t("Dec 2, 2024", "2 Des 2024"),
      time: "10:30 AM",
      avatar: "/avatars/d.jpg",
    },
  ];
}

export function getTestimonialStats(locale: Locale): TestimonialStat[] {
  const t = (en: string, id: string) => (locale === "id" ? id : en);

  return [
    { label: t("Clients served", "Klien yang dilayani"), value: "10k+" },
    { label: t("Client satisfaction", "Kepuasan klien"), value: "97%" },
    { label: t("Documents completed", "Dokumen terselesaikan"), value: "22k+" },
  ];
}
