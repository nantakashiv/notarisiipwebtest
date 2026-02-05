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
    company: "PT Sekawan Bayu Perkasa",
  descriptionId:
    "Memberikan layanan kenotariatan dan administrasi pertanahan dalam rangka pembebasan lahan seluas ±300.000 hektar di Desa Ketanggungan, Brebes.",
  descriptionEn:
    "Providing notarial and land administration services for approximately 300,000 hectares of land acquisition in Ketanggungan Village, Brebes.",
  services: [
    "Pembuatan Perjanjian Pengikatan Jual Beli (PPJB)",
    "Pembuatan Kuasa Untuk Menjual (KUM)",
    "Pengurusan Sertifikat Hak Milik (SHM)"
  ],
  location: {
    address: "Desa Ketanggungan, Brebes, Jawa Tengah, Indonesia",
    mapUrl: "https://maps.google.com",
  },
  projectSummaryId:
    "Proyek pembebasan lahan – Desa Ketanggungan, Brebes",
  projectSummaryEn:
    "Land acquisition project – Ketanggungan Village, Brebes",
  projectMetricsId:
    "Total luas pembebasan lahan ±300.000 hektar",
  projectMetricsEn:
    "Total land acquisition area ±300,000 hectares",
  setPlanId:
    "Tahap penyelesaian administrasi dan legalisasi dokumen",
  setPlanEn:
    "Ongoing administrative and legal documentation process",
  status: "in_progress",
  image: "/images/clients/sekawanbayuperkasa.jpg",

  },

  {
    company: "PT Agung Pelita Industirindo",
  descriptionId:
    "Memberikan layanan kenotariatan dan administrasi pertanahan dalam rangka perluasan lahan industri alas sepatu di Desa Klampok.",
  descriptionEn:
    "Providing notarial and land administration services for the expansion of an industrial footwear manufacturing facility in Klampok Village.",
  services: [
    "Pengurusan dan Sertifikasi Hak Guna Bangunan (SHGB)"
  ],
  location: {
    address: "Desa Klampok, Jawa Tengah, Indonesia",
    mapUrl: "https://maps.google.com",
  },
  projectSummaryId:
    "Proyek perluasan lahan industri alas sepatu – Desa Klampok",
  projectSummaryEn:
    "Industrial footwear facility expansion project – Klampok Village",
  projectMetricsId:
    "Perluasan lahan untuk pengembangan kawasan industri",
  projectMetricsEn:
    "Land expansion for industrial area development",
  setPlanId:
    "Tahap proses administrasi dan sertifikasi hak atas tanah",
  setPlanEn:
    "Ongoing land rights certification and administrative process",
  status: "in_progress",
  image: "/images/clients/agungpelita.jpg",
  },
];
