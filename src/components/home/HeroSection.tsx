import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-zanzibar.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zanzibar dhow boat on calm ocean"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Brand teal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#194C4C]/95 via-[#194C4C]/90 to-[#3A9387]/80"></div>
        
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Animated accent line */}
          <div className="mb-8 md:mb-10 overflow-hidden">
            <div className="w-16 sm:w-20 h-1 bg-[#F79120] animate-slideRight"></div>
          </div>

          {/* Headline with creative layout */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-10 md:mb-12">
            <span className="block text-white opacity-0 animate-fadeInUp mb-2 sm:mb-3">
              Authenticity,
            </span>
            <span className="inline-block text-[#F79120] italic opacity-0 animate-fadeInUp animation-delay-200 relative">
              expressed.
              {/* Decorative underline */}
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-24 sm:w-32 h-0.5 sm:h-1 bg-[#F79120]/50 animate-expandWidth"></span>
            </span>
          </h1>

          {/* Sub-headline in a card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 mb-10 md:mb-14 opacity-0 animate-fadeInUp animation-delay-400 max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
              We help brands, creators, and property owners express who they truly
              are, visually, verbally, and strategically, and turn that clarity
              into alignment, growth, and ROI.
            </p>
          </div>

          {/* CTAs with improved spacing */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-12 md:mb-16 opacity-0 animate-fadeInUp animation-delay-600 max-w-4xl">
            <Button 
              variant="accent" 
              size="lg" 
              asChild
              className="group bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-[#F79120]/20 border-0 min-h-[56px] sm:min-h-[60px]"
            >
              <Link to="/marketing" className="flex items-center justify-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5">
                <span>Work With Authentik</span>
                <i className="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="group bg-[#3A9387] hover:bg-[#194C4C] text-white border-2 border-[#3A9387] hover:border-[#194C4C] font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A9387]/20 min-h-[56px] sm:min-h-[60px]"
            >
              <Link to="/homes" className="flex items-center justify-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5">
                <i className="fas fa-home text-base"></i>
                <span>Manage My Property</span>
              </Link>
            </Button>
            
            <Button 
              variant="whatsapp" 
              size="lg" 
              asChild
              className="group bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-green-500/20 border-0 min-h-[56px] sm:min-h-[60px]"
            >
              <a
                href="https://wa.me/255777296026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5"
              >
                <i className="fab fa-whatsapp text-lg sm:text-xl"></i>
                <span>WhatsApp Us</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators with cards */}
          <div className="flex flex-wrap gap-3 sm:gap-4 opacity-0 animate-fadeInUp animation-delay-800 max-w-4xl">
            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-check-circle text-[#F79120] text-lg sm:text-xl"></i>
              <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">Trusted by 100+ Clients</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-star text-[#F79120] text-lg sm:text-xl"></i>
              <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-white/20 transition-all duration-300">
              <i className="fas fa-globe text-[#F79120] text-lg sm:text-xl"></i>
              <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">Global Reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#F79120]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 sm:bottom-32 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#3A9387]/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block opacity-0 animate-fadeIn animation-delay-1000">
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-1 h-2 bg-[#F79120] rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @media (min-width: 640px) {
          @keyframes expandWidth {
            from {
              width: 0;
            }
            to {
              width: 8rem;
            }
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideRight {
          animation: slideRight 0.8s ease-out forwards;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out forwards 0.6s;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        /* Ensure buttons don't break on small screens */
        @media (max-width: 640px) {
          .min-h-\[56px\] {
            min-height: 56px;
          }
        }
      `}</style>
    </section>
  );
}