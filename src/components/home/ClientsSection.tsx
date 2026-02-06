const clients = [
  { 
    name: "Nike", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },
  { 
    name: "Adidas", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
  },
  { 
    name: "Apple", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  { 
    name: "Google", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  { 
    name: "Microsoft", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  { 
    name: "Coca-Cola", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
  },
  { 
    name: "Samsung", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
  },
  { 
    name: "IBM", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  { 
    name: "Intel", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg"
  },
  { 
    name: "Sony", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg"
  },
  { 
    name: "Toyota", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg"
  },
  { 
    name: "BMW", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
  },
  { 
    name: "Mercedes-Benz", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"
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
          width: 180px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0.6;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .logo-item:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.1);
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
            width: 140px;
            height: 60px;
            padding: 15px;
          }

          .logo-scroll-track {
            animation-duration: 30s;
          }
        }

        @media (max-width: 480px) {
          .logo-item {
            width: 120px;
            height: 50px;
            padding: 10px;
          }

          .logo-scroll-track {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
}