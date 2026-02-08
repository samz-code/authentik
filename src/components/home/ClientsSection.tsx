const clients = [
  { 
    name: "Aruba", 
    logo: "/aruba.png"
  },
  { 
    name: "Kwetu-Kwenu", 
    logo: "/kwetu.png"
  },
  { 
    name: "Reigns Clinic", 
    logo: "/reigns.png"
  },
  { 
    name: "MB Luxury Shoes", 
    logo: "/mb.png"
  },
];

export function ClientsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-[#DADFDB] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-sm md:text-base font-medium text-[#194C4C]/60 uppercase tracking-wider mb-2">
            Trusted By
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#194C4C]">
            Brands That Value Authenticity
          </h2>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling track */}
          <div className="logo-scroll-container">
            <div className="logo-scroll-track">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="logo-item"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="logo-item"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-10 md:mt-12 flex items-center justify-center">
          <div className="w-24 h-1 bg-[#F79120] rounded-full"></div>
        </div>
      </div>

      <style>{`
        .logo-scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .logo-scroll-track {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        .logo-scroll-track:hover {
          animation-play-state: paused;
        }

        .logo-item {
          flex-shrink: 0;
          width: 280px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          opacity: 0.7;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logo-item {
            width: 220px;
            height: 110px;
            padding: 25px;
          }

          .logo-scroll-track {
            animation-duration: 30s;
          }
        }

        @media (max-width: 480px) {
          .logo-item {
            width: 180px;
            height: 90px;
            padding: 20px;
          }

          .logo-scroll-track {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
}