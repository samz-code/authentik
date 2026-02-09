import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { 
  ArrowLeft, Calendar, Clock, Tag, Eye, Bookmark, Share2, 
  TrendingUp, Target, Lightbulb, MessageCircle, BookOpen, Send
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaWhatsapp,
  FaEnvelope 
} from 'react-icons/fa';

// Complete Article Database - All 8 Articles
const articlesData = {
  "why-brands-dont-convert": {
    title: "Why Most Brands Don't Convert — Even With \"Good Marketing\"",
    category: "Strategy",
    date: "February 5, 2024",
    readTime: "6 min read",
    views: "3.2K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Brand Strategists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "issue", title: "The Real Issue Isn't Effort — It's Alignment" },
      { id: "good-marketing", title: "When \"Good Marketing\" Still Doesn't Convert" },
      { id: "visibility", title: "Visibility Is Not the Same as Positioning" },
      { id: "perspective", title: "Our Perspective at Authentik" },
      { id: "takeaway", title: "The Practical Takeaway" }
    ],
    content: `
      <p class="lead">Most brands today are doing something. They post consistently. They run ads. They have a logo, a website, and a social presence. And yet — conversion remains low. Leads feel unqualified. Engagement looks decent but doesn't translate into revenue. Marketing feels expensive, exhausting, and unpredictable.</p>

      <p>The common assumption is that the problem is execution. It rarely is.</p>

      <h2 id="issue">The Real Issue Isn't Effort — It's Alignment</h2>
      <p>What we see repeatedly is this: Brands invest in visibility before they invest in clarity.</p>
      
      <p>They focus on:</p>
      <ul>
        <li>More content</li>
        <li>Better ads</li>
        <li>More platforms</li>
      </ul>

      <p>Without first answering:</p>
      <ul>
        <li>What exactly do we stand for?</li>
        <li>Who are we actually speaking to?</li>
        <li>Why should the right client choose us — not just notice us?</li>
      </ul>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>Good marketing amplifies what already exists. If the foundation is unclear, marketing simply amplifies confusion.</p>
      </div>

      <h2 id="good-marketing">When "Good Marketing" Still Doesn't Convert</h2>
      <p>Here's what that looks like in practice:</p>
      <ul>
        <li>Visuals look polished, but feel generic</li>
        <li>Messaging sounds professional, but emotionally flat</li>
        <li>Content attracts attention, but not decision-makers</li>
        <li>Leads come in, but pricing conversations stall</li>
      </ul>

      <p>The audience isn't the problem. The tactics aren't the problem. The expression is misaligned.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=600&fit=crop" alt="Brand alignment strategy" />
        <p class="caption">Strategic alignment creates clarity that drives conversion</p>
      </div>

      <h2 id="visibility">Visibility Is Not the Same as Positioning</h2>
      <p>A brand can be visible and still be invisible to the right buyer.</p>
      
      <p>Positioning answers questions your audience is already asking:</p>
      <ul>
        <li>Is this for someone like me?</li>
        <li>Do they understand my world?</li>
        <li>Do they feel credible at my level?</li>
      </ul>

      <p>When positioning is clear:</p>
      <ul>
        <li>Conversion improves without increasing ad spend</li>
        <li>Pricing resistance decreases</li>
        <li>Decision cycles shorten</li>
      </ul>

      <h2 id="perspective">Our Perspective at Authentik</h2>
      <p>We don't start with tactics. We start with:</p>
      <ul>
        <li>Expression</li>
        <li>Clarity</li>
        <li>Strategic alignment</li>
      </ul>

      <p>Before content calendars. Before ads. Before influencers.</p>

      <p>When a brand knows how to express itself clearly — visually, verbally, and strategically — marketing stops feeling forced. It becomes obvious.</p>

      <h2 id="takeaway">The Practical Takeaway</h2>
      <p>If your marketing looks good but isn't converting, don't ask: "How do we do more?"</p>

      <blockquote>
        <p>Ask instead: What are we expressing — and is it aligned with who we want to attract?</p>
      </blockquote>

      <p>Conversion follows clarity.</p>

      <p>If you want support clarifying your brand's expression and positioning, Authentik works with brands ready to move beyond surface-level marketing.</p>
    `,
    relatedArticles: [
      {
        title: "Authenticity Is Not a Vibe — It's a Strategic Advantage",
        slug: "authenticity-strategic-advantage",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
      },
      {
        title: "The Difference Between Being Visible and Being Positioned",
        slug: "visible-vs-positioned",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
      },
      {
        title: "Marketing Isn't Broken — Your Foundation Is",
        slug: "marketing-foundation",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
      }
    ]
  },

  "authenticity-strategic-advantage": {
    title: "Authenticity Is Not a Vibe — It's a Strategic Advantage",
    category: "Strategy",
    date: "February 1, 2024",
    readTime: "5 min read",
    views: "2.8K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Brand Strategists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "meaning", title: "What Authenticity Actually Means in Business" },
      { id: "convert", title: "Why Authentic Brands Convert Better" },
      { id: "cost", title: "The Cost of Inauthentic Expression" },
      { id: "advantage", title: "Authenticity as a Competitive Advantage" },
      { id: "approach", title: "Our Approach at Authentik" }
    ],
    content: `
      <p class="lead">Authenticity has been overused to the point of misunderstanding. It's often treated as a tone, a personality trait, or a social media aesthetic. In reality, authenticity is neither soft nor abstract. It is strategic.</p>

      <h2 id="meaning">What Authenticity Actually Means in Business</h2>
      <p>Authenticity is alignment between:</p>
      <ul>
        <li>What you say</li>
        <li>How you look</li>
        <li>How you operate</li>
        <li>What your audience experiences</li>
      </ul>

      <p>When these elements are aligned, trust forms naturally. When they are not, friction appears — even if the audience can't explain why.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&h=600&fit=crop" alt="Brand authenticity strategy" />
        <p class="caption">Authentic alignment creates natural trust with your audience</p>
      </div>

      <h2 id="convert">Why Authentic Brands Convert Better</h2>
      <p>We see this across industries. Authentic brands:</p>
      <ul>
        <li>Attract fewer but higher-quality leads</li>
        <li>Command stronger pricing power</li>
        <li>Experience lower resistance during sales conversations</li>
        <li>Build long-term loyalty instead of one-off transactions</li>
      </ul>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>This isn't because they are louder or more emotional. It's because they are clear. Clarity creates safety. Safety creates trust. Trust drives conversion.</p>
      </div>

      <h2 id="cost">The Cost of Inauthentic Expression</h2>
      <p>Brands that are misaligned often experience:</p>
      <ul>
        <li>Constant rebranding</li>
        <li>Inconsistent messaging</li>
        <li>Over-reliance on discounts or promotions</li>
        <li>Marketing that works temporarily, then collapses</li>
      </ul>

      <p>Inauthenticity doesn't always look fake. Often, it looks confused.</p>

      <h2 id="advantage">Authenticity as a Competitive Advantage</h2>
      <p>In crowded markets, differentiation rarely comes from features. It comes from:</p>
      <ul>
        <li>Point of view</li>
        <li>Expression</li>
        <li>Intentional restraint</li>
      </ul>

      <p>Luxury brands understand this instinctively. They don't explain everything. They don't chase everyone. They don't dilute their voice to please the masses. They express clearly — and allow alignment to do the rest.</p>

      <h2 id="approach">Our Approach at Authentik</h2>
      <p>We don't ask brands to "be more authentic." We help them express what's already true — with clarity and intention.</p>

      <p>That means:</p>
      <ul>
        <li>Defining what matters and what doesn't</li>
        <li>Aligning visuals, voice, and strategy</li>
        <li>Removing noise instead of adding tactics</li>
      </ul>

      <blockquote>
        <p>Authenticity, expressed properly, becomes leverage.</p>
      </blockquote>

      <p>Authenticity isn't about being relatable to everyone. It's about being unmistakable to the right people.</p>

      <p>When expression is aligned, marketing becomes more efficient, growth becomes more predictable, and brands stop chasing and start attracting.</p>
    `,
    relatedArticles: [
      {
        title: "Why Most Brands Don't Convert — Even With \"Good Marketing\"",
        slug: "why-brands-dont-convert",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
      },
      {
        title: "Luxury Brands Don't Shout — Here's What They Do Instead",
        slug: "luxury-brands-dont-shout",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
      },
      {
        title: "The Difference Between Being Visible and Being Positioned",
        slug: "visible-vs-positioned",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
      }
    ]
  },

  "visible-vs-positioned": {
    title: "The Difference Between Being Visible and Being Positioned",
    category: "Branding",
    date: "January 28, 2024",
    readTime: "5 min read",
    views: "2.5K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Brand Strategists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "noise", title: "Visibility Without Positioning Creates Noise" },
      { id: "what-positioning-does", title: "What Positioning Actually Does" },
      { id: "why-avoid", title: "Why Many Brands Avoid Positioning" },
      { id: "perspective", title: "Our Perspective at Authentik" },
      { id: "takeaway", title: "The Practical Takeaway" }
    ],
    content: `
      <p class="lead">Visibility is easy to measure. Positioning is not. And that's why most brands chase the first and neglect the second. They count followers, impressions, reach, and engagement. Yet still struggle to convert attention into revenue.</p>

      <p>Because visibility answers where you are seen. Positioning answers how you are perceived.</p>

      <h2 id="noise">Visibility Without Positioning Creates Noise</h2>
      <p>A brand can be everywhere and still mean nothing.</p>

      <p>When positioning is unclear:</p>
      <ul>
        <li>Content attracts the wrong audience</li>
        <li>Inquiries feel misaligned</li>
        <li>Pricing conversations become uncomfortable</li>
        <li>Marketing effort increases while impact decreases</li>
      </ul>

      <p>The brand isn't failing to reach people. It's failing to signal who it is for.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&h=600&fit=crop" alt="Brand positioning strategy" />
        <p class="caption">Clear positioning cuts through the noise and attracts the right audience</p>
      </div>

      <h2 id="what-positioning-does">What Positioning Actually Does</h2>
      <p>Positioning creates instant recognition. It allows the right audience to subconsciously decide:</p>
      <ul>
        <li>This is for me</li>
        <li>This understands my level</li>
        <li>This feels aligned with my values and expectations</li>
      </ul>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>Strong positioning filters before the first conversation even happens. That's why well-positioned brands receive fewer but better inquiries, spend less time convincing, and close faster.</p>
      </div>

      <h2 id="why-avoid">Why Many Brands Avoid Positioning</h2>
      <p>Positioning requires:</p>
      <ul>
        <li>Making choices</li>
        <li>Saying no to certain audiences</li>
        <li>Letting go of mass appeal</li>
      </ul>

      <p>This feels risky — especially in emerging or competitive markets. But trying to appeal to everyone is far riskier.</p>

      <blockquote>
        <p>When a brand refuses to position itself, the market positions it instead — often inaccurately.</p>
      </blockquote>

      <h2 id="perspective">Our Perspective at Authentik</h2>
      <p>We don't chase attention. We define context.</p>

      <p>Before growth tactics, we clarify:</p>
      <ul>
        <li>Who this brand is not for</li>
        <li>What this brand does better than most</li>
        <li>What level of client this brand is built to serve</li>
      </ul>

      <p>Once positioning is clear, visibility becomes efficient — not exhausting.</p>

      <h2 id="takeaway">The Practical Takeaway</h2>
      <p>If your brand is visible but struggling to convert, ask: What are we signalling — and to whom?</p>

      <p>Positioning isn't about being louder. It's about being unmistakable.</p>

      <p>At Authentik, we help brands move from being seen to being chosen.</p>
    `,
    relatedArticles: [
      {
        title: "Why Most Brands Don't Convert — Even With \"Good Marketing\"",
        slug: "why-brands-dont-convert",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
      },
      {
        title: "Authenticity Is Not a Vibe — It's a Strategic Advantage",
        slug: "authenticity-strategic-advantage",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
      },
      {
        title: "Luxury Brands Don't Shout — Here's What They Do Instead",
        slug: "luxury-brands-dont-shout",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
      }
    ]
  },

  "luxury-brands-dont-shout": {
    title: "Luxury Brands Don't Shout — Here's What They Do Instead",
    category: "Branding",
    date: "January 22, 2024",
    readTime: "6 min read",
    views: "3.4K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Brand Strategists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "what-makes-luxury", title: "What Makes a Brand Feel \"Luxury\"" },
      { id: "silence", title: "The Role of Silence in Premium Positioning" },
      { id: "loud-marketing", title: "Why Loud Marketing Devalues Premium Brands" },
      { id: "restraint", title: "Strategic Restraint as a Growth Tool" },
      { id: "approach", title: "Our Approach at Authentik" }
    ],
    content: `
      <p class="lead">In most markets, marketing has become louder. More content. More urgency. More explanations. Luxury brands move in the opposite direction. They don't compete for attention. They control perception.</p>

      <h2 id="what-makes-luxury">What Makes a Brand Feel "Luxury"</h2>
      <p>Luxury is not price. It is:</p>
      <ul>
        <li>Restraint</li>
        <li>Confidence</li>
        <li>Intentional absence</li>
      </ul>

      <p>Luxury brands communicate selectively. They don't explain everything. They don't chase validation. Their message is clear enough to attract the right audience — and quiet enough to repel the wrong one.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5?w=1000&h=600&fit=crop" alt="Luxury brand positioning" />
        <p class="caption">Luxury is expressed through intentional restraint and strategic silence</p>
      </div>

      <h2 id="silence">The Role of Silence in Premium Positioning</h2>
      <p>Silence creates space. Space allows the audience to project value, curiosity, and desire.</p>

      <p>That's why luxury brands:</p>
      <ul>
        <li>Use fewer words</li>
        <li>Avoid cluttered visuals</li>
        <li>Resist over-posting</li>
        <li>Don't justify their pricing</li>
      </ul>

      <p>They allow the brand experience to speak.</p>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>Over-explaining signals insecurity. Constant selling signals desperation. Excessive visibility signals accessibility — not exclusivity.</p>
      </div>

      <h2 id="loud-marketing">Why Loud Marketing Devalues Premium Brands</h2>
      <p>For brands serving high-value clients, loud marketing creates friction. The wrong people engage. The right people disengage quietly.</p>

      <blockquote>
        <p>Restraint is not absence. It is precision.</p>
      </blockquote>

      <h2 id="restraint">Strategic Restraint as a Growth Tool</h2>
      <p>Luxury brands invest heavily in:</p>
      <ul>
        <li>Positioning</li>
        <li>Visual coherence</li>
        <li>Narrative clarity</li>
      </ul>

      <p>So they can afford to communicate less — and convert more.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&h=600&fit=crop" alt="Premium brand experience" />
        <p class="caption">Investment in brand clarity enables strategic communication restraint</p>
      </div>

      <h2 id="approach">Our Approach at Authentik</h2>
      <p>We help brands:</p>
      <ul>
        <li>Remove excess</li>
        <li>Refine expression</li>
        <li>Communicate with intention</li>
      </ul>

      <p>Not everything needs to be said. Not everyone needs to be addressed. The goal is not attention. The goal is alignment.</p>

      <p>If you want to attract premium clients, don't ask: How do we say more?</p>

      <p>Ask instead: What can we remove without losing meaning?</p>

      <p>Luxury is expressed through clarity — not volume. Authenticity, expressed with restraint, is one of the strongest brand signals there is.</p>
    `,
    relatedArticles: [
      {
        title: "Authenticity Is Not a Vibe — It's a Strategic Advantage",
        slug: "authenticity-strategic-advantage",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
      },
      {
        title: "The Difference Between Being Visible and Being Positioned",
        slug: "visible-vs-positioned",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
      },
      {
        title: "Marketing Isn't Broken — Your Foundation Is",
        slug: "marketing-foundation",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
      }
    ]
  },

  "zanzibar-properties-underperforming": {
    title: "Why Most Properties in Zanzibar Are Underperforming Online",
    category: "Hospitality",
    date: "January 18, 2024",
    readTime: "6 min read",
    views: "4.1K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Property Specialists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "listing-not-positioning", title: "Listing Is Not Positioning" },
      { id: "what-we-see", title: "What We See Repeatedly" },
      { id: "hidden-cost", title: "The Hidden Cost of Underperformance" },
      { id: "perspective", title: "Our Perspective at Authentik Homes" },
      { id: "takeaway", title: "The Practical Takeaway" }
    ],
    content: `
      <p class="lead">Zanzibar has no shortage of beautiful properties. Villas, apartments, beachfront stays — many of them well designed and well located. And yet, a large number of these properties consistently underperform online. The reason is rarely the property itself. It is positioning.</p>

      <h2 id="listing-not-positioning">Listing Is Not Positioning</h2>
      <p>Most properties are listed. Very few are positioned.</p>

      <p>A listing shows:</p>
      <ul>
        <li>Photos</li>
        <li>Amenities</li>
        <li>Price</li>
        <li>Availability</li>
      </ul>

      <p>Positioning communicates:</p>
      <ul>
        <li>Experience</li>
        <li>Intent</li>
        <li>Audience</li>
        <li>Value</li>
      </ul>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>Without positioning, properties compete on price and availability — not desire.</p>
      </div>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&h=600&fit=crop" alt="Zanzibar luxury property" />
        <p class="caption">Beautiful properties need strategic positioning to convert views into bookings</p>
      </div>

      <h2 id="what-we-see">What We See Repeatedly</h2>
      <p>Across Zanzibar, many properties:</p>
      <ul>
        <li>Look similar online</li>
        <li>Use generic descriptions</li>
        <li>Rely on standard Airbnb templates</li>
        <li>Assume beauty alone will convert</li>
      </ul>

      <p>Beauty attracts attention. Context drives booking.</p>

      <p>When a guest cannot immediately understand:</p>
      <ul>
        <li>Who the property is for</li>
        <li>What kind of stay it offers</li>
        <li>Why it is worth choosing</li>
      </ul>

      <p>They move on.</p>

      <h2 id="hidden-cost">The Hidden Cost of Underperformance</h2>
      <p>Underperforming properties often experience:</p>
      <ul>
        <li>Irregular occupancy</li>
        <li>Seasonal dependency</li>
        <li>Discount-driven bookings</li>
        <li>Higher guest friction</li>
      </ul>

      <p>This leads owners to believe the market is "slow" or "oversaturated." In reality, the property is simply miscommunicated.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&h=600&fit=crop" alt="Property management strategy" />
        <p class="caption">Strategic communication transforms property performance</p>
      </div>

      <h2 id="perspective">Our Perspective at Authentik Homes</h2>
      <p>We treat property as a brand and a business, not a listing.</p>

      <p>That means:</p>
      <ul>
        <li>Clarifying the experience being sold</li>
        <li>Styling and furnishing with intention</li>
        <li>Positioning the stay, not just the space</li>
        <li>Managing guest experience end-to-end</li>
      </ul>

      <blockquote>
        <p>When positioning is clear, bookings become more consistent — without racing to the bottom on price.</p>
      </blockquote>

      <h2 id="takeaway">The Practical Takeaway</h2>
      <p>If your property is beautiful but underperforming, ask: What experience are we actually selling — and to whom?</p>

      <p>In Zanzibar, visibility is abundant. Differentiation is rare.</p>

      <p>At Authentik Homes, we help property owners move from listings to assets.</p>
    `,
    relatedArticles: [
      {
        title: "From Listings to Assets: Treating Property as a Business",
        slug: "listings-to-assets",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
      },
      {
        title: "WhatsApp Is the Most Underutilized Conversion Tool in East Africa",
        slug: "whatsapp-conversion-tool",
        category: "Growth",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=250&fit=crop"
      },
      {
        title: "The Difference Between Being Visible and Being Positioned",
        slug: "visible-vs-positioned",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
      }
    ]
  },

  "whatsapp-conversion-tool": {
    title: "WhatsApp Is the Most Underutilized Conversion Tool in East Africa",
    category: "Growth",
    date: "January 12, 2024",
    readTime: "5 min read",
    views: "3.6K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Growth Strategists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "problem", title: "The Problem With Manual WhatsApp Communication" },
      { id: "why-outperforms", title: "Why WhatsApp Outperforms Most Channels" },
      { id: "automation", title: "Automation Does Not Mean Losing the Human Touch" },
      { id: "what-we-see", title: "What We See at Authentik" },
      { id: "takeaway", title: "The Practical Takeaway" }
    ],
    content: `
      <p class="lead">In East Africa, WhatsApp is not just a messaging app. It is where business happens, decisions are made, and trust is built. And yet, most brands treat WhatsApp as an afterthought.</p>

      <h2 id="problem">The Problem With Manual WhatsApp Communication</h2>
      <p>Most businesses rely on:</p>
      <ul>
        <li>Delayed replies</li>
        <li>Inconsistent responses</li>
        <li>Missed messages</li>
        <li>Overloaded teams</li>
      </ul>

      <p>Leads are interested — then ignored. Momentum is lost before conversations even begin.</p>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>In high-intent markets, speed and clarity matter more than persuasion.</p>
      </div>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&h=600&fit=crop" alt="WhatsApp business communication" />
        <p class="caption">Strategic WhatsApp automation preserves the human touch while ensuring consistency</p>
      </div>

      <h2 id="why-outperforms">Why WhatsApp Outperforms Most Channels</h2>
      <p>WhatsApp:</p>
      <ul>
        <li>Feels personal</li>
        <li>Is already trusted</li>
        <li>Removes friction</li>
        <li>Shortens decision cycles</li>
      </ul>

      <p>But only when used intentionally. Without structure, WhatsApp becomes chaotic. With structure, it becomes one of the highest-converting tools available.</p>

      <h2 id="automation">Automation Does Not Mean Losing the Human Touch</h2>
      <p>Well-designed WhatsApp automation:</p>
      <ul>
        <li>Responds instantly</li>
        <li>Qualifies inquiries</li>
        <li>Routes leads correctly</li>
        <li>Sets expectations</li>
      </ul>

      <blockquote>
        <p>This doesn't replace humans. It protects them. Automation handles the repetitive. Humans handle the meaningful.</p>
      </blockquote>

      <h2 id="what-we-see">What We See at Authentik</h2>
      <p>Brands often invest heavily in:</p>
      <ul>
        <li>Ads</li>
        <li>Content</li>
        <li>Influencers</li>
      </ul>

      <p>But lose conversions because:</p>
      <ul>
        <li>Responses are slow</li>
        <li>Follow-ups are inconsistent</li>
        <li>Leads fall through gaps</li>
      </ul>

      <p>WhatsApp automation closes that gap.</p>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop" alt="Customer communication strategy" />
        <p class="caption">Efficient communication systems turn interest into conversion</p>
      </div>

      <h2 id="takeaway">The Practical Takeaway</h2>
      <p>If your business receives inquiries on WhatsApp, ask: How many potential clients are we losing before the first response?</p>

      <p>Automation is not about efficiency alone. It is about respecting intent.</p>

      <p>At Authentik, we design WhatsApp systems that turn interest into conversation — and conversation into conversion.</p>
    `,
    relatedArticles: [
      {
        title: "Marketing Isn't Broken — Your Foundation Is",
        slug: "marketing-foundation",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
      },
      {
        title: "Why Most Brands Don't Convert — Even With \"Good Marketing\"",
        slug: "why-brands-dont-convert",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
      },
      {
        title: "From Listings to Assets: Treating Property as a Business",
        slug: "listings-to-assets",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
      }
    ]
  },

  "marketing-foundation": {
    title: "Marketing Isn't Broken — Your Foundation Is",
    category: "Strategy",
    date: "January 8, 2024",
    readTime: "6 min read",
    views: "3.8K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Brand Strategists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "scapegoat", title: "When Marketing Becomes a Scapegoat" },
      { id: "weak-foundation", title: "What a Weak Foundation Looks Like" },
      { id: "why-tactics-fail", title: "Why More Tactics Don't Solve Structural Problems" },
      { id: "perspective", title: "Our Perspective at Authentik" },
      { id: "takeaway", title: "The Practical Takeaway" }
    ],
    content: `
      <p class="lead">Marketing is often blamed when growth stalls. Ads aren't converting. Content isn't landing. Campaigns feel expensive with little return. The instinctive reaction is to change tactics. But marketing rarely fails on its own.</p>

      <h2 id="scapegoat">When Marketing Becomes a Scapegoat</h2>
      <p>What we observe again and again is this: Brands invest in marketing before they invest in foundations.</p>

      <p>They attempt to amplify without first stabilizing:</p>
      <ul>
        <li>Identity</li>
        <li>Positioning</li>
        <li>Clarity of offer</li>
        <li>Alignment between promise and experience</li>
      </ul>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>Marketing then exposes these gaps instead of fixing them. Marketing does not correct confusion. It multiplies it.</p>
      </div>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=600&fit=crop" alt="Brand foundation strategy" />
        <p class="caption">Strong foundations make marketing efficient and effective</p>
      </div>

      <h2 id="weak-foundation">What a Weak Foundation Looks Like</h2>
      <p>Brands with fragile foundations often show up as:</p>
      <ul>
        <li>Inconsistent messaging across platforms</li>
        <li>Conflicting visual identity</li>
        <li>Unclear value propositions</li>
        <li>Offers that are difficult to explain or justify</li>
      </ul>

      <h2 id="why-tactics-fail">Why More Tactics Don't Solve Structural Problems</h2>
      <p>No amount of:</p>
      <ul>
        <li>Content</li>
        <li>Advertising</li>
        <li>Influencers</li>
        <li>Automation</li>
      </ul>

      <p>Can compensate for a brand that hasn't clearly defined:</p>
      <ul>
        <li>What it stands for</li>
        <li>Who it serves</li>
        <li>Why it deserves attention at its price point</li>
      </ul>

      <blockquote>
        <p>Without this clarity, marketing becomes exhausting and reactive.</p>
      </blockquote>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1000&h=600&fit=crop" alt="Strategic brand alignment" />
        <p class="caption">Alignment between strategy, identity, and execution creates marketing momentum</p>
      </div>

      <h2 id="perspective">Our Perspective at Authentik</h2>
      <p>We approach marketing as the last layer, not the first.</p>

      <p>Before growth, we assess:</p>
      <ul>
        <li>Strategic clarity</li>
        <li>Brand expression</li>
        <li>Market fit</li>
        <li>Internal alignment</li>
      </ul>

      <p>When the foundation is strong, marketing becomes efficient — sometimes surprisingly so.</p>

      <h2 id="takeaway">The Practical Takeaway</h2>
      <p>If marketing feels like hard work, ask: What is marketing revealing about our foundation?</p>

      <p>Fix the foundation. Marketing will follow.</p>

      <p>At Authentik, we don't patch symptoms. We strengthen structures.</p>
    `,
    relatedArticles: [
      {
        title: "Why Most Brands Don't Convert — Even With \"Good Marketing\"",
        slug: "why-brands-dont-convert",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
      },
      {
        title: "Authenticity Is Not a Vibe — It's a Strategic Advantage",
        slug: "authenticity-strategic-advantage",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
      },
      {
        title: "The Difference Between Being Visible and Being Positioned",
        slug: "visible-vs-positioned",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
      }
    ]
  },

  "listings-to-assets": {
    title: "From Listings to Assets: Treating Property as a Business",
    category: "Hospitality",
    date: "January 3, 2024",
    readTime: "7 min read",
    views: "4.3K",
    isPublished: true,
    featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    author: {
      name: "Authentik Team",
      role: "Property Specialists",
      avatar: "/AM.png"
    },
    tableOfContents: [
      { id: "passive-vs-managed", title: "A Listing Is Passive. An Asset Is Managed." },
      { id: "why-plateau", title: "Why Many Properties Plateau" },
      { id: "asset-thinking", title: "Asset Thinking Changes Everything" },
      { id: "approach", title: "Our Approach at Authentik Homes" },
      { id: "takeaway", title: "The Practical Takeaway" }
    ],
    content: `
      <p class="lead">Many property owners think they are in hospitality. In reality, they are in asset management — whether they realize it or not. The difference between a listing and an asset is intention.</p>

      <h2 id="passive-vs-managed">A Listing Is Passive. An Asset Is Managed.</h2>
      <p>Listings:</p>
      <ul>
        <li>Exist online</li>
        <li>Depend on seasonality</li>
        <li>Compete on price</li>
      </ul>

      <p>Assets:</p>
      <ul>
        <li>Are positioned</li>
        <li>Are maintained with strategy</li>
        <li>Are optimized over time</li>
      </ul>

      <div class="callout-box">
        <h4>Key Insight</h4>
        <p>The same property can be either — depending on how it is treated.</p>
      </div>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1000&h=600&fit=crop" alt="Property asset management" />
        <p class="caption">Strategic asset management transforms properties into predictable income sources</p>
      </div>

      <h2 id="why-plateau">Why Many Properties Plateau</h2>
      <p>Properties often start strong, then stagnate. This happens when:</p>
      <ul>
        <li>Guest experience is not actively managed</li>
        <li>Visual presentation remains static</li>
        <li>Listings are not refined over time</li>
        <li>Maintenance becomes reactive instead of proactive</li>
      </ul>

      <p>Without strategy, performance naturally declines.</p>

      <h2 id="asset-thinking">Asset Thinking Changes Everything</h2>
      <p>When property is treated as a business:</p>
      <ul>
        <li>Furnishing is intentional, not decorative</li>
        <li>Pricing is strategic, not reactive</li>
        <li>Guest communication is systemized</li>
        <li>Experience becomes the differentiator</li>
      </ul>

      <blockquote>
        <p>This mindset shift alone often improves performance — before any major investment.</p>
      </blockquote>

      <div class="image-block">
        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&h=600&fit=crop" alt="Strategic property positioning" />
        <p class="caption">Intentional positioning and management drive consistent performance</p>
      </div>

      <h2 id="approach">Our Approach at Authentik Homes</h2>
      <p>We help property owners:</p>
      <ul>
        <li>See their property as an income-generating asset</li>
        <li>Position it intentionally in the market</li>
        <li>Maintain it as a brand experience</li>
        <li>Optimize it continuously</li>
      </ul>

      <p>Not through volume — through clarity and care.</p>

      <h2 id="takeaway">The Practical Takeaway</h2>
      <p>If your property income feels unpredictable, ask: Are we managing a listing — or building an asset?</p>

      <p>Assets compound. Listings fluctuate.</p>

      <p>At Authentik Homes, we help owners build assets, not just bookings.</p>
    `,
    relatedArticles: [
      {
        title: "Why Most Properties in Zanzibar Are Underperforming Online",
        slug: "zanzibar-properties-underperforming",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=250&fit=crop"
      },
      {
        title: "The Difference Between Being Visible and Being Positioned",
        slug: "visible-vs-positioned",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
      },
      {
        title: "Marketing Isn't Broken — Your Foundation Is",
        slug: "marketing-foundation",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
      }
    ]
  }
};

// Table of Contents Component
const TableOfContents = ({ items, activeId }) => {
  return (
    <div className="sticky top-24 animate-fadeIn">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#DADFDB]/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-[#3A9387] to-[#194C4C] rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h4 className="font-serif text-lg font-semibold text-[#194C4C]">
            In This Article
          </h4>
        </div>
        <nav>
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-start gap-3 text-sm py-3 px-3 rounded-lg transition-all duration-200 ${
                    activeId === item.id
                      ? "bg-gradient-to-r from-[#3A9387] to-[#194C4C] text-white font-medium"
                      : "text-[#194C4C]/70 hover:bg-[#DADFDB]/30 hover:text-[#3A9387]"
                  }`}
                >
                  <span className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold ${
                    activeId === item.id ? "bg-white/20" : "bg-[#DADFDB]/50 text-[#3A9387]"
                  }`}>
                    {index + 1}
                  </span>
                  <span className="flex-1 leading-snug">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="mt-6 pt-6 border-t border-[#DADFDB]/30">
          <p className="text-xs font-semibold text-[#194C4C]/50 uppercase tracking-wider mb-3">
            Quick Actions
          </p>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 text-sm py-2.5 px-3 rounded-lg text-[#194C4C]/70 hover:bg-[#3A9387]/10 hover:text-[#3A9387] transition-all">
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
            <button className="w-full flex items-center gap-3 text-sm py-2.5 px-3 rounded-lg text-[#194C4C]/70 hover:bg-[#F79120]/10 hover:text-[#F79120] transition-all">
              <Bookmark className="w-4 h-4" />
              <span>Save for Later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reading Progress Bar Component
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
    <div className="fixed top-0 left-0 w-full h-1 bg-[#DADFDB]/30 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#3A9387] via-[#F79120] to-[#E17C47] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Main Component
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
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  // 404 State
  if (!article) {
    return (
      <Layout>
        <SectionWrapper>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center py-20 animate-fadeIn">
              <div className="w-24 h-24 bg-[#DADFDB]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-12 h-12 text-[#194C4C]/40" />
              </div>
              <h1 className="font-serif text-4xl font-semibold text-[#194C4C] mb-4">
                Article Not Found
              </h1>
              <p className="text-lg text-[#194C4C]/70 mb-8">
                The article you're looking for doesn't exist.
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 bg-[#3A9387] hover:bg-[#194C4C] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
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
            <div className="max-w-4xl mx-auto animate-fadeIn">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-[#3A9387] hover:text-[#194C4C] font-medium mb-8 transition-all group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Insights
              </Link>

              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg animate-slideUp">
                <img 
                  src={article.featuredImage} 
                  alt={article.title}
                  className="w-full h-64 sm:h-96 object-cover"
                />
              </div>

              <div className="bg-gradient-to-br from-white to-[#DADFDB]/10 rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-sm border border-[#DADFDB]/30 animate-slideUp" style={{animationDelay: '0.1s'}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F79120] to-[#E17C47] rounded-xl mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#F79120] to-[#E17C47] text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
                  Coming Soon
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#194C4C] mb-6 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                  <span className="inline-flex items-center gap-2 text-sm text-[#194C4C]/60">
                    <Tag className="w-4 h-4 text-[#3A9387]" />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-[#194C4C]/60">
                    <Clock className="w-4 h-4 text-[#F79120]" />
                    {article.readTime}
                  </span>
                </div>

                <p className="text-lg text-[#194C4C]/70 mb-10 max-w-2xl mx-auto">
                  This article is currently being written by our team. Check back soon for valuable insights on this topic.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/insights"
                    className="inline-flex items-center justify-center gap-2 bg-[#3A9387] hover:bg-[#194C4C] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    Browse Other Articles
                  </Link>
                  <a
                    href="https://wa.me/255777296026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    <FaWhatsapp className="w-5 h-5" />
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

      {/* Hero Section */}
      <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden">
        <img 
          src={article.featuredImage} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover animate-kenBurns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#194C4C] via-[#194C4C]/70 to-transparent"></div>
        
        <div className="relative h-full flex items-end">
          <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 pb-12 sm:pb-16 animate-slideUp">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl">
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white font-medium mb-6 transition-all group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Insights
                </Link>
                
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white bg-[#3A9387]/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeIn" style={{animationDelay: '0.1s'}}>
                  <Tag className="w-3.5 h-3.5" />
                  {article.category}
                </div>
                
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-4xl animate-fadeIn" style={{animationDelay: '0.2s'}}>
                  {article.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Meta Bar */}
            <div className="max-w-4xl mb-12 animate-fadeIn">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#DADFDB]/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-[#DADFDB]/30">
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#194C4C]">{article.author.name}</p>
                      <p className="text-sm text-[#194C4C]/60">{article.author.role}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-2 text-sm text-[#194C4C]/60">
                      <Calendar className="w-4 h-4 text-[#3A9387]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#194C4C]/60">
                      <Clock className="w-4 h-4 text-[#F79120]" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-2 text-sm font-medium text-[#3A9387]">
                      <Eye className="w-4 h-4" />
                      {article.views}
                    </span>
                  </div>
                </div>

                {/* Share Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-[#DADFDB]/30">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-[#194C4C]/70">Share:</span>
                    <button className="w-9 h-9 bg-[#DADFDB]/30 hover:bg-[#1DA1F2] rounded-lg flex items-center justify-center transition-all duration-200 group">
                      <FaTwitter className="w-4 h-4 text-[#194C4C]/70 group-hover:text-white transition-colors" />
                    </button>
                    <button className="w-9 h-9 bg-[#DADFDB]/30 hover:bg-[#0A66C2] rounded-lg flex items-center justify-center transition-all duration-200 group">
                      <FaLinkedinIn className="w-4 h-4 text-[#194C4C]/70 group-hover:text-white transition-colors" />
                    </button>
                    <button className="w-9 h-9 bg-[#DADFDB]/30 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-all duration-200 group">
                      <FaFacebookF className="w-4 h-4 text-[#194C4C]/70 group-hover:text-white transition-colors" />
                    </button>
                    <button className="w-9 h-9 bg-[#DADFDB]/30 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-all duration-200 group">
                      <FaWhatsapp className="w-4 h-4 text-[#194C4C]/70 group-hover:text-white transition-colors" />
                    </button>
                    <button className="w-9 h-9 bg-[#DADFDB]/30 hover:bg-[#EA4335] rounded-lg flex items-center justify-center transition-all duration-200 group">
                      <FaEnvelope className="w-4 h-4 text-[#194C4C]/70 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                  
                  <button className="flex items-center gap-2 text-sm font-medium text-[#3A9387] hover:text-[#194C4C] transition-colors">
                    <Bookmark className="w-4 h-4" />
                    <span>Save Article</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Sidebar - Table of Contents (appears first on desktop, right side) */}
              <aside className="lg:col-span-4 lg:order-2">
                {article.tableOfContents && (
                  <TableOfContents items={article.tableOfContents} activeId={activeSection} />
                )}
              </aside>

              {/* Article Content (appears second on desktop, left side) */}
              <div className="lg:col-span-8 lg:order-1">
                <article 
                  className="article-content animate-fadeIn"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-[#DADFDB]/30 animate-fadeIn">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-[#3A9387]" />
                    <p className="text-sm font-semibold text-[#194C4C]/70 uppercase tracking-wider">
                      Related Topics
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[article.category, 'Brand Strategy', 'Marketing', 'Growth'].map((tag, index) => (
                      <span 
                        key={tag}
                        className="px-4 py-2 bg-[#3A9387]/10 hover:bg-[#3A9387] text-[#3A9387] hover:text-white text-sm font-medium rounded-full transition-all duration-200 cursor-pointer animate-fadeIn"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#3A9387] via-[#194C4C] to-[#194C4C] rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-lg relative overflow-hidden animate-slideUp">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F79120]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3A9387]/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-8">
                  <Target className="w-8 h-8 text-[#F79120]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
                  Ready to Transform Your Brand?
                </h2>
                <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                  Let's discuss your brand strategy and create something authentic that drives real growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#F79120] to-[#E17C47] hover:from-[#E17C47] hover:to-[#F79120] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>Book a Strategy Call</span>
                  </Link>
                  <a
                    href="https://wa.me/255777296026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/30"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
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
              <div className="text-center mb-12 animate-fadeIn">
                <div className="inline-flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#3A9387]" />
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#194C4C]">
                    Continue Reading
                  </h2>
                </div>
                <p className="text-lg text-[#194C4C]/70 max-w-2xl mx-auto">
                  Explore more insights to help you build a stronger brand
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {article.relatedArticles.map((related, index) => (
                  <Link
                    key={related.slug}
                    to={`/insights/${related.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#DADFDB]/30 hover:border-[#3A9387]/30 animate-slideUp"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#3A9387] px-3 py-1.5 rounded-full">
                          <Tag className="w-3 h-3" />
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-[#194C4C] group-hover:text-[#3A9387] transition-colors leading-snug mb-3">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#3A9387] font-medium">
                        <span>Read Article</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-kenBurns {
          animation: kenBurns 20s ease-out infinite alternate;
        }

        .article-content {
          color: #194C4C;
        }

        .article-content .lead {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #194C4C;
          opacity: 0.9;
          margin-bottom: 2.5rem;
          font-weight: 500;
          padding-left: 1.5rem;
          border-left: 3px solid #3A9387;
        }

        .article-content h2 {
          font-family: serif;
          font-size: 2rem;
          font-weight: 600;
          color: #194C4C;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
          scroll-margin-top: 120px;
        }

        .article-content h3 {
          font-family: serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #3A9387;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }

        .article-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #194C4C;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .article-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
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

        .article-content ul {
          margin-bottom: 2rem;
          padding-left: 0;
          list-style: none;
        }

        .article-content ul li {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 0.75rem;
          color: #194C4C;
          opacity: 0.85;
          padding-left: 1.75rem;
          position: relative;
        }

        .article-content ul li:before {
          content: "→";
          position: absolute;
          left: 0;
          color: #3A9387;
          font-weight: 600;
        }

        .article-content blockquote {
          border-left: 4px solid #F79120;
          background: linear-gradient(135deg, #DADFDB 0%, #F5F5F5 100%);
          padding: 1.75rem 2rem;
          margin: 3rem 0;
          border-radius: 0 1rem 1rem 0;
        }

        .article-content blockquote p {
          font-family: serif;
          font-size: 1.375rem;
          font-style: italic;
          color: #194C4C;
          margin: 0;
          line-height: 1.7;
        }

        .article-content .image-block {
          margin: 2.5rem 0;
        }

        .article-content .image-block img {
          width: 100%;
          border-radius: 1rem;
          margin-bottom: 0.75rem;
          box-shadow: 0 4px 20px rgba(25, 76, 76, 0.08);
        }

        .article-content .caption {
          text-align: center;
          font-size: 0.875rem;
          color: #194C4C;
          opacity: 0.6;
          font-style: italic;
          margin: 0;
        }

        .article-content .callout-box {
          background: linear-gradient(135deg, #3A9387 0%, #194C4C 100%);
          color: white;
          padding: 1.75rem 2rem;
          border-radius: 1rem;
          margin: 2.5rem 0;
        }

        .article-content .callout-box h4 {
          color: #F79120;
          margin-top: 0;
          margin-bottom: 0.75rem;
          font-size: 1.125rem;
        }

        .article-content .callout-box p {
          color: white;
          opacity: 0.95;
          margin: 0;
        }

        @media (max-width: 640px) {
          .article-content .lead {
            font-size: 1.0625rem;
            padding-left: 1rem;
          }

          .article-content h2 {
            font-size: 1.5rem;
            margin-top: 2.5rem;
          }

          .article-content h3 {
            font-size: 1.25rem;
            margin-top: 2rem;
          }

          .article-content p,
          .article-content li {
            font-size: 1rem;
          }

          .article-content blockquote p {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default InsightArticle;