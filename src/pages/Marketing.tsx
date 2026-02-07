import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Brand Strategy Consultancy",
    icon: "fa-compass",
    gap: "You have a business, but no clear brand positioning. You're competing on price because you can't articulate your value.",
    approach:
      "Deep-dive into your market, audience, and competitors. Clarify your positioning, value proposition, and strategic direction.",
    outcome:
      "A brand strategy document that becomes your north star for all decisions.",
    price: "From $1,500",
    features: ["Market Analysis", "Positioning Strategy", "Value Proposition", "Brand Guidelines"],
  },
  {
    title: "Authentic Visual Identity",
    icon: "fa-palette",
    gap: "Your visuals don't match your value. You look generic, forgettable, or inconsistent.",
    approach:
      "Develop a visual system rooted in your brand strategy — logo, typography, color, imagery, and guidelines.",
    outcome:
      "A complete visual identity that makes you instantly recognizable and premium.",
    price: "From $2,500",
    features: ["Logo Design", "Color System", "Typography", "Brand Guidelines"],
  },
  {
    title: "Brand Voice & Storytelling",
    icon: "fa-pen-fancy",
    gap: "You know what you do, but struggle to explain why it matters. Your messaging is inconsistent across channels.",
    approach:
      "Define your tone of voice, key messages, and brand narrative. Create templates for consistent communication.",
    outcome:
      "A messaging framework that sounds authentically you — everywhere you show up.",
    price: "From $1,200",
    features: ["Voice Guidelines", "Key Messages", "Story Framework", "Content Templates"],
  },
  {
    title: "Digital Marketing Strategy",
    icon: "fa-chart-line",
    gap: "You're posting content but not seeing results. You don't know what's working or why.",
    approach:
      "Audit your current presence. Build a channel strategy, content pillars, and measurement framework.",
    outcome:
      "A 90-day marketing roadmap with clear KPIs and tactics.",
    price: "From $1,800",
    features: ["Channel Strategy", "Content Pillars", "90-Day Roadmap", "KPI Framework"],
  },
  {
    title: "Social Media Content Strategy",
    icon: "fa-share-alt",
    gap: "Your social presence is inconsistent, reactive, or doesn't reflect your brand value.",
    approach:
      "Develop content pillars, posting cadence, and creative direction tailored to your audience.",
    outcome:
      "A content calendar and templates you can execute consistently.",
    price: "From $800",
    features: ["Content Calendar", "Posting Schedule", "Creative Templates", "Platform Strategy"],
  },
  {
    title: "Digital Media Buying",
    icon: "fa-bullseye",
    gap: "You're spending on ads but not seeing ROI. Your targeting is broad and your creative isn't converting.",
    approach:
      "Build targeted campaigns across Meta, Google, and relevant platforms with proper tracking.",
    outcome:
      "Optimized campaigns with clear ROAS and scaling potential.",
    price: "From $1,000/mo",
    features: ["Campaign Setup", "Audience Targeting", "Creative Testing", "Performance Tracking"],
  },
  {
    title: "Influencer Marketing Strategy",
    icon: "fa-users",
    gap: "You want to work with influencers but don't know who, how, or what to expect.",
    approach:
      "Identify the right creators, structure collaborations, and manage relationships.",
    outcome:
      "Authentic partnerships that expand reach and build trust.",
    price: "From $1,500",
    features: ["Influencer Research", "Partnership Strategy", "Campaign Management", "ROI Tracking"],
  },
  {
    title: "WhatsApp Automation",
    icon: "fa-robot",
    gap: "You're missing leads because you can't respond fast enough. Your customer service is overwhelming.",
    approach:
      "Set up automated flows for inquiries, bookings, and follow-ups while maintaining a human touch.",
    outcome:
      "24/7 responsiveness without losing the personal connection.",
    price: "From $600",
    features: ["Automated Responses", "Lead Capture", "Booking Flows", "CRM Integration"],
  },
];

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#3A9387]"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="p-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Title & Icon Row */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-14 h-14 bg-[#DADFDB] rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <i className={`fas ${service.icon} text-2xl text-[#3A9387] group-hover:text-[#E17C47] transition-colors duration-300`}></i>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#194C4C] group-hover:text-[#3A9387] transition-colors flex-1">
              {service.title}
            </h3>
          </div>

          {/* Price Tag */}
          <div className="bg-[#DADFDB] rounded-xl p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#194C4C]/60 uppercase tracking-wide">
                Starting from
              </p>
              <p className="font-serif text-2xl md:text-3xl font-bold text-[#194C4C]">
                {service.price}
              </p>
            </div>
          </div>
        </div>

        {/* The Gap */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-[#F79120] rounded-full"></div>
            <p className="text-xs font-semibold tracking-wider text-[#194C4C]/60 uppercase">
              The Gap
            </p>
          </div>
          <p className="text-base md:text-lg text-[#194C4C]/70 leading-relaxed">
            {service.gap}
          </p>
        </div>

        {/* Expandable Content */}
        <div className={`space-y-6 transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          {/* Our Approach */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-[#3A9387] rounded-full"></div>
              <p className="text-xs font-semibold tracking-wider text-[#194C4C]/60 uppercase">
                Our Approach
              </p>
            </div>
            <p className="text-base md:text-lg text-[#194C4C]/70 leading-relaxed">
              {service.approach}
            </p>
          </div>

          {/* Outcome */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-[#F79120] rounded-full"></div>
              <p className="text-xs font-semibold tracking-wider text-[#194C4C]/60 uppercase">
                Outcome
              </p>
            </div>
            <p className="text-base md:text-lg text-[#194C4C]/70 leading-relaxed">
              {service.outcome}
            </p>
          </div>

          {/* Features */}
          <div className="pt-6 border-t border-[#DADFDB]">
            <p className="text-xs font-semibold tracking-wider text-[#194C4C]/60 uppercase mb-4">
              What's Included
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#3A9387] flex-shrink-0" />
                  <span className="text-base text-[#194C4C]/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 flex items-center gap-2 text-[#3A9387] font-semibold hover:text-[#E17C47] hover:gap-3 transition-all duration-300"
        >
          <span className="text-base">{isExpanded ? "Show Less" : "Learn More"}</span>
          <i className={`fas ${isExpanded ? "fa-chevron-up" : "fa-arrow-right"} transition-transform duration-300`}></i>
        </button>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-[#3A9387] to-[#F79120] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

const Marketing = () => {
  return (
    <Layout>
      {/* Compact Page Intro */}
      <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#194C4C] mb-4">
              Authentik Marketing
            </h1>
            <p className="text-lg md:text-xl text-[#194C4C]/70 leading-relaxed">
              We don't do generic marketing. We help you express your authentic brand — then build systems that turn that clarity into growth.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#3A9387] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-lightbulb text-3xl text-[#F79120]"></i>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                    Marketing That Actually Works
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    We don't just create content or run ads. We help you define who you are, express it with clarity, and build systems that turn that authenticity into measurable growth. Every service below is designed to bridge the gap between where you are and where you want to be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services List */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-[#194C4C]/70">
              Choose what you need. Or let us build you a custom package.
            </p>
            <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6 md:space-y-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#F79120] to-[#E17C47] rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <i className="fas fa-rocket text-4xl text-white"></i>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                Ready to Express Your Authenticity?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book a strategy call and let's discuss how we can help you grow with clarity, confidence, and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#DADFDB] text-[#194C4C] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/255777296026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
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

export default Marketing;