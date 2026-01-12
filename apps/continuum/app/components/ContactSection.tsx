import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 lg:px-12 xl:px-20 bg-[#1B2838]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <p className="text-[#EFBF04] text-sm md:text-base tracking-[4px] uppercase">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Ready to <span className="text-[#EFBF04]">Connect?</span>
          </h2>
          <p className="text-[#8597ad] text-base md:text-lg max-w-2xl">
            Whether you&apos;re looking to charter a flight, explore our intelligence platforms, or discuss sustainability solutions — we&apos;re here to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-[#0D1B2A] rounded-xl p-6 border border-[#243447] text-center">
            <div className="w-12 h-12 rounded-full bg-[rgba(215,180,106,0.15)] flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="w-5 h-5 text-[#EFBF04]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Call Us</h4>
            <a href="tel:+254725332222" className="text-[#8597ad] hover:text-[#EFBF04] transition-colors">
              +254 725 332 222
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#0D1B2A] rounded-xl p-6 border border-[#243447] text-center">
            <div className="w-12 h-12 rounded-full bg-[rgba(215,180,106,0.15)] flex items-center justify-center mx-auto mb-4">
              <MailIcon className="w-5 h-5 text-[#EFBF04]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Email Us</h4>
            <a href="mailto:info@klockaviation.com" className="text-[#8597ad] hover:text-[#EFBF04] transition-colors">
              info@klockaviation.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-[#0D1B2A] rounded-xl p-6 border border-[#243447] text-center">
            <div className="w-12 h-12 rounded-full bg-[rgba(215,180,106,0.15)] flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="w-5 h-5 text-[#EFBF04]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Location</h4>
            <p className="text-[#8597ad]">
              P.O. Box 2200-00606<br />Nairobi, Kenya
            </p>
          </div>

          {/* Hours */}
          <div className="bg-[#0D1B2A] rounded-xl p-6 border border-[#243447] text-center">
            <div className="w-12 h-12 rounded-full bg-[rgba(215,180,106,0.15)] flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-5 h-5 text-[#EFBF04]" />
            </div>
            <h4 className="text-white font-semibold mb-2">Hours</h4>
            <p className="text-[#8597ad]">
              24/7 Flight Support<br />Office: Mon-Fri 8am-6pm
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a 
            href="https://fly.klockaviation.com/book" 
            className="h-14 px-10 bg-[#EFBF04] hover:bg-[#d4a84a] rounded-md flex items-center gap-2 transition-colors"
          >
            <span className="text-[#0D1B2A] text-base font-semibold">Book a Flight</span>
          </a>
          <a 
            href="https://intelligence.klockaviation.com/demo" 
            className="h-14 px-10 border border-white/30 hover:bg-white/10 rounded-md flex items-center gap-2 transition-colors"
          >
            <span className="text-white text-base font-semibold">Request a Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}