// app/data/legalInsights.ts

export const LEGAL_INSIGHT_IDS = [
  "poa-guide",
  "property-notary",
  "business-contracts",
  "document-auth",
] as const;

export type LegalInsightId = (typeof LEGAL_INSIGHT_IDS)[number];

export type LegalInsight = {
  id: LegalInsightId;
  title: string;
  date: string;
  read: string;
  image: string;
  desc: string;
  slug: string;
  content: string;
};

export const legalInsights: LegalInsight[] = [
  {
    id: "poa-guide",
    title: "Understanding Power of Attorney: Complete Legal Guide",
    date: "Jan 12, 2025",
    read: "5 min read",
    image: "/articles/1.jpg",
    desc:
      "Everything you need to know about drafting, validating, and notarizing Power of Attorney documents.",
    slug: "power-of-attorney-guide",
    content: `
A Power of Attorney (POA) is a legal document that allows
one person to act on behalf of another.

It is commonly used in property transactions, banking,
and corporate matters.
    `,
  },

  {
    id: "property-notary",
    title: "Essential Notary Requirements for Property Transactions",
    date: "Dec 29, 2024",
    read: "7 min read",
    image: "/articles/2.jpg",
    desc:
      "A breakdown of required legal documents for property transfers, ownership certification, and land verification.",
    slug: "notary-requirements-property",
    content: `
Property transactions require accurate documentation and
legally compliant processes.

Notarial involvement ensures identity verification, agreement
clarity, and document validity according to applicable regulations.
    `,
  },

  {
    id: "business-contracts",
    title: "How to Legally Validate Your Business Contracts",
    date: "Nov 18, 2024",
    read: "6 min read",
    image: "/articles/3.jpg",
    desc:
      "Learn the principles of creating strong, enforceable contracts for your company or organization.",
    slug: "validate-business-contracts",
    content: `
A business contract becomes legally effective when it is clearly drafted,
mutually agreed, and properly documented.

Notarial services may support contract authenticity and reduce the risk of disputes.
    `,
  },

  {
    id: "document-auth",
    title: "Document Authentication: Why It Matters More Than You Think",
    date: "Oct 5, 2024",
    read: "4 min read",
    image: "/articles/4.jpg",
    desc:
      "Explore the importance of authentication in professional, academic, and international documentation.",
    slug: "document-authentication-importance",
    content: `
Document authentication helps ensure that signatures, identities,
and official documents are valid and properly recognized.

This process is especially important for cross-border or formal legal usage.
    `,
  },
];
