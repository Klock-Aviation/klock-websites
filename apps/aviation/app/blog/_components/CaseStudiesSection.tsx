"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    image: "/images/blog-article-mining.png",
    title: "Mining Logistics in Remote African Locations",
    description:
      "Learn how we helped a major mining corporation optimize their air logistics, reducing transit times by 40% and increasing operational efficiency.",
    tags: ["Mining", "Logistics", "Remote Operations"],
  },
  {
    image: "/images/blog-article-medical.jpg",
    title: "Emergency Medical Transport Solutions",
    description:
      "Discover how our air ambulance services provided critical support during a medical emergency in a remote location.",
    tags: ["Medical", "Emergency", "Air Ambulance"],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <h2
            className="text-[#091d42] text-4xl md:text-5xl text-center font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Case Studies &amp; Success Stories
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="flex-1 max-w-xl flex flex-col md:flex-row overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full md:w-2/5 min-h-[200px] md:min-h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <CardContent className="w-full md:w-3/5 flex flex-col gap-3 p-6">
                <h3
                  className="text-[#091d42] text-xl leading-7 font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {study.title}
                </h3>

                <p
                  className="text-gray-600 text-base leading-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {study.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gray-100 text-[#091d42] hover:bg-gray-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-[#091d42] text-base hover:text-[#0a2558] transition-colors pt-2"
                >
                  Read Case Study →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}