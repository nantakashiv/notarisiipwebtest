"use client";

import Image from "next/image";
import { clientEngagements } from "../../data/engagements";
import { useMessages } from "../shared/I18nProvider";
import { useParams } from "next/navigation";

export default function ClientEngagements() {
  const m = useMessages();
  const { locale } = useParams() as { locale: "id" | "en" };

  const STATUS_MAP = {
    in_progress: {
      label: m.currentEngagements.status.in_progress,
      color: "bg-yellow-400",
    },
    under_review: {
      label: m.currentEngagements.status.under_review,
      color: "bg-blue-400",
    },
    completed: {
      label: m.currentEngagements.status.completed,
      color: "bg-green-500",
    },
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-900">
            {m.currentEngagements.title}
          </h2>
          <p className="text-gray-600 mt-2">{m.currentEngagements.desc}</p>
        </div>

        {/* Cards */}
        <div className="grid gap-6">
          {clientEngagements.map((item, index) => {
            const status = STATUS_MAP[item.status];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                {/* Image */}
                <div className="relative w-full h-40 md:h-full rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.company}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 space-y-4">
                  {/* Title + Status */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.company}
                    </h3>

                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${status.color}`}
                      />
                      {status.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {locale === "id" ? item.descriptionId : item.descriptionEn}
                  </p>

                  {/* Project Information */}
                  {(item.projectSummaryId ||
                    item.projectSummaryEn ||
                    item.projectMetricsId ||
                    item.projectMetricsEn) && (
                    <div className="text-sm text-gray-700 space-y-1">
                      {(locale === "id"
                        ? item.projectSummaryId
                        : item.projectSummaryEn) && (
                        <p>
                          <strong>{m.currentEngagements.labels.projects}</strong>{" "}
                          {locale === "id"
                            ? item.projectSummaryId
                            : item.projectSummaryEn}
                        </p>
                      )}

                      {(locale === "id"
                        ? item.projectMetricsId
                        : item.projectMetricsEn) && (
                        <p className="text-gray-500">
                          {locale === "id"
                            ? item.projectMetricsId
                            : item.projectMetricsEn}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Meta */}
                  <div className="text-sm text-gray-700">
                    <strong>{m.currentEngagements.labels.services}</strong>{" "}
                    {item.services.join(", ")}
                  </div>

                  <div className="text-sm text-gray-700">
                    <strong>{m.currentEngagements.labels.location}</strong>{" "}
                    <a
                      href={item.location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 text-gray-900"
                    >
                      {item.location.address}
                    </a>
                  </div>

                  <div className="text-sm text-gray-500">
                    <strong>{m.currentEngagements.labels.plan}</strong>{" "}
                    {locale === "id" ? item.setPlanId : item.setPlanEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 mt-6">
          {m.currentEngagements.footerNote}
        </p>
      </div>
    </section>
  );
}
