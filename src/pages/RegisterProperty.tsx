import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would submit to a backend
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <Layout>
        {/* Success Message */}
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <i className="fas fa-check-circle text-4xl text-green-500"></i>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Thank You!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We've received your property registration. Our team will contact
                you within 48 hours to schedule a call and discuss next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-teal-700 hover:bg-teal-800"
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
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-900/70 to-teal-900/90"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 opacity-0 animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <i className="fas fa-key text-yellow-500"></i>
                <span className="text-white text-sm font-medium">Property Registration</span>
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fadeInUp">
              Register Your Property
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-200">
              Interested in having Authentik Homes manage your Zanzibar property? Fill out the form below and we'll be in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Why Choose Authentik Homes?
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${benefit.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-2 border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <i className="fas fa-file-alt text-2xl text-teal-700"></i>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                  Property Registration Form
                </h2>
                <p className="text-gray-600">Please fill in all required fields marked with *</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
                      <i className="fas fa-user text-white"></i>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900">Your Details</h3>
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                    <Input 
                      id="name" 
                      required 
                      className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600" 
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600" 
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone / WhatsApp *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600" 
                      placeholder="+255 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Property Info */}
                <div className="space-y-4 pt-6 border-t-2 border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-building text-white"></i>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900">Property Details</h3>
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-gray-700 font-medium">Property Location *</Label>
                    <Select required>
                      <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location.toLowerCase()}>
                            <i className="fas fa-map-marker-alt text-teal-600 mr-2"></i>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="type" className="text-gray-700 font-medium">Property Type *</Label>
                    <Select required>
                      <SelectTrigger className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            <i className="fas fa-home text-teal-600 mr-2"></i>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="units" className="text-gray-700 font-medium">Units</Label>
                      <Input
                        id="units"
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bedrooms" className="text-gray-700 font-medium">Bedrooms</Label>
                      <Input
                        id="bedrooms"
                        type="number"
                        min="1"
                        className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                        placeholder="2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bathrooms" className="text-gray-700 font-medium">Bathrooms</Label>
                      <Input
                        id="bathrooms"
                        type="number"
                        min="1"
                        className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block text-gray-700 font-medium">
                      Is your property already listed? *
                    </Label>
                    <RadioGroup defaultValue="no" className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="listed-yes" className="border-gray-300" />
                        <Label htmlFor="listed-yes" className="font-normal text-gray-700">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="listed-no" className="border-gray-300" />
                        <Label htmlFor="listed-no" className="font-normal text-gray-700">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="listing-link" className="text-gray-700 font-medium">
                      Existing Listing Link (if applicable)
                    </Label>
                    <Input
                      id="listing-link"
                      type="url"
                      placeholder="https://airbnb.com/..."
                      className="mt-2 h-12 border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes" className="text-gray-700 font-medium">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Tell us anything else about your property or goals..."
                      className="mt-2 min-h-[120px] border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-800 hover:to-teal-700 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Submit Registration
                  </Button>

                  <p className="text-sm text-center text-gray-500 mt-4">
                    <i className="fas fa-lock text-teal-600 mr-1"></i>
                    By submitting, you agree to be contacted by Authentik Homes about your property.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <i className="fas fa-question-circle text-5xl text-white mb-4"></i>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-white/90 mb-6">
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