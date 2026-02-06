import { Layout } from "@/components/layout/Layout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ExternalLink, Home, Star, TrendingUp, Shield, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    step: "01",
    icon: "fa-handshake",
    title: "Initial Consultation",
    description:
      "We visit your property, understand your goals, and assess its potential for short-term rental success.",
  },
  {
    step: "02",
    icon: "fa-tools",
    title: "Property Setup",
    description:
      "From photography to furnishing consultation, we prepare your property to meet international hospitality standards.",
  },
  {
    step: "03",
    icon: "fa-chart-bar",
    title: "Listing & Optimization",
    description:
      "We create and optimize your listings across platforms, with compelling descriptions and strategic pricing.",
  },
  {
    step: "04",
    icon: "fa-concierge-bell",
    title: "Guest Management",
    description:
      "24/7 guest communication, check-in coordination, and concierge services for 5-star reviews.",
  },
  {
    step: "05",
    icon: "fa-broom",
    title: "Operations & Maintenance",
    description:
      "Cleaning, maintenance, restocking, and quality control between every guest stay.",
  },
  {
    step: "06",
    icon: "fa-dollar-sign",
    title: "Revenue Optimization",
    description:
      "Dynamic pricing, seasonal adjustments, and performance reporting to maximize your returns.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Fully Managed",
    description: "We handle everything from A to Z, so you can be hands-off"
  },
  {
    icon: Star,
    title: "5-Star Reviews",
    description: "Our attention to detail consistently earns top ratings"
  },
  {
    icon: TrendingUp,
    title: "Maximized Revenue",
    description: "Strategic pricing and optimization for highest returns"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock guest communication and issue resolution"
  }
];

const Homes = () => {
  return (
    <Layout>
      <PageIntro
        title="Authentik Homes"
        subtitle="Full-service property management for Zanzibar homes. From guest experience to revenue optimization — we handle everything so you don't have to."
      />

      {/* Benefits Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#3A9387]"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="w-12 h-12 bg-[#DADFDB] rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#3A9387] group-hover:text-[#E17C47] transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#194C4C] mb-2 group-hover:text-[#3A9387] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#194C4C]/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Overview */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#3A9387] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 sm:w-7 sm:h-7 text-[#F79120]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                    Turn Your Property Into a Source of Income
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    <p>
                      Zanzibar's short-term rental market is booming. But success isn't
                      just about listing your property — it's about the experience you
                      deliver, the reviews you earn, and the operations behind the scenes.
                    </p>
                    <p>
                      Authentik Homes provides end-to-end property management with the
                      same attention to detail we bring to brand work: clarity,
                      consistency, and genuine care for quality.
                    </p>
                    <p>
                      We work with a select number of properties to ensure every guest
                      experience reflects the calm luxury that Zanzibar deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-4 sm:mb-6">
              Our Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#194C4C]/70">
              From onboarding to ongoing management, here's how we work.
            </p>
            <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#3A9387] relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Large Step Number Background */}
                <span className="absolute -top-4 -right-4 text-8xl font-serif text-[#DADFDB] opacity-50 select-none">
                  {step.step}
                </span>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#DADFDB] rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <i className={`fas ${step.icon} text-2xl text-[#3A9387] group-hover:text-[#E17C47] transition-colors duration-300`}></i>
                  </div>

                  {/* Step Number Badge */}
                  <div className="inline-block mb-3">
                    <span className="text-xs font-bold tracking-wider text-[#F79120] bg-[#F79120]/10 px-3 py-1 rounded-full">
                      STEP {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#194C4C] mb-3 group-hover:text-[#3A9387] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#194C4C]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3A9387] to-[#F79120] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Partners */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#194C4C] mb-4">
                Our Partners
              </h2>
              <p className="text-base sm:text-lg text-[#194C4C]/70">
                We collaborate with the best to deliver exceptional experiences.
              </p>
              <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <a
                href="https://www.airbnb.com/p/kawirahosting"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#3A9387] transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#DADFDB] rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-[#3A9387]" />
                      </div>
                      <div>
                        <p className="font-serif text-lg font-semibold text-[#194C4C] group-hover:text-[#3A9387] transition-colors">
                          Airbnb Superhost
                        </p>
                        <p className="text-sm text-[#194C4C]/60">
                          View our properties
                        </p>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#194C4C]/40 group-hover:text-[#3A9387] transition-colors flex-shrink-0" />
                </div>
              </a>

              <a
                href="https://dalaber.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#3A9387] transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#DADFDB] rounded-lg flex items-center justify-center">
                        <i className="fas fa-couch text-xl text-[#3A9387]"></i>
                      </div>
                      <div>
                        <p className="font-serif text-lg font-semibold text-[#194C4C] group-hover:text-[#3A9387] transition-colors">
                          Dalaber
                        </p>
                        <p className="text-sm text-[#194C4C]/60">
                          Our furnishing partner
                        </p>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#194C4C]/40 group-hover:text-[#3A9387] transition-colors flex-shrink-0" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F79120] to-[#E17C47] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full -mr-24 sm:-mr-32 -mt-24 sm:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full -ml-16 sm:-ml-24 -mb-16 sm:-mb-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <Home className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
                Own a Property in Zanzibar?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you maximize its potential and create a steady income stream.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/register-property"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-[#DADFDB] text-[#194C4C] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <span>Register Your Property</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a
                  href="https://wa.me/255674593918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp Homes
                </a>
              </div>
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