import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const exploreLinks = [
  { name: "About Authentik", href: "/about" },
  { name: "Marketing Services", href: "/marketing" },
  { name: "Authentik Homes", href: "/homes" },
  { name: "Properties", href: "/properties" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: "fab fa-facebook-f", href: "https://facebook.com" },
  { name: "Instagram", icon: "fab fa-instagram", href: "https://instagram.com" },
  { name: "Twitter", icon: "fab fa-twitter", href: "https://twitter.com" },
  { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
];

const contactInfo = {
  email: "chat@authentik.tz",
  marketing: "+255 777 296 026",
  homes: "+255 674 593 918",
};

export function Footer() {
  return (
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
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#F79120] focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <Button 
                  variant="accent" 
                  className="w-full bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Authentik. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
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
                  className="text-white/60 hover:text-[#F79120] transition-colors"
                >
                  A Wayreal Creative Hub brand
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
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#F79120] transition-all duration-300"
              />
              <Button 
                variant="accent" 
                className="w-full bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Subscribe
              </Button>
            </form>
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
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-center gap-4">
                <Link to="/privacy" className="text-white/60 hover:text-[#F79120] transition-colors">
                  Privacy
                </Link>
                <span className="text-white/30">|</span>
                <Link to="/terms" className="text-white/60 hover:text-[#F79120] transition-colors">
                  Terms
                </Link>
              </div>
              <a
                href="https://wayreal.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#F79120] transition-colors"
              >
                A Wayreal Creative Hub brand
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}