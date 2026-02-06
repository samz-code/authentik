import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Authentic Visuals",
    description:
      "Photography, videography, and visual identity that captures your true essence and communicates it with clarity.",
    icon: "fa-camera-retro",
    href: "/marketing",
    details: {
      subheading: "Capture Your True Essence Through Powerful Imagery",
      features: [
        {
          icon: "fa-image",
          title: "Professional Photography",
          description: "High-quality product, lifestyle, and brand photography that tells your story"
        },
        {
          icon: "fa-video",
          title: "Video Production",
          description: "Compelling video content from concept to final edit that engages your audience"
        },
        {
          icon: "fa-palette",
          title: "Visual Identity Design",
          description: "Cohesive brand visuals including logos, color schemes, and design systems"
        },
        {
          icon: "fa-mobile-alt",
          title: "Social Media Content",
          description: "Eye-catching graphics optimized for Instagram, Facebook, and other platforms"
        }
      ]
    }
  },
  {
    title: "Authentic Voice",
    description:
      "Brand voice, storytelling, and messaging that sounds exactly like you, only sharper, clearer, and more compelling.",
    icon: "fa-bullhorn",
    href: "/marketing",
    details: {
      subheading: "Communicate With Clarity and Impact",
      features: [
        {
          icon: "fa-pen-fancy",
          title: "Brand Storytelling",
          description: "Craft compelling narratives that connect emotionally with your audience"
        },
        {
          icon: "fa-comment-dots",
          title: "Messaging Strategy",
          description: "Clear, consistent messaging across all channels and touchpoints"
        },
        {
          icon: "fa-file-alt",
          title: "Content Writing",
          description: "Blog posts, website copy, and marketing materials that convert"
        },
        {
          icon: "fa-users",
          title: "Brand Voice Development",
          description: "Define and refine your unique tone that resonates with your audience"
        }
      ]
    }
  },
  {
    title: "Strategy & Growth",
    description:
      "Digital marketing, content strategy, and growth frameworks that turn your authenticity into measurable results.",
    icon: "fa-chart-line",
    href: "/marketing",
    details: {
      subheading: "Transform Authenticity Into Measurable ROI",
      features: [
        {
          icon: "fa-bullseye",
          title: "Marketing Strategy",
          description: "Data-driven plans aligned with your business goals and target audience"
        },
        {
          icon: "fa-share-alt",
          title: "Social Media Management",
          description: "Full-service management including content planning, posting, and engagement"
        },
        {
          icon: "fa-chart-bar",
          title: "Analytics & Reporting",
          description: "Track performance metrics and optimize campaigns for better results"
        },
        {
          icon: "fa-rocket",
          title: "Growth Campaigns",
          description: "Targeted campaigns designed to increase reach, engagement, and conversions"
        }
      ]
    }
  },
  {
    title: "Property Hosting & Management",
    description:
      "Full-service property management for Zanzibar homes, from guest experience to revenue optimization.",
    icon: "fa-building",
    href: "/homes",
    details: {
      subheading: "Maximize Your Property Investment with Expert Management",
      features: [
        {
          icon: "fa-key",
          title: "Guest Management",
          description: "Seamless check-in/out, 24/7 support, and exceptional guest experiences"
        },
        {
          icon: "fa-broom",
          title: "Property Maintenance",
          description: "Regular cleaning, repairs, and upkeep to keep your property pristine"
        },
        {
          icon: "fa-calendar-check",
          title: "Booking Optimization",
          description: "Strategic pricing and listing management across multiple platforms"
        },
        {
          icon: "fa-coins",
          title: "Revenue Maximization",
          description: "Dynamic pricing strategies and occupancy optimization for maximum ROI"
        }
      ]
    }
  },
];

export function ServicesOverview() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#DADFDB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#194C4C] mb-6">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#194C4C]/70 leading-relaxed">
            Four expressions of authenticity. One consistent brand promise.
          </p>
          <div className="mt-8 w-24 h-1 bg-[#F79120] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Card Content */}
              <div className="p-8 md:p-10 lg:p-12">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#DADFDB] mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className={`fas ${service.icon} text-3xl md:text-4xl text-[#3A9387] group-hover:text-[#E17C47] transition-colors duration-300`}></i>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#194C4C] mb-4 group-hover:text-[#3A9387] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-[#194C4C]/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button
                  onClick={() => toggleService(index)}
                  className="flex items-center gap-2 text-[#3A9387] font-semibold hover:text-[#E17C47] hover:gap-4 transition-all duration-300"
                >
                  <span>{expandedService === index ? "Show Less" : "Learn More"}</span>
                  <i className={`fas ${expandedService === index ? "fa-chevron-up" : "fa-arrow-right"} transform transition-transform duration-300`}></i>
                </button>
              </div>

              {/* Expanded Details Section */}
              <div 
                className={`border-t border-[#DADFDB] bg-[#DADFDB]/50 transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedService === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-8 md:p-10">
                  <h4 className="font-serif text-xl md:text-2xl font-semibold text-[#194C4C] mb-6">
                    {service.details.subheading}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.details.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#DADFDB] flex items-center justify-center">
                          <i className={`fas ${feature.icon} text-xl text-[#3A9387]`}></i>
                        </div>
                        <div>
                          <h5 className="font-semibold text-[#194C4C] mb-2">
                            {feature.title}
                          </h5>
                          <p className="text-sm text-[#194C4C]/70 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA in expanded section */}
                  <div className="mt-8 pt-6 border-t border-[#DADFDB]">
                    <Link
                      to={service.href}
                      className="inline-flex items-center justify-center gap-2 text-[#3A9387] hover:text-[#E17C47] font-semibold transition-all duration-300"
                    >
                      <span>Explore {service.title}</span>
                      <i className="fas fa-external-link-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#3A9387] rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 md:mt-20 lg:mt-24 text-center">
          <div className="bg-[#3A9387] rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto">
              <i className="fas fa-star text-[#F79120] text-4xl md:text-5xl mb-6 animate-pulse"></i>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                Ready to Express Your Authenticity?
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Let's transform your vision into reality with strategic creativity and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-envelope text-xl"></i>
                  Get In Touch
                </Link>
                <a
                  href="https://wa.me/255777296026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  WhatsApp Us
                </a>
              </div>
            </div>
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
      `}</style>
    </section>
  );
}