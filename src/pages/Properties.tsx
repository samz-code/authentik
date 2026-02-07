import { Layout } from "@/components/layout/Layout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { MessageCircle, ArrowRight, ExternalLink, Bed, Bath, Users, MapPin, Shield, Headset, Sparkles } from "lucide-react";
import propertyVilla from "@/assets/property-villa.jpg";
import propertyStonetown from "@/assets/property-stonetown.jpg";
import propertyPaje from "@/assets/property-paje.jpg";

const properties = [
  {
    id: 1,
    title: "Ocean View Villa",
    location: "Nungwi, Zanzibar",
    description:
      "A stunning 3-bedroom villa with panoramic ocean views, private pool, and direct beach access.",
    image: propertyVilla,
    airbnbUrl: "https://www.airbnb.com/p/kawirahosting",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    features: ["Ocean View", "Private Pool", "Beach Access", "WiFi"],
    type: "Villa"
  },
  {
    id: 2,
    title: "Stone Town Retreat",
    location: "Stone Town, Zanzibar",
    description:
      "Historic townhouse in the heart of Stone Town, beautifully restored with modern comforts.",
    image: propertyStonetown,
    airbnbUrl: "https://www.airbnb.com/p/kawirahosting",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    features: ["Historic", "City Center", "Modern", "Rooftop"],
    type: "Townhouse"
  },
  {
    id: 3,
    title: "Beachfront Apartment",
    location: "Paje, Zanzibar",
    description:
      "Modern 2-bedroom apartment steps from the famous Paje beach, perfect for kitesurfing enthusiasts.",
    image: propertyPaje,
    airbnbUrl: "https://www.airbnb.com/p/kawirahosting",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    features: ["Beachfront", "Kitesurfing", "Modern", "WiFi"],
    type: "Apartment"
  },
];

const stats = [
  { icon: "fa-home", number: "12+", label: "Properties" },
  { icon: "fa-star", number: "4.9", label: "Average Rating" },
  { icon: "fa-users", number: "500+", label: "Happy Guests" },
  { icon: "fa-award", number: "100%", label: "Superhost Status" },
];

const whyChoose = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every property is personally inspected and maintained to the highest standards"
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Round-the-clock guest support for any questions or concerns during your stay"
  },
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description: "Thoroughly cleaned and sanitized between every guest for your peace of mind"
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Strategically located near beaches, attractions, and local experiences"
  }
];

const Properties = () => {
  return (
    <Layout>
      {/* Compact Page Intro */}
      <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#194C4C] mb-4">
              Our Properties
            </h1>
            <p className="text-lg md:text-xl text-[#194C4C]/70 leading-relaxed">
              Browse our carefully curated collection of Zanzibar properties. Each one reflects our commitment to quality, comfort, and authentic island living.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#DADFDB]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-14 h-14 bg-[#3A9387]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${stat.icon} text-2xl text-[#3A9387]`}></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#194C4C] mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-[#194C4C]/60 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Properties Grid */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#3A9387]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194C4C]/70 via-[#194C4C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-[#3A9387] font-semibold text-sm rounded-full shadow-lg">
                      {property.type}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={property.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Listing</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title & Location */}
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#194C4C] mb-3 group-hover:text-[#3A9387] transition-colors">
                    {property.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm md:text-base text-[#194C4C]/60 mb-6">
                    <MapPin className="w-4 h-4 text-[#F79120]" />
                    {property.location}
                  </p>

                  {/* Property Details */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#DADFDB]">
                    <div className="flex items-center gap-2 text-sm md:text-base text-[#194C4C]/70">
                      <Bed className="w-5 h-5 text-[#3A9387]" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-[#194C4C]/70">
                      <Bath className="w-5 h-5 text-[#3A9387]" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-[#194C4C]/70">
                      <Users className="w-5 h-5 text-[#3A9387]" />
                      <span>{property.guests} Guests</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#194C4C]/70 text-base leading-relaxed mb-6">
                    {property.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1.5 bg-[#3A9387]/10 text-[#3A9387] text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/255674593918"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#3A9387] text-[#3A9387] hover:bg-[#3A9387] hover:text-white font-semibold px-4 py-3 rounded-full transition-all duration-300 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Inquire
                    </a>
                    <a
                      href={property.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-4 py-3 rounded-full transition-all duration-300 text-sm"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Our Properties */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6">
                Why Choose Our Properties?
              </h2>
              <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#3A9387] transform hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-[#DADFDB] rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#3A9387]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-[#194C4C] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-base text-[#194C4C]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F79120] to-[#E17C47] rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <i className="fas fa-key text-4xl text-white"></i>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                Ready to Experience Zanzibar?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book your perfect island getaway today and discover the authentic charm of Zanzibar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.airbnb.com/p/kawirahosting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#DADFDB] text-[#194C4C] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <i className="fab fa-airbnb text-xl"></i>
                  View on Airbnb
                </a>
                <a
                  href="https://wa.me/255674593918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  WhatsApp Us
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

export default Properties;