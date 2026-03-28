import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ArrowRight,
  MapPin,
  Calendar,
  User,
  ChevronLeft,
  Share2,
  Heart,
  ChevronRight,
} from "lucide-react";

export default function ARSBlogPlatform({ onNavHome }) {
  const [currentView, setCurrentView] = useState("home");
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [liked, setLiked] = useState({});
  const carouselRef = useRef(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "training", label: "Training Tips" },
    { id: "tech", label: "Tech & Data" },
    { id: "events", label: "Events" },
  ];

  const carouselImages = [
    "/Gaya event/pic1.jpeg",
    "/Gaya event/pic2.jpeg",
    "/Gaya event/pic3.jpeg",
    "/Gaya event/pic1.jpeg",
    "/Gaya event/pic2.jpeg",
    "/Gaya event/pic3.jpeg",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Elite Training Techniques: Building Champions from the Ground Up",
      category: "training",
      excerpt:
        "Discover how grassroots coaching is transforming young cricketers into elite athletes.",
      author: "Anas Faiz",
      authorRole: "Performance Coach",
      date: "Mar 20, 2026",
      location: "Gaya",
      image: "/Gaya event/pic1.jpeg",
      tags: ["Coaching", "Performance"],
      isLatest: true,
      sections: [
        {
          type: "intro",
          title:
            "Elite Training Techniques: Building Champions from the Ground Up",
          content:
            "Our matches in four weeks for the men's team composition. Alongside of the shock and alongside the best against organization in teams.",
        },
        {
          type: "image",
          image: "/Gaya event/pic1.jpeg",
        },
        {
          type: "paragraph",
          content:
            "A guided cricket schedule the new and city sport and real Australia's men play four Tests in the next new December through January. Those cricket, following four Tests against South Australia will restrict claim to have expanded the schedule so seven Tests, with possibly another strong suggestion in the new New years.",
        },
        {
          type: "text_image",
          title: "THE FOUNDATION OF CHAMPIONS",
          text: "Elite performance doesn't happen by accident. It's the result of deliberate practice, expert coaching, and a deep understanding of the game's fundamentals. At ARS Kreedashala, we've developed a system that brings world-class training techniques to grassroots cricketers.\n\nOur approach combines three core pillars: technical mastery, physical conditioning, and mental resilience. Each component is equally important in developing young players who can compete at the highest levels.",
          image: "/Gaya event/pic2.jpeg",
        },
        {
          type: "text_image",
          title: "BREAKING DOWN THE TRAINING FRAMEWORK",
          text: "Technical training focuses on perfecting the fundamentals - batting stance, bowling action, and fielding positions. We use video analysis to identify micro-adjustments that can transform performance.\n\nPhysical conditioning ensures players have the strength, speed, and endurance needed for professional cricket. Mental training prepares them for the psychological demands of competitive play.",
          image: "/Gaya event/pic3.jpeg",
        },
        {
          type: "video",
          video: "/Gaya event/video1.mp4",
        },

        {
          type: "paragraph",
          content:
            "What sets our program apart is our ability to bridge the gap between grassroots cricket and professional standards. Young players from modest backgrounds can now access the same training methodologies used by national teams.\n\nThe impact is measurable. Players who started in our program have gone on to represent district-level teams, get selected for state academies, and secure professional contracts.",
        },
      ],
    },
    {
      id: 2,
      title: "Data-Driven Insights: What the Numbers Tell Us",
      category: "tech",
      excerpt:
        "Understanding performance metrics that separate good players from great ones.",
      author: "Priya Menon",
      authorRole: "Data Analyst",
      date: "Mar 18, 2026",
      location: "Mumbai",
      image: "/placeholder/tech-analytics.jpg",
      tags: ["Analytics", "Data"],
      isLatest: true,
      sections: [
        {
          type: "intro",
          title: "Data-Driven Insights: What the Numbers Tell Us",
          content:
            "In modern cricket, data is king. Every delivery, every shot, every movement can be quantified and analyzed.",
        },
        {
          type: "image",
          image: "/placeholder/tech-dashboard.jpg",
        },
        {
          type: "text_image",
          title: "THE POWER OF PERFORMANCE METRICS",
          text: "This data revolution is changing how we develop players and predict future performance. Not all statistics are created equal. We focus on metrics that directly correlate with match success.",
          image: "/placeholder/tech-metrics.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Community Spotlight: Young Talents of Ranchi",
      category: "events",
      excerpt:
        "Celebrating the rising stars in our grassroots cricket program this season.",
      author: "Team ARS",
      authorRole: "Community Manager",
      date: "Mar 15, 2026",
      location: "Ranchi",
      image: "/placeholder/community-youth.jpg",
      tags: ["Community", "Youth"],
      isLatest: false,
      sections: [
        {
          type: "intro",
          title: "Community Spotlight: Young Talents of Ranchi",
          content:
            "Every season, we see young talents emerge from our community programs.",
        },
        {
          type: "image",
          image: "/placeholder/community-talents.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "The Science Behind the Perfect Swing",
      category: "training",
      excerpt:
        "Video analysis reveals what makes the difference in batting technique.",
      author: "Coach Vikram",
      authorRole: "Technical Coach",
      date: "Mar 12, 2026",
      location: "Delhi",
      image: "/placeholder/training-swing.jpg",
      tags: ["Technique", "Video"],
      isLatest: false,
      sections: [
        {
          type: "intro",
          title: "The Science Behind the Perfect Swing",
          content: "What separates an average batsman from an elite one?",
        },
      ],
    },
    {
      id: 5,
      title: "Building Your Personal Performance Dashboard",
      category: "tech",
      excerpt: "A guide to tracking your progress with ARS Tracker v2.0.",
      author: "Priya Menon",
      authorRole: "Data Analyst",
      date: "Mar 10, 2026",
      location: "Bangalore",
      image: "/placeholder/tech-performance.jpg",
      tags: ["Dashboard", "Tools"],
      isLatest: false,
      sections: [
        {
          type: "intro",
          title: "Building Your Personal Performance Dashboard",
          content: "ARS Tracker v2.0 puts powerful analytics in your hands.",
        },
      ],
    },
    {
      id: 6,
      title: "Annual Championship: What to Expect",
      category: "events",
      excerpt:
        "Get ready for the biggest grassroots cricket event of the year.",
      author: "Event Team",
      authorRole: "Community Manager",
      date: "Mar 08, 2026",
      location: "Ranchi",
      image: "/placeholder/events-championship.jpg",
      tags: ["Championship", "Tournament"],
      isLatest: false,
      sections: [
        {
          type: "intro",
          title: "Annual Championship: What to Expect",
          content:
            "Our Annual Championship brings together the best grassroots talent from across India.",
        },
      ],
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts[0];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentView("detail");
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setCurrentView("home");
    setSelectedPost(null);
  };

  const toggleLike = (postId) => {
    setLiked((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = 400;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          carouselRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // DETAIL PAGE VIEW
  if (currentView === "detail" && selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white border-b border-[#e8e4dc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#747c27] rounded-sm flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{ width: 16, height: 16 }}
                  >
                    <path d="M12 2L3 7v10l9 5 9-5V7z" />
                  </svg>
                </div>
                <span className="font-black text-xs text-[#111408] tracking-widest uppercase">
                  ARS Kreedashala
                </span>
              </div>
              <button
                onClick={() => setCurrentView("home")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#747c27] text-white hover:bg-[#5a6220] transition font-bold text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Blog
              </button>
            </div>
          </div>
        </nav>

        {/* Article Container */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header Section */}
          <div className="mb-8 sm:mb-12">
            {/* Tags */}
            <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-3 py-1 bg-[#747c27] text-white rounded-full text-xs font-bold uppercase tracking-wide border border-[#747c27]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title - Using Teko Font */}
            <h1
              style={{ fontFamily: "Teko, sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111408] mb-4 sm:mb-6 leading-tight tracking-tight"
            >
              {selectedPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-[#666] border-b border-[#e8e4dc] pb-4 sm:pb-6">
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#747c27]" />
                <div>
                  <p
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                    className="font-bold text-[#111408] text-xs sm:text-sm"
                  >
                    {selectedPost.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                    className="text-xs text-[#999]"
                  >
                    {selectedPost.authorRole}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#666]">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#747c27]" />
                <span className="text-xs sm:text-sm">{selectedPost.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#666]">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#747c27]" />
                <span className="text-xs sm:text-sm">{selectedPost.location}</span>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 mb-12">
            {selectedPost.sections.map((section, idx) => {
              if (section.type === "intro") {
                return (
                  <div key={idx} className="mb-8">
                    <h2
                      style={{ fontFamily: "Teko, sans-serif" }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111408] mb-3 sm:mb-4 leading-tight"
                    >
                      {section.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#666] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                );
              }

              if (section.type === "image") {
                return (
                  <div
                    key={idx}
                    className="my-8 rounded-xl overflow-hidden shadow-2xl border border-[#747c27]/30"
                  >
                    <img
                      src={section.image}
                      alt="Article"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                );
              }

              if (section.type === "video") {
                return (
                  <div
                    key={idx}
                    className="my-8 rounded-xl overflow-hidden shadow-2xl border border-[#747c27]/30"
                  >
                    <video
                      src={section.video}
                      controls
                      className="w-full h-auto object-cover"
                    />
                  </div>
                );
              }

              if (section.type === "paragraph") {
                return (
                  <div key={idx} className="space-y-4">
                    {section.content.split("\n\n").map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base text-[#666] leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                );
              }

              if (section.type === "text_image") {
                return (
                  <div
                    key={idx}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-8"
                  >
                    {/* Text Content */}
                    <div className="lg:col-span-2 space-y-4">
                      <h2
                        style={{ fontFamily: "Teko, sans-serif" }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111408] mb-3 sm:mb-4 leading-tight"
                      >
                        {section.title}
                      </h2>
                      {section.text.split("\n\n").map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base text-[#666] leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-1">
                      <div className="rounded-xl overflow-hidden shadow-xl border border-[#747c27]/30 sticky top-24">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/40 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Actions */}
          <div className="flex gap-4 py-8 border-t border-b border-[#747c27]/20">
            <button
              onClick={() => toggleLike(selectedPost.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition border ${
                liked[selectedPost.id]
                  ? "bg-red-600/30 text-red-400 border-red-500/50"
                  : "bg-[#747c27]/20 text-[#d4af37] border-[#747c27]/30 hover:bg-[#747c27]/40"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${liked[selectedPost.id] ? "fill-current" : ""}`}
              />
              {liked[selectedPost.id] ? "Liked" : "Like"}
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#747c27]/20 text-[#d4af37] font-bold hover:bg-[#747c27]/40 transition border border-[#747c27]/30">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-[#747c27] rounded-2xl p-6 sm:p-8 text-white my-8 sm:my-12 shadow-lg border border-[#747c27]">
            <h3 className="font-black text-xl sm:text-2xl mb-2 sm:mb-3 leading-tight text-white">
              Get Weekly Performance Insights
            </h3>
            <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6">
              Tips, strategies & community updates delivered to your inbox every
              week.
            </p>
            <div className="flex gap-2 sm:gap-3 max-w-md flex-col sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 sm:py-3 rounded-lg text-[#0f0f0f] text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition font-medium"
              />
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-[#747c27] font-black rounded-lg hover:bg-[#d4af37] transition text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <h3
              style={{ fontFamily: "Teko, sans-serif" }}
              className="text-2xl sm:text-3xl font-bold text-[#111408] mb-4 sm:mb-6 uppercase tracking-wider"
            >
              More From{" "}
              {selectedPost.category === "training"
                ? "Training"
                : selectedPost.category === "tech"
                  ? "Tech"
                  : "Events"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(
                  (p) =>
                    p.category === selectedPost.category &&
                    p.id !== selectedPost.id,
                )
                .slice(0, 2)
                .map((post) => (
                  <button
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl p-6 border border-[#747c27]/30 hover:border-[#d4af37]/50 transition text-left"
                  >
                    <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wide mb-2">
                      {post.category}
                    </p>
                    <h4 className="text-lg font-black text-white line-clamp-2 group-hover:text-[#d4af37] transition leading-tight mb-3">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">{post.date}</span>
                      <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </article>

        {/* Image Gallery Carousel */}
        <section className="bg-[#0f0f0f] py-8 sm:py-12 border-t border-[#747c27]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg sm:text-2xl font-black text-[#d4af37] mb-6 sm:mb-8 uppercase tracking-wider">
              Photo Gallery
            </h3>

            <div className="relative">
              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
              >
                {carouselImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-56 sm:w-72 md:w-80 h-40 sm:h-56 md:h-64 rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-[#747c27]/30 hover:border-[#d4af37]/50 transition group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={() => scrollCarousel("left")}
                className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-8 bg-[#747c27] hover:bg-[#d4af37] text-white p-2 sm:p-3 rounded-full transition z-10 shadow-lg hover:scale-110"
                title="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => scrollCarousel("right")}
                className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-8 bg-[#747c27] hover:bg-[#d4af37] text-white p-2 sm:p-3 rounded-full transition z-10 shadow-lg hover:scale-110"
                title="Scroll right"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] text-gray-400 py-12 border-t border-[#747c27]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-[#d4af37] font-black mb-4 text-lg">
                  ARS KREEDASHALA
                </h4>
                <p className="text-sm text-gray-600">
                  Elite performance training for grassroots champions.
                </p>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4 text-sm uppercase">
                  Product
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#d4af37] transition"
                    >
                      Platform
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#d4af37] transition"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4 text-sm uppercase">
                  Company
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#d4af37] transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#d4af37] transition"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4 text-sm uppercase">
                  Contact
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#d4af37] transition"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#d4af37] transition"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#747c27]/20 pt-8 text-center text-sm text-gray-600">
              <p>© 2026 ARS Kreedashala. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // HOME PAGE VIEW
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-[#e8e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2" style={{ flexShrink: 0 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "#747c27",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  style={{ width: 16, height: 16 }}
                >
                  <path d="M12 2L3 7v10l9 5 9-5V7z" />
                </svg>
              </div>
              <span
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(11px, 2vw, 16px)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#111408",
                }}
              >
                ARS Kreedashala
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 4vw, 32px)", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <button
                onClick={onNavHome}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#111408",
                  fontSize: "clamp(11px, 2vw, 14px)",
                  fontWeight: 600,
                  padding: "4px 6px",
                  whiteSpace: "nowrap",
                }}
              >
                Home
              </button>
              <a
                href="#"
                style={{
                  color: "#111408",
                  textDecoration: "none",
                  fontSize: "clamp(11px, 2vw, 14px)",
                  fontWeight: 600,
                  padding: "4px 6px",
                  whiteSpace: "nowrap",
                }}
              >
                Blog
              </a>
              <a
                href="#"
                style={{
                  color: "#111408",
                  textDecoration: "none",
                  fontSize: "clamp(11px, 2vw, 14px)",
                  fontWeight: 600,
                  padding: "4px 6px",
                  whiteSpace: "nowrap",
                  display: "none",
                }}
              >
                Platform
              </a>
              <button
                style={{
                  background: "#c9a84c",
                  color: "white",
                  border: "none",
                  padding: "8px 14px",
                  fontSize: "clamp(10px, 1.5vw, 11px)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  borderRadius: 4,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Featured Post - Full Width */}
        <button
          onClick={() => handlePostClick(featuredPost)}
          className="group w-full relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transition-shadow duration-300 text-left border border-[#747c27]/30 mb-8 sm:mb-12"
        >
          <div className="aspect-video overflow-hidden bg-gray-800 relative">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent opacity-80"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <div className="flex gap-2 mb-2 sm:mb-4 flex-wrap">
              {featuredPost.isLatest && (
                <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full text-xs font-black uppercase tracking-wide animate-pulse border border-orange-400/50">
                  🔥 Latest
                </span>
              )}
              {featuredPost.tags.slice(0, 1).map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-3 py-1 bg-[#747c27]/60 text-[#d4af37] rounded-full text-xs font-bold uppercase tracking-wide border border-[#d4af37]/40"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2
              style={{ fontFamily: "Teko, sans-serif" }}
              className="text-xl sm:text-2xl md:text-4xl font-black leading-tight mb-2 sm:mb-3 tracking-tight text-white"
            >
              {featuredPost.title}
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 max-w-2xl">
              {featuredPost.excerpt}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 max-w-2xl text-xs sm:text-sm">
              <div className="flex items-center gap-2 sm:gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#d4af37]" />
                  <span className="font-bold text-white text-xs sm:text-sm">
                    {featuredPost.author}
                  </span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span className="text-xs sm:text-sm">{featuredPost.date}</span>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </button>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 border-t border-[#e8e4dc]">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#747c27] text-white shadow-lg border border-[#747c27]"
                    : "bg-white text-[#111408] border border-[#e8e4dc] hover:border-[#747c27] hover:bg-[#f7f6f1]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="w-full relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#999]" />
            <input
              type="text"
              placeholder="Search blog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-[#e8e4dc] text-[#111408] placeholder-[#ccc] focus:outline-none focus:border-[#747c27] focus:ring-2 focus:ring-[#747c27]/20 transition"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <button
              key={post.id}
              onClick={() => handlePostClick(post)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e8e4dc] hover:border-[#747c27] cursor-pointer text-left"
              style={{
                animation: `slideUp 0.5s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-800 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {post.isLatest && (
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full text-xs font-black uppercase tracking-wide animate-pulse border border-orange-400/50">
                      🔥 New
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#747c27] text-white rounded-full text-xs font-bold uppercase tracking-wide border border-[#747c27]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-black text-[#111408] mb-2 line-clamp-2 group-hover:text-[#747c27] transition">
                  {post.title}
                </h3>

                <p className="text-sm text-[#666] mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-[#e8e4dc] flex items-center justify-between">
                  <div className="flex flex-col text-xs text-[#999]">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3 text-[#747c27]" />
                      <span className="font-bold text-[#666]">
                        {post.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#747c27]" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#747c27] font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#747c27] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 tracking-tight text-white">
            Stay Updated on Performance Insights
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get weekly tips, data-driven strategies, and community updates
            delivered to your inbox.
          </p>
          <div className="flex gap-2 sm:gap-3 max-w-md mx-auto flex-col sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 sm:py-3 rounded-lg text-[#0f0f0f] text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 transition font-medium"
            />
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-[#747c27] font-black rounded-lg hover:bg-[#d4af37] transition whitespace-nowrap text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111408] text-[#999] py-12 border-t border-[#e8e4dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-[#111408] font-black mb-4 text-lg">
                ARS KREEDASHALA
              </h4>
              <p className="text-sm text-[#999]">
                Elite performance training for grassroots champions.
              </p>
            </div>
            <div>
              <h5 className="text-[#111408] font-bold mb-4 text-sm uppercase">
                Product
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#111408] font-bold mb-4 text-sm uppercase">
                Company
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#111408] font-bold mb-4 text-sm uppercase">
                Legal
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#747c27] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e8e4dc] pt-8 flex justify-between items-center text-sm text-[#999]">
            <p>© 2026 ARS Kreedashala. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#747c27] transition">
                Twitter
              </a>
              <a href="#" className="hover:text-[#747c27] transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#747c27] transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
