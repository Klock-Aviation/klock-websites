"use client";

import { Phone, Mail, Users } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function GetInTouchSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[#091D42] text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            We offer multiple ways to connect with our team of aviation experts. Choose the one that is most convenient for you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Call Us */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#091D42] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#091D42]" />
            </div>
            <h3
              className="text-[#091D42] text-xl font-semibold mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Call Us
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Speak directly with our aviation specialists
            </p>
            <a
              href="tel:+254725332222"
              className="text-[#091D42] font-medium hover:text-[#FFB81C] transition-colors"
            >
              +254 725 332 222
            </a>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#091D42] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#091D42]" />
            </div>
            <h3
              className="text-[#091D42] text-xl font-semibold mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Email Us
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Send us your inquiry and we will respond promptly
            </p>
            <a
              href="mailto:info@klockaviation.com"
              className="text-[#091D42] font-medium hover:text-[#FFB81C] transition-colors"
            >
              info@klockaviation.com
            </a>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#091D42] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#091D42]" />
            </div>
            <h3
              className="text-[#091D42] text-xl font-semibold mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Connect
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Follow us on social media for updates
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/klockaviation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#091D42] hover:text-white text-[#091D42] transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/klockaviation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#091D42] hover:text-white text-[#091D42] transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/klockaviation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-[#091D42] hover:text-white text-[#091D42] transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}