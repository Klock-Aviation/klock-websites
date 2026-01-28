"use client";

import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Begin with a detailed discussion of your aviation needs and objectives.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Our experts create a tailored plan aligned with your goals and requirements.",
  },
  {
    number: "03",
    title: "Market Analysis",
    description:
      "Comprehensive research and analysis of current market opportunities.",
  },
  {
    number: "04",
    title: "Solution Presentation",
    description:
      "Review detailed proposals and recommendations for your consideration.",
  },
  {
    number: "05",
    title: "Implementation",
    description:
      "Execute the agreed strategy with our full support and expertise.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "Continued assistance and advisory services throughout our partnership.",
  },
];

export function ProcessSection() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-20">
          <h2
            className="text-[#003087] text-4xl md:text-5xl text-center"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
          >
            Our Process
          </h2>

          <div className="w-24 h-1 bg-[#FFC61B]" />

          <p
            className="text-slate-500 text-lg md:text-xl text-center max-w-3xl leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500 }}
          >
            A streamlined approach to delivering exceptional aircraft finance and consulting services that ensures your aviation goals are met effectively
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {processSteps.map((step) => (
            <Card
              key={step.number}
              className="relative pt-10 shadow-xl border-0 rounded-xl"
            >
              {/* Number Badge */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-r from-[#FFD700] to-[#FACC15] shadow-lg">
                <span
                  className="text-[#0A2463] text-2xl"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  {step.number}
                </span>
              </div>

              <CardContent className="flex flex-col items-center gap-4 p-8 pt-6">
                <h3
                  className="text-[#003087] text-xl md:text-2xl text-center"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-slate-500 text-base text-center leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}