// Aviation Site Color Palette (from Figma - VERIFIED)
// Path: apps/aviation/lib/colors.ts
// NOTE: These colors are DIFFERENT from the roadmap document - Figma is source of truth

export const aviationColors = {
  // Blues
  navy: "#00113A",           // Dark navy - backgrounds, cards, header
  blue: "#003087",           // Heading blue - titles, heading text
  
  // Gold/Yellow
  gold: "#EFBF04",           // Primary gold - buttons, accents, icons
  goldHover: "#D4A904",      // Gold hover state
  goldLight: "#FDF6E3",      // Light gold/cream icon backgrounds
  
  // Grays (from Figma)
  gray: "#4B5563",           // Body text
  grayLight: "#F3F4F6",      // Card borders, light backgrounds
  grayBg: "#F8F9FA",         // Section backgrounds
  
  // Neutrals
  white: "#FFFFFF",          // Card backgrounds
  
  // Text
  textOnDark: "#FFFFFF",
  textOnDarkMuted: "rgba(255, 255, 255, 0.7)",
};

// Tailwind class quick reference:
// bg-[#00113A] - navy backgrounds
// text-[#003087] - heading text  
// text-[#4B5563] - body text (gray)
// bg-[#EFBF04] - gold buttons
// text-[#EFBF04] - gold accents
// border-[#F3F4F6] - card borders
// bg-[#F8F9FA] - section backgrounds