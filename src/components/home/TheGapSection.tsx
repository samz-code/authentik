export function TheGapSection() {
  const sections = [
    {
      label: "The Gap",
      icon: "fa-search",
      title: "The Problem We Solve",
      content:
        "Most brands, creators, and properties aren't struggling because they lack potential. They're struggling because what makes them different isn't visible, to their audience, or even to themselves.",
    },
    {
      label: "The Alignment",
      icon: "fa-compass",
      title: "Our Approach",
      content:
        "We believe authenticity is not discovered. It is expressed. When your identity, voice, and strategy align, something powerful happens. You stop competing and start attracting.",
    },
    {
      label: "The Outcome",
      icon: "fa-chart-line",
      title: "The Results You Get",
      content:
        "Clarity. Confidence. Growth. ROI. Whether you're building a brand from scratch, repositioning an existing one, or maximizing your property's potential, we help you express who you are. And then we help the right people find you.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#194C4C] mb-6">
            Our Philosophy
          </h2>
          <div className="w-24 h-1 bg-[#F79120] mx-auto rounded-full"></div>
        </div>

        {/* Three Sections */}
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          {sections.map((section, index) => (
            <div
              key={section.label}
              className="group"
              style={{
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                animation: 'fadeIn 0.8s ease-out forwards'
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3A9387] rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#E17C47] transition-all duration-300">
                  <i className={`fas ${section.icon} text-2xl md:text-3xl text-white`}></i>
                </div>
              </div>

              {/* Label */}
              <div className="text-center mb-4">
                <span className="inline-block px-6 py-2 bg-[#F79120] text-white font-semibold text-sm tracking-wide uppercase rounded-full">
                  {section.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#194C4C] mb-6 max-w-3xl mx-auto">
                {section.title}
              </h3>

              {/* Content */}
              <p className="text-lg md:text-xl lg:text-2xl text-center text-[#194C4C]/80 leading-relaxed max-w-4xl mx-auto">
                {section.content}
              </p>

              {/* Divider (except for last item) */}
              {index < sections.length - 1 && (
                <div className="mt-12 md:mt-16 lg:mt-20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#F79120] rounded-full"></div>
                  <div className="w-16 h-0.5 bg-[#DADFDB] mx-2"></div>
                  <i className="fas fa-arrow-down text-[#3A9387] text-xl"></i>
                  <div className="w-16 h-0.5 bg-[#DADFDB] mx-2"></div>
                  <div className="w-2 h-2 bg-[#F79120] rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 lg:mt-24 text-center">
          <div className="max-w-3xl mx-auto bg-[#3A9387] rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Express Your Authenticity?
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Let's bridge the gap between where you are and where you want to be.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#F79120] hover:bg-[#E17C47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Start Your Journey</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}