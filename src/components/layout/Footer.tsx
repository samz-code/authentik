import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const exploreLinks = [
  { name: "About Authentik", href: "/about" },
  { name: "Marketing Services", href: "/marketing" },
  { name: "Authentik Homes", href: "/homes" },
  { name: "Properties", href: "/properties" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { 
    name: "Facebook", 
    icon: "fab fa-facebook-f", 
    href: "https://www.facebook.com/profile.php?id=61565897894393" 
  },
  { 
    name: "Instagram", 
    icon: "fab fa-instagram", 
    href: "https://www.instagram.com/authentik_marketing?igsh=emR2dG0wcDRiMncz" 
  },
  { 
    name: "LinkedIn", 
    icon: "fab fa-linkedin-in", 
    href: "https://www.linkedin.com/company/authentik-marketing-solutions/" 
  },
];

const contactInfo = {
  email: "chat@authentik.tz",
  marketing: "+255 777 296 026",
  homes: "+255 674 593 918",
};

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
        setShowButtons(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-hide buttons after 10 seconds of no interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [showButtons]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 4000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Web3Forms - Free form backend service
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "17575eb6-0409-41be-8ef5-f4b73d82c143",
          subject: "New Newsletter Subscription - Authentik",
          from_name: "Authentik Website",
          email: email,
          message: `New newsletter subscription request from: ${email}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setEmail("");
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const NewsletterForm = ({ isMobile = false }) => (
    <form onSubmit={handleNewsletterSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={isSubmitting}
          className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#F79120] focus:bg-white/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      
      {submitStatus === 'success' && (
        <div className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3 animate-in fade-in slide-in-from-top-2 duration-300">
          🎉 Success! You've been subscribed to our newsletter.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3 animate-in fade-in slide-in-from-top-2 duration-300">
          ⚠️ Oops! Please enter a valid email address and try again.
        </div>
      )}
      
      <Button 
        type="submit"
        variant="accent" 
        disabled={isSubmitting}
        className="w-full bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Subscribing...
          </span>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
  );

  return (
    <>
      <footer className="bg-gradient-to-b from-[#194C4C] to-[#0d2626] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F79120]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3A9387]/5 rounded-full blur-3xl"></div>

        {/* Desktop Footer */}
        <div className="hidden md:block py-16 lg:py-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <Link to="/" className="inline-block group">
                  <img 
                    src="/logow.png" 
                    alt="Authentik" 
                    className="h-24 md:h-32 lg:h-36 w-auto group-hover:opacity-80 transition-opacity duration-300"
                  />
                </Link>
                <p className="mt-6 text-base text-white/80 leading-relaxed">
                  Helping brands, creators, and property owners express who they truly
                  are, visually, verbally, and strategically.
                </p>
                
                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-sm font-semibold text-white/90 mb-4 tracking-wide uppercase">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-[#F79120] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={social.name}
                      >
                        <i className={`${social.icon} text-white`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Explore Column */}
              <div className="lg:col-span-1">
                <h4 className="font-serif text-xl font-semibold text-white mb-6 pb-2 border-b-2 border-[#F79120] inline-block">
                  Explore
                </h4>
                <ul className="space-y-4 mt-6">
                  {exploreLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group text-base text-white/80 hover:text-[#F79120] transition-colors duration-300 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div className="lg:col-span-1">
                <h4 className="font-serif text-xl font-semibold text-white mb-6 pb-2 border-b-2 border-[#F79120] inline-block">
                  Get In Touch
                </h4>
                <ul className="space-y-6 mt-6">
                  <li>
                    <p className="text-xs text-white/60 uppercase tracking-wide mb-2 font-medium">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base text-white/90 hover:text-[#F79120] transition-colors duration-300 inline-block"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    <p className="text-xs text-white/60 uppercase tracking-wide mb-2 font-medium">Marketing</p>
                    <a
                      href={`https://wa.me/${contactInfo.marketing.replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-white/90 hover:text-[#F79120] transition-colors duration-300 inline-block"
                    >
                      {contactInfo.marketing}
                    </a>
                  </li>
                  <li>
                    <p className="text-xs text-white/60 uppercase tracking-wide mb-2 font-medium">Homes</p>
                    <a
                      href={`https://wa.me/${contactInfo.homes.replace(/\s/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-white/90 hover:text-[#F79120] transition-colors duration-300 inline-block"
                    >
                      {contactInfo.homes}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Column */}
              <div className="lg:col-span-1">
                <h4 className="font-serif text-xl font-semibold text-white mb-6 pb-2 border-b-2 border-[#F79120] inline-block">
                  Stay Updated
                </h4>
                <p className="text-base text-white/80 mb-6 mt-6 leading-relaxed">
                  Get insights on branding, growth, and hospitality delivered to your inbox.
                </p>
                <NewsletterForm />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-white/60">
                  © {new Date().getFullYear()} Authentik. All rights reserved.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
                  <Link to="/privacy" className="text-white/60 hover:text-[#F79120] transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-white/60 hover:text-[#F79120] transition-colors">
                    Terms of Service
                  </Link>
                  <a
                    href="https://wayreal.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F79120] hover:text-[#E17C47] transition-colors font-medium"
                  >
                    A Wayreal Creative Hub brand
                  </a>
                  <span className="text-white/30 hidden md:inline">|</span>
                  <a
                    href="https://www.emonisamuel.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#F79120] transition-colors"
                  >
                    Developer: Emoni Samuel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden py-12 relative z-10">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Brand */}
            <div className="mb-10 text-center">
              <Link to="/" className="inline-block">
                <img 
                  src="/logow.png" 
                  alt="Authentik" 
                  className="h-20 md:h-24 w-auto mx-auto mb-3 hover:opacity-80 transition-opacity duration-300"
                />
              </Link>
              <p className="text-base text-white/80 leading-relaxed max-w-sm mx-auto">
                Helping brands, creators, and property owners express who they truly are.
              </p>
            </div>

            {/* Accordion Sections */}
            <Accordion type="single" collapsible className="space-y-3 mb-10">
              <AccordionItem value="explore" className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                <AccordionTrigger className="text-white hover:no-underline px-6 py-4 font-semibold">
                  Explore
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-3 pt-2">
                    {exploreLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-white/80 hover:text-[#F79120] transition-colors py-2 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact" className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                <AccordionTrigger className="text-white hover:no-underline px-6 py-4 font-semibold">
                  Contact
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="space-y-5 pt-2">
                    <li>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-2 font-medium">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-white/90 hover:text-[#F79120] transition-colors inline-block"
                      >
                        {contactInfo.email}
                      </a>
                    </li>
                    <li>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-2 font-medium">Marketing</p>
                      <a
                        href={`https://wa.me/${contactInfo.marketing.replace(/\s/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-[#F79120] transition-colors inline-block"
                      >
                        {contactInfo.marketing}
                      </a>
                    </li>
                    <li>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-2 font-medium">Homes</p>
                      <a
                        href={`https://wa.me/${contactInfo.homes.replace(/\s/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-[#F79120] transition-colors inline-block"
                      >
                        {contactInfo.homes}
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Newsletter */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-serif text-xl font-semibold text-white mb-4">
                Stay Updated
              </h4>
              <p className="text-sm text-white/80 mb-6">
                Get insights delivered to your inbox.
              </p>
              <NewsletterForm isMobile={true} />
            </div>

            {/* Social Links */}
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold text-white/90 mb-4 tracking-wide uppercase">Follow Us</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#F79120] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-white text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-8 border-t border-white/10 text-center space-y-3">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Authentik. All rights reserved.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="https://wayreal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F79120] hover:text-[#E17C47] transition-colors font-medium"
                >
                  A Wayreal Creative Hub brand
                </a>
                <a
                  href="https://www.emonisamuel.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#F79120] transition-colors"
                >
                  Developer: Emoni Samuel
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          onMouseEnter={handleMouseEnter}
          className={`fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#F79120] hover:bg-[#E17C47] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${
            showButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </button>
      )}

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/255777296026?text=Hi%20Authentik%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 group ${
          showButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl group-hover:scale-110 transition-transform"></i>
      </a>
    </>
  );
}