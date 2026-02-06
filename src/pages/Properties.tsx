import { Layout } from "@/components/layout/Layout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { Button } from "@/components/ui/button";
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

const Properties = () => {
  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Background Image Banner */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&q=80"
            alt="Zanzibar luxury properties"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/60 to-black/80"></div>
          
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 opacity-0 animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <i className="fas fa-home text-yellow-500"></i>
                <span className="text-white text-sm font-medium">Premium Properties</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fadeInUp">
              Our Properties
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInUp animation-delay-200">
              Browse our carefully curated collection of Zanzibar properties. Each one reflects our commitment to quality, comfort, and authentic island living.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeIn animation-delay-400">
          <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
            <span className="text-sm font-medium">Explore</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-yellow-500 rounded-full animate-scroll-indicator"></div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

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

          @keyframes scroll-indicator {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(16px);
              opacity: 0;
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
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
        `}</style>
      </section>

      {/* Stats Section */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`fas ${stat.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-teal-700 font-semibold text-sm rounded-full shadow-lg">
                      {property.type}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={property.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span className="text-sm">View Listing</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Location */}
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {property.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <i className="fas fa-map-marker-alt text-yellow-600"></i>
                    {property.location}
                  </p>

                  {/* Property Details */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fas fa-bed text-teal-600"></i>
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fas fa-bath text-teal-600"></i>
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fas fa-users text-teal-600"></i>
                      <span>{property.guests} Guests</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {property.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-teal-600 text-teal-700 hover:bg-teal-50 font-medium"
                    >
                      <i className="fas fa-info-circle mr-2"></i>
                      Inquire
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 bg-teal-700 hover:bg-teal-800 font-medium" 
                      asChild
                    >
                      <a
                        href={property.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Book Now</span>
                        <i className="fas fa-arrow-right text-xs"></i>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Properties */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Why Choose Our Properties?
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "fa-shield-alt",
                  title: "Quality Guaranteed",
                  description: "Every property is personally inspected and maintained to the highest standards"
                },
                {
                  icon: "fa-headset",
                  title: "24/7 Support",
                  description: "Round-the-clock guest support for any questions or concerns during your stay"
                },
                {
                  icon: "fa-broom",
                  title: "Professional Cleaning",
                  description: "Thoroughly cleaned and sanitized between every guest for your peace of mind"
                },
                {
                  icon: "fa-map-marked-alt",
                  title: "Prime Locations",
                  description: "Strategically located near beaches, attractions, and local experiences"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <i className={`fas ${item.icon} text-xl text-teal-700`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
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
                  className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
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
      </div>

    </Layout>
  );
};

export default Properties;