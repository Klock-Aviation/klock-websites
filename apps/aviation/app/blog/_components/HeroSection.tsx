"use client";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/blog-hero.mp4" type="video/mp4" />
        {/* Fallback if video fails */}
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto px-4 py-24 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-bold"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Blog &amp; Public Relations
        </h1>

        <p
          className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Stay informed with the latest aviation insights, industry news, press releases, and updates from Klock Aviation.
        </p>
      </div>
    </section>
  );
}