"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pressReleases = [
  {
    date: "March 10, 2025",
    title: "Klock Aviation Partners with Major Mining Corporation",
    description:
      "Klock Aviation announces strategic partnership to provide air charter services to mining sites across Africa.",
  },
  {
    date: "February 15, 2025",
    title: "Klock Aviation Achieves IS-BAO Stage 2 Certification",
    description:
      "Our commitment to safety has been recognized with this prestigious international certification.",
  },
  {
    date: "January 28, 2025",
    title: "Klock Aviation Completes Acquisition of Regional Charter Service",
    description:
      "Strategic acquisition extends Klock Aviation presence in East African market.",
  },
];

const certifications = [
  { id: 1, label: "CERT 1" },
  { id: 2, label: "CERT 2" },
  { id: 3, label: "CERT 3" },
  { id: 4, label: "CERT 4" },
  { id: 5, label: "CERT 5" },
];

export function CertificationsSection() {
  return (
    <section className="w-full py-16 px-4 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <h2
            className="text-[#091d42] text-4xl md:text-5xl text-center font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Press Releases &amp; Industry Certifications
          </h2>
        </div>

        {/* Press Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pressReleases.map((release, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="flex flex-col gap-3 p-6">
                <time className="text-gray-500 text-xs">
                  {release.date}
                </time>

                <h3
                  className="text-[#091d42] text-xl leading-7 font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {release.title}
                </h3>

                <p className="text-gray-600 text-base leading-6">
                  {release.description}
                </p>

                <a
                  href="#"
                  className="text-[#091d42] text-base hover:text-[#0a2558] transition-colors"
                >
                  {"Read Full Release \u2192"}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-col items-center gap-8">
          <h3
            className="text-[#091d42] text-2xl text-center font-bold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our Industry Certifications
          </h3>

          <Card className="w-full bg-white rounded-lg shadow-md">
            <CardContent className="flex items-center justify-center gap-8 md:gap-16 lg:gap-24 px-8 py-8 flex-wrap">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center justify-center p-4"
                >
                  <Badge
                    variant="secondary"
                    className="flex w-20 h-20 items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    <span className="text-[#091d42] text-base font-bold">
                      {cert.label}
                    </span>
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
