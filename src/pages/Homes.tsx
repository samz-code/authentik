import { Layout } from "@/components/layout/Layout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { MessageCircle, ArrowRight, ExternalLink, Home, Check, Star, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "fa-paint-brush",
    title: "Furnishing & Styling",
    description: "Professional interior design that maximizes appeal and bookings"
  },
  {
    icon: "fa-award",
    title: "Superhost Listing",
    description: "Your property listed on our verified Airbnb Superhost account"
  },
  {
    icon: "fa-comments",
    title: "Guest Communication",
    description: "24/7 professional responses and concierge services"
  },
  {
    icon: "fa-broom",
    title: "Housekeeping & Maintenance",
    description: "Consistent quality between every guest stay"
  },
  {
    icon: "fa-chart-line",
    title: "Ongoing Optimization",
    description: "Dynamic pricing and performance tracking for maximum ROI"
  }
];

const outcomes = [
  {
    icon: Shield,
    title: "Well-Maintained Properties",
    description: "Professional standards maintained consistently"
  },
  {
    icon: Star,
    title: "Strong Guest Experience",
    description: "5-star reviews and repeat bookings"
  },
  {
    icon: TrendingUp,
    title: "Increased Visibility",
    description: "Optimized listings that rank higher"
  },
  {
    icon: Home,
    title: "Sustainable ROI",
    description: "Predictable income with transparent reporting"
  }
];

const pricingFactors = [
  "Property type and size",
  "Number of units managed",
  "Location and seasonality",
  "Level of owner involvement",
  "Required services and amenities"
];

const Homes = () => {
  return (
    <Layout>
      <div className="pb-0">
        <PageIntro
          title="Authentik Homes"
          subtitle="Premium property hosting and management for owners who want peace of mind, care, and consistent income."
        />
      </div>

      {/* Hero Stats Bar */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: "fa-home", value: "50+", label: "Properties Managed" },
              { icon: "fa-star", value: "4.9", label: "Average Rating" },
              { icon: "fa-users", value: "500+", label: "Happy Guests" },
              { icon: "fa-percentage", value: "95%", label: "Occupancy Rate" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#DADFDB]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-12 h-12 bg-[#3A9387]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`fas ${stat.icon} text-xl text-[#3A9387]`}></i>
                </div>
                <p className="text-3xl font-bold text-[#194C4C] mb-1">{stat.value}</p>
                <p className="text-sm text-[#194C4C]/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Gap Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards' }}>
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop" 
                  alt="Zanzibar property management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#194C4C]/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-serif text-2xl italic">"Premium hosting, exceptional care"</p>
                </div>
              </div>

              {/* Right: Content */}
              <div style={{ opacity: 0, animation: 'fadeInUp 0.6s 0.2s ease-out forwards' }}>
                <div className="inline-block mb-4">
                  <span className="text-xs font-bold tracking-wider text-[#F79120] bg-[#F79120]/10 px-4 py-2 rounded-full uppercase">
                    The Gap
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6">
                  Properties Are Listed — But Not Positioned
                </h2>
                <div className="space-y-4 text-lg text-[#194C4C]/80 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <i className="fas fa-times-circle text-red-500 mt-1 flex-shrink-0"></i>
                    <span>Care is inconsistent across guest stays</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <i className="fas fa-times-circle text-red-500 mt-1 flex-shrink-0"></i>
                    <span>Income is unpredictable and seasonal</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <i className="fas fa-times-circle text-red-500 mt-1 flex-shrink-0"></i>
                    <span>Owners struggle with operations and guest relations</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <i className="fas fa-times-circle text-red-500 mt-1 flex-shrink-0"></i>
                    <span>Properties don't reach their full revenue potential</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Approach Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-wider text-[#3A9387] bg-[#3A9387]/10 px-4 py-2 rounded-full uppercase">
                Our Approach
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6">
              We Manage Properties as Businesses, Not Side Projects
            </h2>
            <p className="text-lg md:text-xl text-[#194C4C]/70">
              Every detail matters. Every guest interaction counts. Every property deserves professional care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#3A9387]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3A9387] to-[#194C4C] rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <i className={`fas ${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#194C4C] mb-3 group-hover:text-[#3A9387] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#194C4C]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#F79120] to-[#E17C47] rounded-2xl p-8 text-white shadow-xl flex flex-col justify-center items-center text-center transform hover:scale-105 transition-all duration-300">
              <i className="fas fa-plus-circle text-5xl mb-4 opacity-90"></i>
              <h3 className="font-serif text-xl font-semibold mb-3">
                Custom Solutions
              </h3>
              <p className="text-white/90 mb-6 text-sm">
                Need something specific? We tailor our services to your property's unique needs.
              </p>
              <a
                href="https://wa.me/255674593918"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#F79120] font-semibold px-6 py-3 rounded-full hover:bg-[#DADFDB] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Needs</span>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Visual Showcase */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=400&fit=crop" 
                alt="Luxury Zanzibar property interior"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#194C4C]/80 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-serif text-2xl mb-2">Professional Interiors</p>
                  <p className="text-white/80 text-sm">Designed for maximum appeal</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop" 
                alt="Zanzibar beachfront property"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#194C4C]/80 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-serif text-2xl mb-2">Prime Locations</p>
                  <p className="text-white/80 text-sm">Beachfront to city center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Outcome Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-wider text-[#F79120] bg-[#F79120]/10 px-4 py-2 rounded-full uppercase">
                The Outcome
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6">
              Peace of Mind & Consistent Returns
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#3A9387]"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="w-16 h-16 bg-[#DADFDB] rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#3A9387]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#194C4C] mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-[#194C4C]/70">
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#DADFDB]">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <span className="text-xs font-bold tracking-wider text-[#3A9387] bg-[#3A9387]/10 px-4 py-2 rounded-full uppercase">
                    Pricing
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#194C4C] mb-4">
                  Commission-Based Management
                </h2>
                <p className="text-lg text-[#194C4C]/70">
                  No upfront fees. We succeed when you succeed.
                </p>
              </div>

              <div className="bg-[#DADFDB]/50 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-base md:text-lg text-[#194C4C]/80 mb-6">
                  Our commission structure is customized based on your specific property and needs:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pricingFactors.map((factor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#3A9387] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#194C4C]/80">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-[#194C4C] mb-6">
                  Let's discuss your property and create a custom plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/255674593918"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#3A9387] hover:bg-[#194C4C] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Schedule a Call
                  </a>
                  <Link
                    to="/register-property"
                    className="inline-flex items-center justify-center gap-3 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Register Your Property
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Partners */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#194C4C] mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-lg text-[#194C4C]/70">
                We collaborate with industry leaders to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://www.airbnb.com/p/kawirahosting"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#3A9387] transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[#DADFDB] rounded-xl flex items-center justify-center">
                        <i className="fas fa-award text-2xl text-[#3A9387]"></i>
                      </div>
                      <div>
                        <p className="font-serif text-xl font-semibold text-[#194C4C] group-hover:text-[#3A9387] transition-colors">
                          Airbnb Superhost
                        </p>
                        <p className="text-sm text-[#194C4C]/60">
                          Verified Excellence
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#194C4C]/70">
                      Your property listed on our top-rated Superhost account with proven track record and stellar reviews.
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#194C4C]/40 group-hover:text-[#3A9387] transition-colors flex-shrink-0" />
                </div>
              </a>

              <a
                href="https://dalaber.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#3A9387] transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[#DADFDB] rounded-xl flex items-center justify-center">
                        <i className="fas fa-couch text-2xl text-[#3A9387]"></i>
                      </div>
                      <div>
                        <p className="font-serif text-xl font-semibold text-[#194C4C] group-hover:text-[#3A9387] transition-colors">
                          Dalaber
                        </p>
                        <p className="text-sm text-[#194C4C]/60">
                          Premium Furnishings
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#194C4C]/70">
                      Our exclusive furnishing partner providing quality furniture and design consultation for your property.
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#194C4C]/40 group-hover:text-[#3A9387] transition-colors flex-shrink-0" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

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
      `}</style>
    </Layout>
  );
};

export default Homes;