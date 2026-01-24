export type EngagementStatus = "in_progress" | "under_review" | "completed";

export interface ClientEngagement {
  company: string;
  services: string[];
  location: {
    address: string;
    mapUrl: string;
  };

  // ✅ bilingual text fields
  descriptionId: string;
  descriptionEn: string;

  projectSummaryId?: string;
  projectSummaryEn?: string;

  projectMetricsId?: string;
  projectMetricsEn?: string;

  setPlanId: string;
  setPlanEn: string;

  status: EngagementStatus;
  image: string;
}

export const clientEngagements: ClientEngagement[] = [
  {
    company: "PT Kalimasodo Jaya Bersama",
    descriptionId:
      "Memberikan layanan kenotariatan dan administrasi pertanahan untuk sertifikasi Hak Guna Bangunan (SHGB) serta pemecahan bidang tanah pada proyek perumahan.",
    descriptionEn:
      "Providing notarial and land administration services for Building Use Rights (HGB/SHGB) certification and land parcel splitting for a residential development project.",
    services: ["Sertifikasi Hak Guna Bangunan (SHGB)", "Pemecahan Bidang Tanah"],
    location: {
      address: "Brebes, Jawa Tengah, Indonesia",
      mapUrl: "https://maps.google.com",
    },
    projectSummaryId:
      "Perumahan MBR Askara Harita (Special Edition) – Desa Pagejugan; Perumahan Askara Harita Street Ultra – Desa Gandasuli",
    projectSummaryEn:
      "Askara Harita MBR Housing (Special Edition) – Pagejugan Village; Askara Harita Street Ultra Housing – Gandasuli Village",
    projectMetricsId: "Total luas lahan 20.953 m² yang dipecah menjadi 148 unit rumah",
    projectMetricsEn: "Total land area of 20,953 m² divided into 148 housing units",
    setPlanId: "Target penyelesaian pada April 2026",
    setPlanEn: "Target completion: April 2026",
    status: "in_progress",
    image: "/images/clients/kalimasodo.jpg",
  },

  {
    company: "CV Sentosa Mandiri",
    services: ["Company Establishment", "Articles of Association Drafting"],
    location: {
      address: "Bandung, Indonesia",
      mapUrl: "https://maps.google.com/?q=Bandung",
    },
    descriptionId:
      "Mendukung pendirian badan usaha baru, termasuk penyusunan struktur legal dan peninjauan kepatuhan dokumen.",
    descriptionEn:
      "Supporting the establishment of a new business entity, including legal structure arrangement and compliance review.",
    setPlanId: "Menunggu persetujuan kementerian",
    setPlanEn: "Pending ministry approval",
    status: "under_review",
    image: "/images/engagements/sentosa-mandiri.jpg",
  },

  {
    company: "PT Harmoni Sejahtera",
    services: ["Contract Legalization"],
    location: {
      address: "Surabaya, Indonesia",
      mapUrl: "https://maps.google.com/?q=Surabaya",
    },
    descriptionId:
      "Legalisasi perjanjian komersial untuk mendukung operasional bisnis lintas wilayah.",
    descriptionEn:
      "Legalization of commercial agreements to support cross-regional business operations.",
    setPlanId: "Selesai pada Juli 2025",
    setPlanEn: "Completed in July 2025",
    status: "completed",
    image: "/images/engagements/harmoni-sejahtera.jpg",
  },
];
