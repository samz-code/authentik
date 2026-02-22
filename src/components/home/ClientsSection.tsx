const clients = [
  { 
    name: "Coldwell Banker Tanzania and Zanzibar", 
    logo: "/coldwell-islemark.png"
  },
  { 
    name: "Coldwell Banker Islemark Realty", 
    logo: "/coldwell-islemark.png"
  },
  { 
    name: "Kwetu Kwenu Chill", 
    logo: "/kwetu.png"
  },
  { 
    name: "MB Luxury Shoes", 
    logo: "/mb.png"
  },
];

const stats = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "4+", label: "Brand Partners" },
  { value: "∞", label: "Trust Built" },
];

export function ClientsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white border-t border-[#DADFDB] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xs md:text-sm font-medium text-[#F79120] uppercase tracking-[0.2em] mb-3">
            Trusted By
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-5">
            Brands That Value Authenticity
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#DADFDB]"></div>
            <div className="w-2 h-2 rounded-full bg-[#F79120]"></div>
            <div className="w-12 h-px bg-[#DADFDB]"></div>
          </div>
        </div>

        {/* Partnership Statement Card */}
        <div className="relative max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="relative bg-[#194C4C] rounded-2xl px-8 py-10 md:px-14 md:py-12 text-center overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#F79120]/40 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#F79120]/40 rounded-br-2xl"></div>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #F79120 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F79120 0%, transparent 40%)`
            }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#F79120]/15 border border-[#F79120]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F79120] animate-pulse"></span>
                <span className="text-[#F79120] text-xs font-semibold uppercase tracking-widest">Our Partners</span>
              </div>

              <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-8">
                These are brands we have been able to deliver{" "}
                <span className="text-[#F79120] font-semibold">100% client satisfaction</span>{" "}
                and build great, lasting partnerships with.
              </p>

              {/* Brand Name List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#F79120]/40 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#F79120]/20 border border-[#F79120]/40 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="#F79120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-white/85 text-sm font-medium">{client.name}</span>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#F79120] font-serif">{stat.value}</div>
                    <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Logo Container */}
        <div className="mb-10">
          <p className="text-center text-xs font-medium text-[#194C4C]/40 uppercase tracking-[0.2em] mb-8">
            Partner Logos
          </p>
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling track */}
            <div className="logo-scroll-container">
              <div className="logo-scroll-track">
                {clients.map((client, index) => (
                  <div key={`first-${index}`} className="logo-item">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {clients.map((client, index) => (
                  <div key={`second-${index}`} className="logo-item">
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
        </div>

        {/* Bottom decorative line */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-16 h-px bg-[#DADFDB]"></div>
          <div className="w-24 h-1 bg-[#F79120] rounded-full"></div>
          <div className="w-16 h-px bg-[#DADFDB]"></div>
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
          opacity: 0.6;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .logo-item {
            width: 220px;
            height: 110px;
            padding: 25px;
          }
          .logo-scroll-track { animation-duration: 30s; }
        }

        @media (max-width: 480px) {
          .logo-item {
            width: 180px;
            height: 90px;
            padding: 20px;
          }
          .logo-scroll-track { animation-duration: 25s; }
        }
      `}</style>
    </section>
  );
}