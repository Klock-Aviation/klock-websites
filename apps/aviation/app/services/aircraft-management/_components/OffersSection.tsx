"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users } from "lucide-react";

const offerCards = [
  {
    icon: Gift,
    title: "Management Fee Discount",
    description:
      "Sign up for our aircraft management services today and enjoy 10% off your first year's management fees.",
    badge: "10% OFF",
    badgeSubtext: "Valid for new clients only. Terms and conditions apply.",
  },
  {
    icon: Users,
    title: "Referral Program",
    description:
      "Refer a new client to Klock Aviation and both you and your referral will receive exclusive benefits.",
    benefits: [
      "One month of free management for you",
      "5% discount for your referral",
      "Unlimited referrals accepted",
    ],
  },
];

export function OffersSection() {
  return (
    <section 
      className="flex flex-col items-center px-4 py-16 w-full bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(0deg, rgba(0,17,58,0.75) 0%, rgba(0,17,58,0.75) 100%), url('/images/offers-background.jpg')` 
      }}
    >
      <Card 
        className="flex flex-col max-w-screen-lg w-full items-start gap-4 p-8 md:p-12 rounded-2xl overflow-hidden border shadow-lg backdrop-blur-sm"
        style={{ 
          borderColor: 'rgba(239, 191, 4, 0.3)',
          background: 'linear-gradient(161deg, rgba(239,191,4,0.15) 0%, rgba(0,0,0,0) 100%)'
        }}
      >
        <CardContent className="p-0 w-full">
          {/* Header */}
          <div className="flex items-center gap-3 w-full">
            <Gift className="w-6 h-6" style={{ color: '#EFBF04' }} />
            <h2 
              className="text-xl leading-7"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#EFBF04', fontWeight: 600 }}
            >
              Exclusive Offer for New Clients
            </h2>
          </div>

          <h3 
            className="w-full text-3xl md:text-4xl leading-10 mt-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF', fontWeight: 700 }}
          >
            Sign Up Today and Save 10% on Your First Year
          </h3>

          {/* Offer Cards - grid keeps them side by side on tablet+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 w-full">
            {offerCards.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 p-6 rounded-xl backdrop-blur-sm h-full"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(239, 191, 4, 0.2)', border: '1px solid rgba(239, 191, 4, 0.5)' }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: '#EFBF04' }} />
                    </div>
                    <h4 
                      className="text-lg leading-7"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#FFFFFF', fontWeight: 600 }}
                    >
                      {offer.title}
                    </h4>
                  </div>

                  <p 
                    className="w-full text-base leading-6"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.8)' }}
                  >
                    {offer.description}
                  </p>

                  {offer.badge ? (
                    <div 
                      className="flex flex-col items-start gap-1 p-4 w-full rounded-lg mt-auto"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <span 
                        className="w-full text-2xl leading-8"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#EFBF04', fontWeight: 700 }}
                      >
                        {offer.badge}
                      </span>
                      <span 
                        className="w-full text-xs leading-5"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.6)' }}
                      >
                        {offer.badgeSubtext}
                      </span>
                    </div>
                  ) : (
                    <ul className="flex flex-col items-start gap-2 w-full">
                      {offer.benefits?.map((benefit, idx) => (
                        <li key={idx} className="flex items-start w-full">
                          <span 
                            className="pr-2 text-base leading-6"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#EFBF04' }}
                          >
                            •
                          </span>
                          <span 
                            className="text-sm leading-6"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.8)' }}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="flex flex-col items-center gap-6 pt-6 w-full">
            <p 
              className="w-full max-w-2xl text-lg text-center leading-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.8)' }}
            >
              Limited-time offer. Take advantage of these exclusive savings
              while revolutionizing your aircraft ownership experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <Button 
                className="h-11 px-6 py-2 rounded-md transition-colors hover:opacity-90"
                style={{ backgroundColor: '#EFBF04', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Claim Your Discount
              </Button>

              <Button
                className="h-11 px-6 py-2 rounded-md transition-colors hover:bg-gray-100"
                style={{ backgroundColor: '#FFFFFF', color: '#00113A', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}