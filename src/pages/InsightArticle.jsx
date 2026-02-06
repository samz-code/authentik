import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { ArrowLeft, Calendar, Clock, Tag, Twitter, Linkedin, Facebook, Eye, Bookmark } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Article database with complete data
const articlesData = {
  "why-most-rebrands-fail": {
    title: "Why Most Rebrands Fail (And How to Make Yours Succeed)",
    category: "Branding",
    date: "January 15, 2024",
    readTime: "5 min read",
    views: "2.4K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Brand Strategists",
      avatar: "AT"
    },
    tableOfContents: [
      { id: "problem", title: "The Problem with Most Rebrands" },
      { id: "questions", title: "Three Questions Before You Rebrand" },
      { id: "approach", title: "The Authentik Approach to Rebranding" },
      { id: "conclusion", title: "The Bottom Line" }
    ],
    content: `
      <p class="lead">Rebranding is more than a new logo. It's a strategic realignment of who you are, who you serve, and how you show up. Yet most rebrands fail to deliver the transformation businesses hope for. Here's why — and how to make yours different.</p>

      <h2 id="problem">The Problem with Most Rebrands</h2>
      <p>Most companies approach rebranding as a cosmetic exercise. They update their logo, refresh their color palette, maybe redesign their website. Then they wonder why nothing changed.</p>
      
      <p>The issue isn't the execution. It's the foundation. Without strategic clarity about <em>why</em> you're rebranding and <em>what</em> needs to change, you're just rearranging deck chairs.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=600&fit=crop" alt="Brand strategy planning" />
        <p class="caption">Strategic planning is the foundation of successful rebranding</p>
      </div>

      <h2 id="questions">Three Questions Before You Rebrand</h2>
      <p>Before you touch a single pixel, answer these:</p>

      <h3>1. Has Your Strategy Changed?</h3>
      <p>If you're serving the same audience, solving the same problems, and delivering the same value — you probably don't need a rebrand. You need better execution of your current brand.</p>

      <h3>2. Is Your Current Brand Hindering Growth?</h3>
      <p>This is the real test. Are you losing deals because prospects don't understand what you do? Are you attracting the wrong customers? Does your brand fail to communicate your actual value?</p>

      <h3>3. Are You Ready to Follow Through?</h3>
      <p>A rebrand isn't a one-time project. It's a commitment to show up consistently with your new identity across every touchpoint. Half measures create confusion.</p>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>A successful rebrand requires alignment across strategy, design, and execution. Missing any one of these pillars leads to inconsistency and confusion in the market.</p>
      </div>

      <h2 id="approach">The Authentik Approach to Rebranding</h2>
      <p>When we work with clients on rebranding, we start with strategy, not style:</p>

      <div class="process-steps">
        <div class="step-item">
          <div class="step-icon">
            <i class="fas fa-search"></i>
          </div>
          <div class="step-content">
            <h4>Strategic Audit</h4>
            <p>We assess where you are, where you want to go, and what's blocking you.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-icon">
            <i class="fas fa-bullseye"></i>
          </div>
          <div class="step-content">
            <h4>Positioning Work</h4>
            <p>We clarify who you serve, what makes you different, and why it matters.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-icon">
            <i class="fas fa-palette"></i>
          </div>
          <div class="step-content">
            <h4>Visual Translation</h4>
            <p>Only then do we develop the visual identity that expresses that strategy.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-icon">
            <i class="fas fa-map-marked-alt"></i>
          </div>
          <div class="step-content">
            <h4>Implementation Plan</h4>
            <p>We build a roadmap for rolling out the rebrand consistently across all channels.</p>
          </div>
        </div>
      </div>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop" alt="Team collaboration on brand strategy" />
        <p class="caption">Collaborative approach ensures buy-in across your organization</p>
      </div>

      <h2 id="conclusion">The Bottom Line</h2>
      <p>A rebrand should be a strategic evolution, not a visual facelift. Get the strategy right first, and the design will follow. Skip that step, and you'll join the long list of companies that spent six figures on a new logo and wondered why nothing changed.</p>

      <blockquote>
        <p>"The most successful rebrands aren't about changing how you look. They're about clarifying who you are."</p>
      </blockquote>

      <p>If you're considering a rebrand, start with the hard questions. The answers will tell you whether you need a rebrand — or just better brand execution.</p>
    `,
    relatedArticles: [
      {
        title: "The Hidden Cost of Inconsistent Brand Voice",
        slug: "hidden-cost-inconsistent-brand-voice",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop"
      },
      {
        title: "Building a Brand That Lasts: The 5-Year Framework",
        slug: "building-brand-that-lasts",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
      },
      {
        title: "The Art of Strategic Simplicity in Brand Design",
        slug: "strategic-simplicity-brand-design",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
      }
    ]
  },
  "hidden-cost-inconsistent-brand-voice": {
    title: "The Hidden Cost of Inconsistent Brand Voice",
    category: "Strategy",
    date: "December 10, 2023",
    readTime: "4 min read",
    views: "1.8K",
    isPublished: false,
    featuredImage: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Brand Strategists",
      avatar: "AT"
    }
  },
  "property-management-zanzibar": {
    title: "Property Management in Zanzibar: What Owners Need to Know",
    category: "Hospitality",
    date: "November 20, 2023",
    readTime: "6 min read",
    views: "3.1K",
    isPublished: false,
    featuredImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Property Specialists",
      avatar: "AT"
    }
  },
  "authenticity-growth-strategy": {
    title: "Authenticity as a Growth Strategy",
    category: "Growth",
    date: "October 15, 2023",
    readTime: "7 min read",
    views: "4.2K",
    isPublished: false,
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Growth Strategists",
      avatar: "AT"
    }
  }
};

const TableOfContents = ({ items, activeId }) => {
  return (
    <div className="hidden lg:block sticky top-24">
      <div className="bg-[#DADFDB] rounded-2xl p-6">
        <h4 className="font-serif text-lg font-semibold text-[#194C4C] mb-4">
          Table of Contents
        </h4>
        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block text-sm py-2 px-3 rounded-lg transition-all duration-300 ${
                    activeId === item.id
                      ? "bg-[#3A9387] text-white font-semibold"
                      : "text-[#194C4C]/70 hover:bg-white hover:text-[#3A9387]"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#DADFDB] z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#3A9387] to-[#F79120] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const InsightArticle = () => {
  const { slug } = useParams();
  const article = articlesData[slug];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!article?.isPublished || !article?.tableOfContents) return;

    const handleScroll = () => {
      const sections = article.tableOfContents.map(item => item.id);
      const current = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  // 404 State
  if (!article) {
    return (
      <Layout>
        <SectionWrapper>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center py-20">
              <h1 className="font-serif text-4xl font-semibold text-[#194C4C] mb-4">
                Article Not Found
              </h1>
              <p className="text-lg text-[#194C4C]/70 mb-8">
                The article you're looking for doesn't exist.
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-[#3A9387] hover:text-[#E17C47] font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </Layout>
    );
  }

  // Coming Soon State
  if (!article.isPublished) {
    return (
      <Layout>
        <SectionWrapper>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-[#3A9387] hover:text-[#E17C47] font-semibold mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Insights
              </Link>

              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden mb-8 shadow-xl">
                <img 
                  src={article.featuredImage} 
                  alt={article.title}
                  className="w-full h-64 sm:h-96 object-cover"
                />
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-xl border-2 border-[#DADFDB]">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F79120]/10 rounded-full mb-6">
                  <i className="fas fa-pen-fancy text-3xl text-[#F79120]"></i>
                </div>
                
                <span className="inline-block px-4 py-2 bg-[#F79120] text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
                  Coming Soon
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#194C4C] mb-6">
                  {article.title}
                </h1>

                <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                  <span className="inline-flex items-center gap-2 text-sm text-[#194C4C]/60">
                    <Tag className="w-4 h-4" />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-[#194C4C]/60">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A9387]">
                    <Eye className="w-4 h-4" />
                    {article.views} views
                  </span>
                </div>

                <p className="text-lg text-[#194C4C]/70 mb-8 max-w-2xl mx-auto">
                  This article is currently being written by our team. Check back soon for valuable insights on this topic.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/insights"
                    className="inline-flex items-center justify-center gap-2 bg-[#3A9387] hover:bg-[#194C4C] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Browse Other Articles
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  <a
                    href="https://wa.me/255777296026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Ask Us Anything
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Layout>
    );
  }

  // Published Article
  return (
    <Layout>
      <ReadingProgress />

      {/* Featured Image Hero */}
      <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] overflow-hidden">
        <img 
          src={article.featuredImage} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#194C4C]/95 via-[#194C4C]/70 to-[#194C4C]/30"></div>
        
        {/* Title Overlay */}
        <div className="relative h-full flex items-end">
          <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl">
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-white/90 hover:text-white font-semibold mb-6 sm:mb-8 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Insights
                </Link>
                
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#F79120] bg-[#F79120]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 sm:mb-8">
                  <Tag className="w-4 h-4" />
                  {article.category}
                </span>
                
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.2] sm:leading-tight max-w-4xl">
                  {article.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Meta & Content */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Meta Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b-2 border-[#DADFDB]">
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#3A9387] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">{article.author.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-base text-[#194C4C]">{article.author.name}</p>
                    <p className="text-sm text-[#194C4C]/60">{article.author.role}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <span className="flex items-center gap-2 text-sm text-[#194C4C]/60">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-[#194C4C]/60">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#3A9387]">
                    <Eye className="w-4 h-4" />
                    {article.views} views
                  </span>
                </div>
              </div>

              {/* Share Bar */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#194C4C]/60">Share:</span>
                  <button className="w-10 h-10 bg-[#DADFDB] hover:bg-[#3A9387] rounded-full flex items-center justify-center transition-all duration-300 group">
                    <Twitter className="w-4 h-4 text-[#194C4C] group-hover:text-white transition-colors" />
                  </button>
                  <button className="w-10 h-10 bg-[#DADFDB] hover:bg-[#3A9387] rounded-full flex items-center justify-center transition-all duration-300 group">
                    <Linkedin className="w-4 h-4 text-[#194C4C] group-hover:text-white transition-colors" />
                  </button>
                  <button className="w-10 h-10 bg-[#DADFDB] hover:bg-[#3A9387] rounded-full flex items-center justify-center transition-all duration-300 group">
                    <Facebook className="w-4 h-4 text-[#194C4C] group-hover:text-white transition-colors" />
                  </button>
                </div>
                
                <button className="flex items-center gap-2 text-sm font-semibold text-[#3A9387] hover:text-[#E17C47] transition-colors">
                  <Bookmark className="w-4 h-4" />
                  <span className="hidden sm:inline">Save for Later</span>
                </button>
              </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Article Content */}
              <div className="lg:col-span-8">
                <article 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t-2 border-[#DADFDB]">
                  <p className="text-sm font-semibold text-[#194C4C]/60 uppercase tracking-wider mb-4">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#DADFDB] text-[#194C4C] text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="px-4 py-2 bg-[#DADFDB] text-[#194C4C] text-sm font-medium rounded-full">
                      Brand Strategy
                    </span>
                    <span className="px-4 py-2 bg-[#DADFDB] text-[#194C4C] text-sm font-medium rounded-full">
                      Marketing
                    </span>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                {article.tableOfContents && (
                  <TableOfContents items={article.tableOfContents} activeId={activeSection} />
                )}
              </aside>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#3A9387] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-6 sm:mb-8">
                <i className="fas fa-comments text-3xl sm:text-4xl text-[#F79120]"></i>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your brand strategy and create something authentic that drives real growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Book a Strategy Call</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
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
        </div>
      </SectionWrapper>

      {/* Related Articles */}
      {article.relatedArticles && (
        <SectionWrapper>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#194C4C] mb-8 sm:mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {article.relatedArticles.map((related, index) => (
                  <Link
                    key={related.slug}
                    to={`/insights/${related.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#3A9387] transform hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#3A9387] bg-[#3A9387]/10 px-3 py-1.5 rounded-full mb-3">
                        <Tag className="w-3 h-3" />
                        {related.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#194C4C] group-hover:text-[#3A9387] transition-colors leading-snug">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}

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

        .article-content {
          color: #194C4C;
        }

        .article-content .lead {
          font-size: 1.375rem;
          line-height: 1.8;
          color: #194C4C;
          opacity: 0.9;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .article-content h2 {
          font-family: serif;
          font-size: 2.25rem;
          font-weight: 600;
          color: #194C4C;
          margin-top: 4rem;
          margin-bottom: 2rem;
          line-height: 1.3;
          scroll-margin-top: 100px;
        }

        .article-content h3 {
          font-family: serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: #3A9387;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }

        .article-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #194C4C;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .article-content p {
          font-size: 1.25rem;
          line-height: 1.9;
          margin-bottom: 2rem;
          color: #194C4C;
          opacity: 0.85;
        }

        .article-content strong {
          color: #194C4C;
          font-weight: 600;
        }

        .article-content em {
          color: #3A9387;
          font-style: italic;
        }

        .article-content ol,
        .article-content ul {
          margin-bottom: 2.5rem;
          padding-left: 2rem;
        }

        .article-content li {
          font-size: 1.25rem;
          line-height: 1.9;
          margin-bottom: 1rem;
          color: #194C4C;
          opacity: 0.85;
        }

        .article-content blockquote {
          border-left: 5px solid #F79120;
          background: #DADFDB;
          padding: 2rem 2.5rem;
          margin: 3.5rem 0;
          border-radius: 0 1.25rem 1.25rem 0;
        }

        .article-content blockquote p {
          font-family: serif;
          font-size: 1.5rem;
          font-style: italic;
          color: #194C4C;
          margin: 0;
          line-height: 1.7;
        }

        .article-content .image-block {
          margin: 3rem 0;
        }

        .article-content .image-block img {
          width: 100%;
          border-radius: 1.5rem;
          margin-bottom: 1rem;
        }

        .article-content .caption {
          text-align: center;
          font-size: 0.9375rem;
          color: #194C4C;
          opacity: 0.6;
          font-style: italic;
          margin: 0;
        }

        .article-content .callout-box {
          background: linear-gradient(135deg, #3A9387 0%, #194C4C 100%);
          color: white;
          padding: 2rem 2.5rem;
          border-radius: 1.5rem;
          margin: 3rem 0;
        }

        .article-content .callout-box h4 {
          color: #F79120;
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .article-content .callout-box p {
          color: white;
          opacity: 0.95;
          margin: 0;
        }

        .article-content .process-steps {
          display: grid;
          gap: 2rem;
          margin: 2.5rem 0;
        }

        .article-content .step-item {
          display: flex;
          gap: 1.5rem;
          padding: 2rem;
          background: white;
          border: 2px solid #DADFDB;
          border-radius: 1.25rem;
          transition: all 0.3s ease;
        }

        .article-content .step-item:hover {
          border-color: #3A9387;
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(58, 147, 135, 0.1);
        }

        .article-content .step-icon {
          flex-shrink: 0;
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, #3A9387 0%, #194C4C 100%);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
        }

        .article-content .step-content h4 {
          font-size: 1.375rem;
          font-weight: 600;
          color: #194C4C;
          margin: 0 0 0.75rem 0;
        }

        .article-content .step-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #194C4C;
          opacity: 0.85;
          margin: 0;
        }

        @media (max-width: 640px) {
          .article-content .process-steps {
            gap: 1.5rem;
          }

          .article-content .step-item {
            flex-direction: column;
            padding: 1.5rem;
            gap: 1rem;
          }

          .article-content .step-icon {
            width: 3rem;
            height: 3rem;
            font-size: 1.25rem;
          }

          .article-content .step-content h4 {
            font-size: 1.25rem;
          }

          .article-content .step-content p {
            font-size: 1rem;
          }
        }

        @media (max-width: 640px) {
          .article-content .lead {
            font-size: 1.125rem;
          }

          .article-content h2 {
            font-size: 1.75rem;
            margin-top: 3rem;
          }

          .article-content h3 {
            font-size: 1.375rem;
            margin-top: 2.5rem;
          }

          .article-content p,
          .article-content li {
            font-size: 1.0625rem;
            margin-bottom: 1.5rem;
          }

          .article-content blockquote {
            padding: 1.5rem 1.75rem;
            margin: 2.5rem 0;
          }

          .article-content blockquote p {
            font-size: 1.25rem;
          }

          .article-content .callout-box {
            padding: 1.5rem 1.75rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default InsightArticle;