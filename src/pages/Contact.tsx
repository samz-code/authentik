import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Mail, Phone, Home, Calendar, Search, Clock, 
  MapPin, Globe, Info, Send, MessageCircle 
} from "lucide-react";

// Helper function to check if currently within office hours
const isWithinOfficeHours = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Monday-Friday: 9 AM - 6 PM
  if (day >= 1 && day <= 5) {
    return currentTime >= 9 && currentTime < 18;
  }
  
  // Saturday: 10 AM - 4 PM
  if (day === 6) {
    return currentTime >= 10 && currentTime < 16;
  }
  
  // Sunday: Closed
  return false;
};

// Real-time clock component
const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true,
      timeZone: 'Africa/Dar_es_Salaam'
    });
  };

  return (
    <div className="inline-flex items-center gap-2 text-sm font-mono">
      <Clock className="w-4 h-4 text-[#F79120]" />
      <span>{formatTime(time)} EAT</span>
    </div>
  );
};

// Active status indicator component
const ActiveStatus = () => {
  const [isActive, setIsActive] = useState(isWithinOfficeHours());

  useEffect(() => {
    const checkStatus = () => {
      setIsActive(isWithinOfficeHours());
    };

    // Check every minute
    const interval = setInterval(checkStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
      <div className="relative">
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-400'}`}></div>
        {isActive && (
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
        )}
      </div>
      <span className="text-white text-sm font-medium">
        {isActive ? 'We\'re Online' : 'Currently Offline'}
      </span>
    </div>
  );
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "chat@authentik.tz",
    href: "mailto:chat@authentik.tz",
    description: "For general inquiries and project discussions",
    color: "from-[#3A9387] to-[#194C4C]",
    iconBg: "bg-[#3A9387]"
  },
  {
    icon: Phone,
    label: "Marketing Inquiries",
    value: "+255 777 296 026",
    href: "tel:+255777296026",
    whatsapp: "https://wa.me/255777296026",
    description: "Branding, strategy, and creative services",
    color: "from-[#F79120] to-[#E17C47]",
    iconBg: "bg-[#F79120]"
  },
  {
    icon: Home,
    label: "Property Inquiries",
    value: "+255 674 593 918",
    href: "tel:+255674593918",
    whatsapp: "https://wa.me/255674593918",
    description: "Property management and luxury accommodations",
    color: "from-[#194C4C] to-[#3A9387]",
    iconBg: "bg-[#194C4C]"
  }
];

const quickActions = [
  {
    title: "Book a Strategy Call",
    description: "Let's discuss your brand vision and goals",
    icon: Calendar,
    href: "https://wa.me/255777296026?text=Hi%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.",
    external: true
  },
  {
    title: "Register My Property",
    description: "List your property with our management team",
    icon: Home,
    href: "/register-property",
    external: false
  },
  {
    title: "Inquire About Properties",
    description: "Explore our curated selection of luxury homes",
    icon: Search,
    href: "https://wa.me/255674593918?text=Hi%2C%20I%27m%20interested%20in%20your%20properties.",
    external: true
  }
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EAT" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM EAT" },
  { day: "Sunday", hours: "Closed" }
];

const ContactMethodCard = ({ method, index }) => {
  const IconComponent = method.icon;
  
  return (
    <div
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#DADFDB] hover:border-[#3A9387]"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${method.iconBg} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold tracking-wider uppercase text-[#3A9387]">
          {method.label}
        </span>
      </div>
      
      <a
        href={method.href}
        className="text-xl font-semibold text-[#194C4C] hover:text-[#3A9387] transition-colors block mb-3 font-serif"
      >
        {method.value}
      </a>
      
      <p className="text-sm text-[#194C4C]/70 mb-6 leading-relaxed">
        {method.description}
      </p>

      {method.whatsapp && (
        <a
          href={method.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Now
        </a>
      )}
    </div>
  );
};

const QuickActionCard = ({ action, index }) => {
  const IconComponent = action.icon;
  
  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
      className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#DADFDB] hover:border-[#3A9387]"
      style={{
        animationDelay: `${index * 0.15}s`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="w-full h-1 bg-gradient-to-r from-[#F79120] to-[#E17C47] rounded-full mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#3A9387] to-[#194C4C] rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-md">
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-serif text-xl font-semibold text-[#194C4C] mb-2 group-hover:text-[#3A9387] transition-colors">
            {action.title}
          </h3>
          <p className="text-sm text-[#194C4C]/70 leading-relaxed">
            {action.description}
          </p>
        </div>
        
        <div className="flex-shrink-0 w-8 h-8 bg-[#DADFDB] rounded-full flex items-center justify-center group-hover:bg-[#3A9387] transition-all duration-300">
          <span className="text-[#194C4C] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section with Brand Colors */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#194C4C] via-[#3A9387] to-[#194C4C]">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F79120]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3A9387]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex flex-col items-center gap-4 opacity-0 animate-fadeIn">
              <ActiveStatus />
              <LiveClock />
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fadeInUp leading-tight">
              Get in Touch
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-200 leading-relaxed">
              Ready to express your authenticity? Let's start a conversation and bring your vision to life.
            </p>

            {/* Decorative Line */}
            <div className="mt-8 flex items-center justify-center gap-3 opacity-0 animate-fadeInUp animation-delay-300">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#F79120]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F79120]"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F79120]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <div className="py-16 md:py-24 bg-[#DADFDB]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3A9387] to-[#194C4C] rounded-2xl mb-6 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-4">
              Choose Your Channel
            </h2>
            <p className="text-lg text-[#194C4C]/70 leading-relaxed">
              We're here to help. Reach out through your preferred method.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F79120] to-[#E17C47] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <ContactMethodCard key={method.label} method={method} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F79120] to-[#E17C47] rounded-2xl mb-6 shadow-lg">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-[#194C4C]/70 leading-relaxed">
              Choose the option that best fits your needs and we'll get started right away.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3A9387] to-[#194C4C] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <QuickActionCard key={action.title} action={action} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Location & Hours Section */}
      <div className="py-16 md:py-24 bg-[#DADFDB]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-[#3A9387] to-[#194C4C] rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                  Our Location
                </h3>
                <p className="text-xl text-white/90 mb-8 font-medium">
                  Zanzibar, Tanzania
                </p>
                <div className="h-px bg-white/30 mb-6"></div>
                <div className="flex items-center gap-3 text-white/90">
                  <Globe className="w-5 h-5 text-[#F79120]" />
                  <p className="text-sm">
                    Serving clients globally with local expertise
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-[#DADFDB] transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F79120] to-[#E17C47] rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                {isWithinOfficeHours() ? (
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border-2 border-green-200">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    Open Now
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold border-2 border-gray-200">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                    Closed Now
                  </div>
                )}
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#194C4C] mb-3">
                Office Hours
              </h3>
              
              {/* Live Clock */}
              <div className="mb-8 text-[#194C4C]/70 font-mono text-lg">
                <LiveClock />
              </div>
              
              <div className="space-y-5">
                {officeHours.map((schedule, index) => (
                  <div 
                    key={schedule.day} 
                    className={`flex justify-between items-center pb-5 ${index !== officeHours.length - 1 ? 'border-b-2 border-[#DADFDB]' : ''}`}
                  >
                    <span className="font-semibold text-[#194C4C]">{schedule.day}</span>
                    <span className="text-[#194C4C]/70 font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t-2 border-[#DADFDB]">
                <div className="flex items-start gap-3 bg-[#3A9387]/10 p-4 rounded-xl">
                  <Info className="w-5 h-5 text-[#3A9387] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#194C4C]/80 leading-relaxed">
                    Available for urgent matters 24/7 via WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F79120] via-[#E17C47] to-[#F79120] rounded-3xl shadow-2xl p-10 md:p-16 text-center relative overflow-hidden max-w-5xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                Still Have Questions?
              </h2>
              <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
                We're always happy to chat. Send us a message and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:chat@authentik.tz"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#DADFDB] text-[#194C4C] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="https://wa.me/255777296026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;