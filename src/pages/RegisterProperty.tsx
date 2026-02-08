import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const propertyTypes = [
  "Villa",
  "Apartment",
  "Townhouse",
  "Beach House",
  "Traditional House",
  "Other",
];

const locations = [
  "Stone Town",
  "Nungwi",
  "Kendwa",
  "Paje",
  "Jambiani",
  "Matemwe",
  "Kiwengwa",
  "Other",
];

const benefits = [
  {
    icon: "fa-chart-line",
    title: "Maximize Revenue",
    description: "Dynamic pricing and optimization strategies"
  },
  {
    icon: "fa-headset",
    title: "24/7 Support",
    description: "Round-the-clock guest communication"
  },
  {
    icon: "fa-broom",
    title: "Full Management",
    description: "From cleaning to maintenance, we handle it all"
  },
  {
    icon: "fa-star",
    title: "5-Star Reviews",
    description: "Exceptional guest experiences guaranteed"
  }
];

const RegisterProperty = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const form = new FormData(e.target);
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      location: form.get('location'),
      type: form.get('type'),
      units: form.get('units'),
      bedrooms: form.get('bedrooms'),
      bathrooms: form.get('bathrooms'),
      listed: form.get('listed'),
      listingLink: form.get('listing-link'),
      notes: form.get('notes'),
    };

    // Store for potential use
    setFormData(data);

    // Create email body
    const emailBody = `
New Property Registration Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OWNER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROPERTY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Location: ${data.location || 'Not specified'}
Property Type: ${data.type || 'Not specified'}
Units: ${data.units || 'Not specified'}
Bedrooms: ${data.bedrooms || 'Not specified'}
Bathrooms: ${data.bathrooms || 'Not specified'}
Already Listed: ${data.listed || 'No'}
Listing Link: ${data.listingLink || 'N/A'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.notes || 'None'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-US', { 
      dateStyle: 'full', 
      timeStyle: 'short',
      timeZone: 'Africa/Dar_es_Salaam' 
    })} EAT
    `.trim();

    // Create mailto link
    const subject = `Property Registration - ${data.name}`;
    const mailtoLink = `mailto:chat@authentik.tz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message after a brief delay
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  if (submitted) {
    return (
      <Layout>
        {/* Success Message */}
        <div className="min-h-screen flex items-center justify-center bg-[#DADFDB]/30 py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border-2 border-[#DADFDB]">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <i className="fas fa-check-circle text-4xl text-green-500"></i>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#194C4C] mb-6">
                Thank You!
              </h1>
              <p className="text-lg md:text-xl text-[#194C4C]/70 mb-8 leading-relaxed">
                We've received your property registration. Our team will contact
                you within 48 hours to schedule a call and discuss next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-[#3A9387] hover:bg-[#194C4C] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  asChild
                >
                  <a href="/">
                    <i className="fas fa-home mr-2"></i>
                    Return Home
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#3A9387] text-[#3A9387] hover:bg-[#3A9387] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="/properties">
                    <i className="fas fa-search mr-2"></i>
                    View Properties
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop&q=80"
            alt="Register your property"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#194C4C]/90 via-[#3A9387]/70 to-[#194C4C]/90"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 opacity-0 animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <i className="fas fa-key text-[#F79120]"></i>
                <span className="text-white text-sm font-medium">Property Registration</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fadeInUp">
              Register Your Property
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-200 leading-relaxed">
              Interested in having Authentik Homes manage your Zanzibar property? Fill out the form below and we'll be in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6">
              Why Choose Authentik Homes?
            </h2>
            <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#DADFDB] hover:border-[#3A9387]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#3A9387] to-[#194C4C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className={`fas ${benefit.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-[#194C4C] mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-[#194C4C]/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Form Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border-2 border-[#DADFDB]">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3A9387]/10 rounded-2xl mb-6">
                  <i className="fas fa-file-alt text-2xl text-[#3A9387]"></i>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#194C4C] mb-4">
                  Property Registration Form
                </h2>
                <p className="text-base md:text-lg text-[#194C4C]/70">Please fill in all required fields marked with *</p>
                <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full mt-6"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Personal Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#3A9387] rounded-2xl flex items-center justify-center shadow-md">
                      <i className="fas fa-user text-white text-lg"></i>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#194C4C]">Your Details</h3>
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-[#194C4C] font-medium text-base mb-2 block">Full Name *</Label>
                    <Input 
                      id="name"
                      name="name"
                      required 
                      className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base" 
                      placeholder="Christine Kawira"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#194C4C] font-medium text-base mb-2 block">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      required 
                      className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base" 
                      placeholder="kawira@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#194C4C] font-medium text-base mb-2 block">Phone / WhatsApp *</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      required 
                      className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base" 
                      placeholder="+255 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Property Info */}
                <div className="space-y-6 pt-8 border-t-2 border-[#DADFDB]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#F79120] rounded-2xl flex items-center justify-center shadow-md">
                      <i className="fas fa-building text-white text-lg"></i>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#194C4C]">Property Details</h3>
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-[#194C4C] font-medium text-base mb-2 block">Property Location *</Label>
                    <Select name="location" required>
                      <SelectTrigger className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="type" className="text-[#194C4C] font-medium text-base mb-2 block">Property Type *</Label>
                    <Select name="type" required>
                      <SelectTrigger className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="units" className="text-[#194C4C] font-medium text-base mb-2 block">Units</Label>
                      <Input
                        id="units"
                        name="units"
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bedrooms" className="text-[#194C4C] font-medium text-base mb-2 block">Bedrooms</Label>
                      <Input
                        id="bedrooms"
                        name="bedrooms"
                        type="number"
                        min="1"
                        className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base"
                        placeholder="2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bathrooms" className="text-[#194C4C] font-medium text-base mb-2 block">Bathrooms</Label>
                      <Input
                        id="bathrooms"
                        name="bathrooms"
                        type="number"
                        min="1"
                        className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block text-[#194C4C] font-medium text-base">
                      Is your property already listed? *
                    </Label>
                    <RadioGroup name="listed" defaultValue="no" className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="listed-yes" className="border-[#DADFDB]" />
                        <Label htmlFor="listed-yes" className="font-normal text-[#194C4C]/70">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="listed-no" className="border-[#DADFDB]" />
                        <Label htmlFor="listed-no" className="font-normal text-[#194C4C]/70">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="listing-link" className="text-[#194C4C] font-medium text-base mb-2 block">
                      Existing Listing Link (if applicable)
                    </Label>
                    <Input
                      id="listing-link"
                      name="listing-link"
                      type="url"
                      placeholder="https://airbnb.com/..."
                      className="h-12 border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes" className="text-[#194C4C] font-medium text-base mb-2 block">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Tell us anything else about your property or goals..."
                      className="min-h-[140px] border-2 border-[#DADFDB] focus:border-[#3A9387] focus:ring-[#3A9387] rounded-xl text-base"
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 bg-gradient-to-r from-[#3A9387] to-[#194C4C] hover:from-[#194C4C] hover:to-[#3A9387] text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg rounded-full"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Submit Registration
                  </Button>

                  <p className="text-sm text-center text-[#194C4C]/60 mt-6">
                    <i className="fas fa-lock text-[#3A9387] mr-1"></i>
                    By submitting, you agree to be contacted by Authentik Homes about your property.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Help Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#F79120] to-[#E17C47] rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <i className="fas fa-question-circle text-5xl md:text-6xl text-white mb-6"></i>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
                Have Questions?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Our team is here to help. Reach out anytime via WhatsApp.
              </p>
              <a
                href="https://wa.me/255674593918"
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

export default RegisterProperty;