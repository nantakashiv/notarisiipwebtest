// app/data/publications.ts

export const PUBLICATION_IDS = ["apostille-law", "corp-docs"] as const;

export type PublicationId = (typeof PUBLICATION_IDS)[number];

export type Publication = {
  id: PublicationId;
  title: string;
  date: string;
  read: string;
  image: string;
  desc: string;
  url: string;
};

export const publications: Publication[] = [
  {
    id: "apostille-law",
    title: "The Role of Apostille in Indonesian Civil Law",
    date: "2022",
    read: "Journal Article",
    image: "/articles/5.jpg",
    desc:
      "An academic discussion on the role and legal implications of apostille within Indonesian civil law.",
    url: "https://example.com/apostille-law",
  },

  {
    id: "corp-docs",
    title: "Legal Authentication of Corporate Documents",
    date: "2021",
    read: "Journal Article",
    image: "/articles/6.jpg",
    desc:
      "A scholarly analysis of document authentication practices in corporate legal processes.",
    url: "https://example.com/corporate-docs",
  },
];
