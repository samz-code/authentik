import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

const values = [
  {
    title: "Clarity Over Complexity",
    description:
      "We believe the most powerful brands are the simplest. We strip away the noise to reveal what truly matters.",
    icon: "fa-eye",
  },
  {
    title: "Strategy Before Style",
    description:
      "Beautiful design means nothing without purpose. Every visual choice we make is rooted in strategic intent.",
    icon: "fa-chess",
  },
  {
    title: "Depth Over Speed",
    description:
      "Real brand work takes time. We'd rather go deep with fewer clients than spread thin across many.",
    icon: "fa-anchor",
  },
  {
    title: "Partnership Over Projects",
    description:
      "We don't do one-offs. We build long-term relationships with brands we believe in and want to see succeed.",
    icon: "fa-handshake",
  },
];

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
    alt: "Team collaboration",
    caption: "Building Authentic Brands Together"
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    alt: "Creative workspace",
    caption: "Where Creativity Meets Strategy"
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    alt: "Team meeting",
    caption: "Collaborative Excellence"
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
    alt: "Office space",
    caption: "Innovation in Every Detail"
  },
];

const stats = [
  { number: "100+", label: "Brands Transformed", icon: "fa-rocket" },
  { number: "50+", label: "Properties Managed", icon: "fa-building" },
  { number: "15+", label: "Countries Served", icon: "fa-globe" },
  { number: "5-Star", label: "Client Rating", icon: "fa-star" },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group shadow-2xl">
      {/* Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Caption */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold">
              {image.caption}
            </h3>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left text-white text-xl"></i>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right text-white text-xl"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#F79120] w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      {/* Compact Page Intro */}
      <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#194C4C] mb-4">
              About Authentik
            </h1>
            <p className="text-lg md:text-xl text-[#194C4C]/70 leading-relaxed">
              We're a branding and property management company based in Zanzibar, serving clients globally. We help brands, creators, and property owners express who they truly are.
            </p>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ImageCarousel />
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
                <div className="w-14 h-14 bg-[#3A9387] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${stat.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#194C4C] mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-[#194C4C]/70 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Story Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F79120] rounded-full mb-6">
                <i className="fas fa-book-open text-2xl text-white"></i>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-lg md:text-xl text-[#194C4C]/80 leading-relaxed">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[#3A9387] first-letter:mr-2 first-letter:float-left">
                  Authentik was born from a simple observation: the most compelling
                  brands aren't the loudest. They're the clearest. They know exactly
                  who they are, and they express it with quiet confidence in
                  everything they do.
                </p>
                <p>
                  Based in Zanzibar and operating globally, we work with brands,
                  creators, and property owners who want more than marketing. They
                  want alignment, between who they are, how they present themselves,
                  and who they attract.
                </p>
                <p>
                  Whether we're developing a visual identity, crafting a brand voice,
                  building a digital strategy, or managing a luxury property, our
                  approach is the same. We start with truth. We express it with
                  clarity. And we measure success by the growth that follows.
                </p>
                <div className="bg-[#DADFDB] border-l-4 border-[#3A9387] p-6 rounded-r-2xl">
                  <p className="mb-0 italic text-[#194C4C]">
                    Authentik is a{" "}
                    <a
                      href="https://wayreal.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3A9387] font-semibold hover:text-[#E17C47] transition-colors"
                    >
                      Wayreal Creative Hub
                    </a>{" "}
                    brand, committed to excellence in every project we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-[#194C4C]/70">
              These principles guide everything we do, from strategy to execution.
            </p>
            <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#DADFDB] mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className={`fas ${value.icon} text-3xl text-[#3A9387] group-hover:text-[#E17C47] transition-colors duration-300`}></i>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#194C4C] mb-4 group-hover:text-[#3A9387] transition-colors">
                  {value.title}
                </h3>
                <p className="text-base md:text-lg text-[#194C4C]/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3A9387] rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center">
            <i className="fas fa-handshake text-5xl md:text-6xl text-[#F79120] mb-6"></i>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create something authentic and impactful. Get in touch to start your journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <i className="fas fa-envelope"></i>
                Get In Touch
              </a>
              <a
                href="https://wa.me/255777296026"
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

export default About;