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
    title: "Why Most Rebrands Fail (And How to Make Yours Succeed)",
    excerpt:
      "Rebranding is more than a new logo. It's a strategic realignment of who you are, who you serve, and how you show up. Here's why most get it wrong.",
    category: "Branding",
    date: "January 2024",
    readTime: "5 min read",
    slug: "why-most-rebrands-fail",
    featured: true,
  },
  {
    id: 2,
    title: "The Hidden Cost of Inconsistent Brand Voice",
    excerpt:
      "Every touchpoint that sounds different from the last costs you trust. Here's how to audit and fix your brand voice across channels.",
    category: "Strategy",
    date: "December 2023",
    readTime: "4 min read",
    slug: "hidden-cost-inconsistent-brand-voice",
    featured: false,
  },
  {
    id: 3,
    title: "Property Management in Zanzibar: What Owners Need to Know",
    excerpt:
      "The short-term rental market in Zanzibar is growing. But success requires more than a listing. Here's what separates profitable properties from empty ones.",
    category: "Hospitality",
    date: "November 2023",
    readTime: "6 min read",
    slug: "property-management-zanzibar",
    featured: false,
  },
  {
    id: 4,
    title: "Authenticity as a Growth Strategy",
    excerpt:
      "In a world of manufactured personas and borrowed aesthetics, authenticity has become rare — and valuable. Here's how to leverage it.",
    category: "Growth",
    date: "October 2023",
    readTime: "7 min read",
    slug: "authenticity-growth-strategy",
    featured: true,
  },
  {
    id: 5,
    title: "Building a Brand That Lasts: The 5-Year Framework",
    excerpt:
      "Short-term tactics won't build lasting brands. Here's a framework for building brand equity that compounds over time.",
    category: "Strategy",
    date: "September 2023",
    readTime: "8 min read",
    slug: "building-brand-that-lasts",
    featured: false,
  },
  {
    id: 6,
    title: "The Art of Strategic Simplicity in Brand Design",
    excerpt:
      "The best brands aren't the most complex. They're the clearest. Learn how to strip away the noise and reveal what truly matters.",
    category: "Branding",
    date: "August 2023",
    readTime: "5 min read",
    slug: "strategic-simplicity-brand-design",
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
      <PageIntro
        title="Insights"
        subtitle="Thought leadership on branding, strategy, and growth. Not a blog — a collection of ideas worth your time."
      />

      {/* Stats Bar */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, value: `${insights.length}+`, label: "Articles" },
              { icon: Tag, value: "4", label: "Categories" },
              { icon: TrendingUp, value: "10K+", label: "Readers" },
              { icon: Calendar, value: "Weekly", label: "Updates" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-md"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DADFDB] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#3A9387]" />
                  </div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#194C4C] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-[#194C4C]/60">
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
              <div className="text-center mb-6 sm:mb-8">
                <span className="inline-block px-4 py-2 bg-[#F79120] text-white text-xs font-semibold tracking-wider uppercase rounded-full">
                  Featured Article
                </span>
              </div>
              
              <Link
                to={`/insights/${featuredInsight.slug}`}
                className="group block bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#3A9387] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6 sm:p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#3A9387] bg-[#3A9387]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <Tag className="w-3 h-3 sm:w-4 sm:h-4" />
                      {featuredInsight.category}
                    </span>
                    <span className="flex items-center gap-2 text-xs sm:text-sm text-[#194C4C]/60">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {featuredInsight.date}
                    </span>
                    <span className="text-xs sm:text-sm text-[#194C4C]/60">
                      {featuredInsight.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194C4C] mb-4 sm:mb-6 group-hover:text-[#3A9387] transition-colors">
                    {featuredInsight.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg md:text-xl text-[#194C4C]/70 leading-relaxed mb-6 sm:mb-8">
                    {featuredInsight.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-[#3A9387] group-hover:text-[#E17C47] transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
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
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#194C4C] mb-6 sm:mb-8">
                Browse by Category
              </h2>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
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
                  <div className="p-6 sm:p-8">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#3A9387] bg-[#3A9387]/10 px-3 py-1.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {insight.category}
                      </span>
                      <span className="text-xs text-[#194C4C]/60">
                        {insight.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-[#194C4C] mb-3 sm:mb-4 group-hover:text-[#3A9387] transition-colors line-clamp-2">
                      {insight.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-[#194C4C]/70 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                      {insight.excerpt}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#194C4C]/60 mb-4">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
            <div className="bg-gradient-to-r from-[#3A9387] to-[#3A9387]/90 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full -mr-24 sm:-mr-32 -mt-24 sm:-mt-32"></div>
              <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-white/10 rounded-full -ml-16 sm:-ml-24 -mb-16 sm:-mb-24"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                  <i className="fas fa-envelope-open-text text-2xl sm:text-3xl md:text-4xl text-[#F79120]"></i>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4">
                  Get Insights Delivered
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Join our newsletter for weekly insights on branding, strategy, and growth. No fluff. Just ideas worth your time.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-[#194C4C] placeholder:text-[#194C4C]/50 focus:outline-none focus:ring-2 focus:ring-[#F79120] text-sm sm:text-base"
                  />
                  <button className="inline-flex items-center justify-center gap-2 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
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