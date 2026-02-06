import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

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
      <i className="fas fa-clock text-yellow-500"></i>
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
    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
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
    icon: "fa-envelope",
    label: "Email",
    value: "chat@authentik.tz",
    href: "mailto:chat@authentik.tz",
    description: "For general inquiries and project discussions",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    icon: "fa-phone",
    label: "Marketing Inquiries",
    value: "+255 777 296 026",
    href: "tel:+255777296026",
    whatsapp: "https://wa.me/255777296026",
    description: "Branding, strategy, and creative services",
    color: "bg-teal-600",
    hoverColor: "hover:bg-teal-700"
  },
  {
    icon: "fa-home",
    label: "Property Inquiries",
    value: "+255 674 593 918",
    href: "tel:+255674593918",
    whatsapp: "https://wa.me/255674593918",
    description: "Property management and luxury accommodations",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600"
  }
];

const quickActions = [
  {
    title: "Book a Strategy Call",
    description: "Let's discuss your brand vision and goals",
    icon: "fa-calendar-check",
    href: "https://wa.me/255777296026?text=Hi%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.",
    external: true
  },
  {
    title: "Register My Property",
    description: "List your property with our management team",
    icon: "fa-home",
    href: "/register-property",
    external: false
  },
  {
    title: "Inquire About Properties",
    description: "Explore our curated selection of luxury homes",
    icon: "fa-search",
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
  return (
    <div
      className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-600"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${method.color} mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
        <i className={`fas ${method.icon} text-2xl text-white`}></i>
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-bold tracking-wider uppercase text-teal-700">
          {method.label}
        </span>
      </div>
      
      <a
        href={method.href}
        className="text-lg md:text-xl font-semibold text-gray-900 hover:text-teal-700 transition-colors block mb-2"
      >
        {method.value}
      </a>
      
      <p className="text-sm text-gray-600 mb-4">
        {method.description}
      </p>

      {method.whatsapp && (
        <Button
          variant="whatsapp"
          size="sm"
          className="w-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300"
          asChild
        >
          <a
            href={method.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            WhatsApp Now
          </a>
        </Button>
      )}
    </div>
  );
};

const QuickActionCard = ({ action, index }) => {
  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
      className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-600"
      style={{
        animationDelay: `${index * 0.15}s`,
        opacity: 0,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="w-full h-1 bg-yellow-500 rounded-full mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:bg-orange-500 transition-all duration-300">
          <i className={`fas ${action.icon} text-xl text-white`}></i>
        </div>
        
        <div className="flex-1">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
            {action.title}
          </h3>
          <p className="text-sm text-gray-600">
            {action.description}
          </p>
        </div>
        
        <i className="fas fa-arrow-right text-gray-400 group-hover:text-teal-700 group-hover:translate-x-2 transition-all duration-300 mt-1"></i>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-900/70 to-teal-900/90"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 flex flex-col items-center gap-3 opacity-0 animate-fadeIn">
              <ActiveStatus />
              <LiveClock />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fadeInUp">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-200">
              Ready to express your authenticity? Let's start a conversation and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Choose Your Channel
            </h2>
            <p className="text-lg text-gray-600">
              We're here to help. Reach out through your preferred method.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <ContactMethodCard key={method.label} method={method} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600">
              Choose the option that best fits your needs and we'll get started right away.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <QuickActionCard key={action.title} action={action} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Location & Hours Section */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Location Card */}
            <div className="bg-teal-700 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-500">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
                Our Location
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Zanzibar, Tanzania
              </p>
              <div className="h-px bg-white/30 mb-4"></div>
              <p className="text-white/80 text-sm">
                <i className="fas fa-globe text-yellow-500 mr-2"></i>
                Serving clients globally with local expertise
              </p>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-clock text-2xl text-yellow-600"></i>
                </div>
                {isWithinOfficeHours() ? (
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    Open Now
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    Closed Now
                  </div>
                )}
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Office Hours
              </h3>
              
              {/* Live Clock */}
              <div className="mb-6 text-gray-600 font-mono text-lg">
                <LiveClock />
              </div>
              
              <div className="space-y-4">
                {officeHours.map((schedule) => (
                  <div 
                    key={schedule.day} 
                    className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <i className="fas fa-info-circle text-teal-600"></i>
                  Available for urgent matters 24/7 via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden max-w-4xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <i className="fas fa-paper-plane text-3xl text-white"></i>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                We're always happy to chat. Send us a message and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:chat@authentik.tz"
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-envelope"></i>
                  Email Us
                </a>
                <a
                  href="https://wa.me/255777296026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
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
      `}</style>
    </Layout>
  );
};

export default Contact;