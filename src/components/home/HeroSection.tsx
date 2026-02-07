import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-zanzibar.jpg";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Rotating phrases for the dynamic part
  const rotatingPhrases = [
    "expressed.",
    "in motion.",
    "visualized.",
    "actualized.",
    "elevated.",
    "refined.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Authentik Hero"
          className="w-full h-full object-cover"
        />
        {/* Brand teal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#194C4C]/95 via-[#194C4C]/90 to-[#3A9387]/85"></div>
        
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #F79120 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24 md:py-32">
        <div className="max-w-5xl">
          {/* Animated accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#F79120] to-[#E17C47] mb-8 animate-pulse"></div>

          {/* Headline with creative layout and rotating content */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-8">
            Authenticity,
            <br />
            <span className="relative inline-block mt-2">
              {/* Rotating text with fade animation */}
              <span 
                key={currentIndex}
                className="text-[#F79120] italic inline-block animate-fadeInUp"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                }}
              >
                {rotatingPhrases[currentIndex]}
              </span>
              
              {/* Decorative animated underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2, 100 2, 150 6C200 10, 250 8, 298 4"
                  stroke="#F79120"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw"
                />
              </svg>
            </span>
          </h1>

          {/* Sub-headline in a card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-10 border border-white/20 max-w-3xl transform hover:scale-[1.02] transition-transform duration-300">
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
              We help brands, creators, and property owners express who they
              truly are — visually, verbally, and strategically — and turn that
              clarity into alignment, growth, and ROI.
            </p>
          </div>

          {/* CTAs with improved spacing */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto group"
              >
                Work With Authentik
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </Button>
            </Link>
            <Link to="/properties">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#194C4C] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Manage My Property
              </Button>
            </Link>
            <a
              href="https://wa.me/255777296026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#25D366] bg-[#25D366]/20 text-white hover:bg-[#25D366] hover:border-[#25D366] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp mr-2 text-xl"></i>
                WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Trust Indicators with cards */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            {[
              { label: "Trusted by", value: "100+ Clients" },
              { label: "Rating", value: "5-Star Rated" },
              { label: "Impact", value: "Global Reach" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center transform hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out forwards',
                }}
              >
                <p className="text-white/70 text-xs mb-1">{stat.label}</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#F79120]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#3A9387]/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="text-white/80 text-sm flex flex-col items-center gap-2">
          <span className="text-xs tracking-wider">Scroll</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes draw {
          from {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
          }
          to {
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
          }
        }

        .animate-draw {
          animation: draw 1s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}