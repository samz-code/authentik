import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { MessageCircle, ArrowRight, ExternalLink, Bed, Bath, Users, MapPin, Shield, Headset, Sparkles } from "lucide-react";
import propertyVilla from "@/assets/property-villa.jpg";
import propertyStonetown from "@/assets/property-stonetown.jpg";
import propertyPaje from "@/assets/property-paje.jpg";

const properties = [
  {
    id: 1,
    title: "Oyster Bay Luxe Retreat",
    location: "Dar es Salaam, Tanzania",
    description: "Private room in scenic Oyster Bay with dedicated bathroom, Netflix, AC, and all modern comforts.",
    image: propertyVilla,
    airbnbUrl: "https://www.airbnb.com/rooms/1495593631577847251",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    features: ["WiFi", "Netflix", "AC", "Parking", "Washer"],
    type: "Private Room"
  },
  {
    id: 2,
    title: "Terry's 2-Bedroom at The Soul",
    location: "Paje, Tanzania",
    description: "Spacious 2-bedroom condo with pool — one of the few in the area. Perfect for groups exploring Paje.",
    image: propertyStonetown,
    airbnbUrl: "https://www.airbnb.com/rooms/1211491106438991184",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    features: ["Pool", "WiFi", "Kitchen", "Parking", "Washer"],
    type: "Entire Condo"
  },
  {
    id: 3,
    title: "Terry's Classy 1BR at The Soul",
    location: "Paje, Tanzania",
    description: "Stylish 1-bedroom condo with pool access. Ideal for couples wanting a comfortable island escape.",
    image: propertyPaje,
    airbnbUrl: "https://www.airbnb.com/rooms/1241029454767336925",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    features: ["Pool", "WiFi", "Kitchen", "Parking", "TV"],
    type: "Entire Condo"
  },
  {
    id: 4,
    title: "Soulful 2BR Garden Hideout",
    location: "Paje, Tanzania",
    description: "Lush garden retreat with beach access, pool, sauna, and pet-friendly grounds in peaceful Paje.",
    image: propertyVilla,
    airbnbUrl: "https://www.airbnb.com/rooms/1495593631577847251",
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    features: ["Beach Access", "Pool", "Sauna", "Pets OK", "WiFi"],
    type: "Entire Unit"
  },
];

const stats = [
  { icon: "fa-home", number: "12+", label: "Properties" },
  { icon: "fa-star", number: "4.9", label: "Avg Rating" },
  { icon: "fa-users", number: "500+", label: "Happy Guests" },
  { icon: "fa-award", number: "100%", label: "Superhost" },
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
      {/* Page Intro */}
      <section className="pt-24 pb-6 md:pt-28 md:pb-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#194C4C] mb-3">
              Our Properties
            </h1>
            <p className="text-base md:text-lg text-[#194C4C]/70 leading-relaxed">
              Carefully curated stays across Tanzania — quality, comfort, and authentic local living.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#DADFDB]"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards' }}
              >
                <div className="w-10 h-10 bg-[#3A9387]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`fas ${stat.icon} text-lg text-[#3A9387]`}></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#194C4C] mb-1">{stat.number}</h3>
                <p className="text-xs md:text-sm text-[#194C4C]/60 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Properties Grid */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#3A9387]"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards' }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194C4C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#3A9387] font-semibold text-xs rounded-full shadow">
                      {property.type}
                    </span>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <a
                      href={property.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-3 py-1.5 rounded-full shadow transition-all duration-300 text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Listing
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#194C4C] mb-1 group-hover:text-[#3A9387] transition-colors leading-snug">
                    {property.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-[#194C4C]/60 mb-3">
                    <MapPin className="w-3 h-3 text-[#F79120] flex-shrink-0" />
                    {property.location}
                  </p>

                  {/* Stats Row */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#DADFDB]">
                    <div className="flex items-center gap-1 text-xs text-[#194C4C]/70">
                      <Bed className="w-3.5 h-3.5 text-[#3A9387]" />
                      <span>{property.bedrooms} Bed{property.bedrooms > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#194C4C]/70">
                      <Bath className="w-3.5 h-3.5 text-[#3A9387]" />
                      <span>{property.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#194C4C]/70">
                      <Users className="w-3.5 h-3.5 text-[#3A9387]" />
                      <span>{property.guests} Guests</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#194C4C]/70 text-sm leading-relaxed mb-3">
                    {property.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {property.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2.5 py-1 bg-[#3A9387]/10 text-[#3A9387] text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/255674593918"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-[#3A9387] text-[#3A9387] hover:bg-[#3A9387] hover:text-white font-semibold px-3 py-2.5 rounded-full transition-all duration-300 text-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Inquire
                    </a>
                    <a
                      href={property.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-3 py-2.5 rounded-full transition-all duration-300 text-xs"
                    >
                      Airbnb
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#194C4C] mb-4">
                Why Choose Our Properties?
              </h2>
              <div className="w-20 h-1 bg-[#F79120] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-3 p-4 sm:p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#3A9387]"
                    style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards' }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#DADFDB] rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#3A9387]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-sm sm:text-base font-semibold text-[#194C4C] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#194C4C]/70 leading-relaxed">
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

      {/* CTA */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F79120] to-[#E17C47] rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/10 rounded-full -ml-18 -mb-18"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <i className="fas fa-key text-2xl text-white"></i>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
                Ready to Experience Tanzania?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 max-w-xl mx-auto">
                Book your perfect getaway and discover the authentic charm of Tanzania.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://www.airbnb.com/p/kawirahosting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#DADFDB] text-[#194C4C] font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                >
                  <i className="fab fa-airbnb text-lg"></i>
                  View on Airbnb
                </a>
                <a
                  href="https://wa.me/255674593918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Layout>
  );
};

export default Properties;