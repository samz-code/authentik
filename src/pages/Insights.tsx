import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { ArrowRight, Calendar, Tag, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Branding", "Strategy", "Hospitality", "Growth"];

const insights = [
  {
    id: 1,
    title: 'Why Most Brands Don\'t Convert — Even With "Good Marketing"',
    excerpt:
      "Most brands post consistently, run ads, and have a social presence. Yet conversion remains low. The problem isn't effort — it's alignment.",
    category: "Strategy",
    date: "February 2024",
    readTime: "6 min read",
    slug: "why-brands-dont-convert",
    featured: true,
  },
  {
    id: 2,
    title: "Authenticity Is Not a Vibe — It's a Strategic Advantage",
    excerpt:
      "Authenticity has been overused to the point of misunderstanding. In reality, it's neither soft nor abstract. It is strategic.",
    category: "Strategy",
    date: "February 2024",
    readTime: "5 min read",
    slug: "authenticity-strategic-advantage",
    featured: false,
  },
  {
    id: 3,
    title: "The Difference Between Being Visible and Being Positioned",
    excerpt:
      "Visibility is easy to measure. Positioning is not. Most brands chase the first and neglect the second, struggling to convert attention into revenue.",
    category: "Branding",
    date: "January 2024",
    readTime: "5 min read",
    slug: "visible-vs-positioned",
    featured: false,
  },
  {
    id: 4,
    title: "Luxury Brands Don't Shout — Here's What They Do Instead",
    excerpt:
      "In most markets, marketing has become louder. Luxury brands move in the opposite direction. They don't compete for attention. They control perception.",
    category: "Branding",
    date: "January 2024",
    readTime: "6 min read",
    slug: "luxury-brands-dont-shout",
    featured: true,
  },
  {
    id: 5,
    title: "Why Most Properties in Zanzibar Are Underperforming Online",
    excerpt:
      "Zanzibar has beautiful properties, yet many consistently underperform online. The reason is rarely the property itself. It is positioning.",
    category: "Hospitality",
    date: "January 2024",
    readTime: "6 min read",
    slug: "zanzibar-properties-underperforming",
    featured: false,
  },
  {
    id: 6,
    title: "WhatsApp Is the Most Underutilized Conversion Tool in East Africa",
    excerpt:
      "In East Africa, WhatsApp is where business happens, decisions are made, and trust is built. Yet most brands treat it as an afterthought.",
    category: "Growth",
    date: "January 2024",
    readTime: "5 min read",
    slug: "whatsapp-conversion-tool",
    featured: false,
  },
  {
    id: 7,
    title: "Marketing Isn't Broken — Your Foundation Is",
    excerpt:
      "Marketing is often blamed when growth stalls. But marketing rarely fails on its own. Brands invest in marketing before they invest in foundations.",
    category: "Strategy",
    date: "January 2024",
    readTime: "6 min read",
    slug: "marketing-foundation",
    featured: false,
  },
  {
    id: 8,
    title: "From Listings to Assets: Treating Property as a Business",
    excerpt:
      "Many property owners think they are in hospitality. In reality, they are in asset management. The difference between a listing and an asset is intention.",
    category: "Hospitality",
    date: "January 2024",
    readTime: "7 min read",
    slug: "listings-to-assets",
    featured: false,
  },
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = activeCategory === "All" 
    ? insights 
    : insights.filter(insight => insight.category === activeCategory);

  const featuredInsight = insights.find(i => i.featured);

  return (
    <Layout>
      {/* PageIntro with Background */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1456324463128-7ff6903988d8?w=1920&h=600&fit=crop&q=80"
            alt="Insights background"
            className="w-full h-full object-cover"
          />
          {/* Brand color overlay with opacity */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#DADFDB]/95 via-[#DADFDB]/90 to-[#DADFDB]/85"></div>
          
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #3A9387 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Compact Page Intro Content */}
        <section className="relative z-10 pt-24 pb-8 md:pt-28 md:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#194C4C] mb-4">
                Insights
              </h1>
              <p className="text-lg md:text-xl text-[#194C4C]/70 leading-relaxed">
                Thought leadership on branding, strategy, and growth. Not a blog — a collection of ideas worth your time.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Bar */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { icon: BookOpen, value: `${insights.length}`, label: "Articles" },
              { icon: Tag, value: "4", label: "Categories" },
              { icon: TrendingUp, value: "10K+", label: "Readers" },
              { icon: Calendar, value: "Weekly", label: "Updates" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-white rounded-2xl shadow-md border-2 border-[#DADFDB] hover:shadow-xl hover:border-[#3A9387] transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="w-14 h-14 bg-[#3A9387]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#3A9387]" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-[#194C4C] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-[#194C4C]/60 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Article */}
      {featuredInsight && (
        <SectionWrapper background="neutral">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-[#F79120] text-white text-xs font-semibold tracking-wider uppercase rounded-full">
                  Featured Article
                </span>
              </div>
              
              <Link
                to={`/insights/${featuredInsight.slug}`}
                className="group block bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#3A9387] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-8 md:p-12 lg:p-16">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-[#3A9387] bg-[#3A9387]/10 px-4 py-2 rounded-full">
                      <Tag className="w-4 h-4" />
                      {featuredInsight.category}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#194C4C]/60">
                      <Calendar className="w-4 h-4" />
                      {featuredInsight.date}
                    </span>
                    <span className="text-sm text-[#194C4C]/60">
                      {featuredInsight.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-6 group-hover:text-[#3A9387] transition-colors">
                    {featuredInsight.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-[#194C4C]/70 leading-relaxed mb-8">
                    {featuredInsight.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-base font-semibold text-[#3A9387] group-hover:text-[#E17C47] transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Bottom Gradient Bar */}
                <div className="h-2 bg-gradient-to-r from-[#3A9387] to-[#F79120]"></div>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Main Articles Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-8">
                Browse by Category
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-[#3A9387] text-white shadow-lg scale-105"
                        : "bg-white text-[#194C4C] border-2 border-[#DADFDB] hover:border-[#3A9387] hover:scale-105"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredInsights.map((insight, index) => (
                <Link
                  key={insight.id}
                  to={`/insights/${insight.slug}`}
                  className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#3A9387] transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3A9387] bg-[#3A9387]/10 px-3 py-1.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {insight.category}
                      </span>
                      <span className="text-xs text-[#194C4C]/60">
                        {insight.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#194C4C] mb-4 group-hover:text-[#3A9387] transition-colors line-clamp-2">
                      {insight.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-base text-[#194C4C]/70 leading-relaxed mb-6 line-clamp-3">
                      {insight.excerpt}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-[#194C4C]/60 mb-6">
                      <Calendar className="w-4 h-4" />
                      {insight.date}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#3A9387] opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="h-1 bg-gradient-to-r from-[#3A9387] to-[#F79120] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#3A9387] to-[#3A9387]/90 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <i className="fas fa-envelope-open-text text-4xl text-[#F79120]"></i>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                  Get Insights Delivered
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join our newsletter for weekly insights on branding, strategy, and growth. No fluff. Just ideas worth your time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-4 rounded-full text-[#194C4C] placeholder:text-[#194C4C]/50 focus:outline-none focus:ring-2 focus:ring-[#F79120]"
                  />
                  <button className="inline-flex items-center justify-center gap-2 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Layout>
  );
};

export default Insights;