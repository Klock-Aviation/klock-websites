// apps/aviation/app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A192F]">
      <div className="text-center">
        <h1 
          className="text-5xl mb-4"
          style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
        >
          Klock Aviation
        </h1>
        <p 
          className="text-xl"
          style={{ fontFamily: 'Playfair Display, serif', color: '#EFBF04', fontStyle: 'italic' }}
        >
          Where Flight Begins
        </p>
      </div>
    </div>
  );
}