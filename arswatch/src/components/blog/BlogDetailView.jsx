import React, { useState, useRef } from "react";
import Navbar from "../sections/Navbar";
import { categories as allCategories, blogPosts } from "./data";
import { GALLERY_MEDIA } from "./gallery-config";
import "./blog.css";

const GOLD = "#d4af37";
const PRIMARY = "#747c27";

export default function BlogDetailView({
  selectedPost,
  liked,
  onBackClick,
  onToggleLike,
  relatedPosts,
  onPostClick,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Get recent posts (last 3)
  const recentPosts = blogPosts.slice(0, 3);

  // Get unique tags from all posts
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags || []))];

  // Separate images and videos
  const galleryImages = GALLERY_MEDIA.filter((m) => m.type === "image");
  const galleryVideos = GALLERY_MEDIA.filter((m) => m.type === "video");
  const currentVideo = galleryVideos[currentGalleryIndex] || galleryVideos[0];

  // Ref for videos section
  const videosRef = useRef(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const scrollToVideos = () => {
    if (videosRef.current) {
      videosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevGallery = () => {
    setCurrentGalleryIndex(
      currentGalleryIndex === 0
        ? galleryVideos.length - 1
        : currentGalleryIndex - 1,
    );
  };

  const handleNextGallery = () => {
    setCurrentGalleryIndex(
      currentGalleryIndex === galleryVideos.length - 1
        ? 0
        : currentGalleryIndex + 1,
    );
  };

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar onBlogClick={() => {}} />

      {/* Main Container */}
      <div className="blog-page" style={{ background: "#f5f5f5" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
        >
          {/* Back Button */}
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <button
              onClick={onBackClick}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: GOLD,
                fontFamily: '"Teko", sans-serif',
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ← Back to Blog
            </button>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="blog-grid">
            {/* LEFT COLUMN - MAIN CONTENT (70%) */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Featured Image */}
              {selectedPost.image && (
                <div
                  style={{
                    width: "100%",
                    height: "350px",
                    overflow: "hidden",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              )}

              {/* Content Section */}
              <div style={{ padding: "40px" }}>
                {/* Category Badge */}
                <div style={{ marginBottom: "20px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      backgroundColor: PRIMARY,
                      color: "#fff",
                      fontFamily: '"Teko", sans-serif',
                      border: `2px solid ${GOLD}`,
                      textTransform: "uppercase",
                    }}
                  >
                    {selectedPost.category}
                  </span>
                </div>

                {/* Title */}
                <h1
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "#000",
                    fontFamily: '"Teko", sans-serif',
                    margin: "0 0 24px 0",
                    lineHeight: "1.3",
                  }}
                >
                  {selectedPost.title}
                </h1>

                {/* Author & Meta Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    paddingBottom: "24px",
                    borderBottom: "1px solid #eee",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: PRIMARY,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    {selectedPost.author.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#000",
                        fontFamily: '"Teko", sans-serif',
                      }}
                    >
                      {selectedPost.author}
                    </p>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        fontSize: "14px",
                        color: "#999",
                      }}
                    >
                      {selectedPost.authorRole} • {selectedPost.date}
                    </p>
                  </div>
                  <button
                    onClick={() => onToggleLike(selectedPost.id)}
                    style={{
                      marginLeft: "auto",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: liked[selectedPost.id]
                        ? GOLD
                        : "#f0f0f0",
                      color: liked[selectedPost.id] ? "#000" : "#666",
                      fontFamily: '"Teko", sans-serif',
                      transition: "all 0.3s ease",
                    }}
                  >
                    {liked[selectedPost.id] ? "♥ Liked" : "♡ Like"}
                  </button>
                </div>

                {/* Post Content */}
                <div>
                  {selectedPost.sections &&
                    selectedPost.sections.map((section, idx) => {
                      switch (section.type) {
                        case "intro":
                          return (
                            <div key={idx} style={{ marginBottom: "30px" }}>
                              <h2
                                style={{
                                  fontSize: "28px",
                                  fontWeight: "700",
                                  color: "#000",
                                  fontFamily: '"Teko", sans-serif',
                                  margin: "0 0 16px 0",
                                }}
                              >
                                {section.title}
                              </h2>
                              <p
                                style={{
                                  fontSize: "16px",
                                  color: "#666",
                                  lineHeight: "1.7",
                                  margin: "0",
                                }}
                              >
                                {section.content}
                              </p>
                            </div>
                          );

                        case "image":
                          return (
                            <div
                              key={idx}
                              style={{
                                margin: "30px 0",
                                borderRadius: "10px",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={section.image}
                                alt="Post content"
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  display: "block",
                                }}
                              />
                            </div>
                          );

                        case "paragraph":
                          return (
                            <p
                              key={idx}
                              style={{
                                fontSize: "16px",
                                color: "#666",
                                lineHeight: "1.7",
                                marginBottom: "20px",
                                margin: "0 0 20px 0",
                              }}
                            >
                              {section.content}
                            </p>
                          );

                        case "text_image":
                          return (
                            <div
                              key={idx}
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "30px",
                                margin: "30px 0",
                                alignItems: "center",
                              }}
                            >
                              <div>
                                <h3
                                  style={{
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    color: "#000",
                                    fontFamily: '"Teko", sans-serif',
                                    margin: "0 0 16px 0",
                                  }}
                                >
                                  {section.title}
                                </h3>
                                <p
                                  style={{
                                    fontSize: "16px",
                                    color: "#666",
                                    lineHeight: "1.7",
                                    whiteSpace: "pre-line",
                                    margin: "0",
                                  }}
                                >
                                  {section.text}
                                </p>
                              </div>
                              <div
                                style={{
                                  borderRadius: "10px",
                                  overflow: "hidden",
                                }}
                              >
                                <img
                                  src={section.image}
                                  alt={section.title}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                  }}
                                />
                              </div>
                            </div>
                          );

                        case "video":
                          return (
                            <div
                              key={idx}
                              style={{
                                margin: "30px 0",
                                borderRadius: "10px",
                                overflow: "hidden",
                              }}
                            >
                              <video
                                src={section.video}
                                controls
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  display: "block",
                                }}
                              />
                            </div>
                          );

                        default:
                          return null;
                      }
                    })}
                </div>

                {/* Related Articles */}
                {relatedPosts && relatedPosts.length > 0 && (
                  <div
                    style={{
                      marginTop: "50px",
                      paddingTop: "30px",
                      borderTop: "1px solid #eee",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#000",
                        fontFamily: '"Teko", sans-serif',
                        margin: "0 0 30px 0",
                      }}
                    >
                      Related Articles
                    </h2>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                      }}
                    >
                      {relatedPosts.slice(0, 2).map((post) => (
                        <div
                          key={post.id}
                          onClick={() => onPostClick(post)}
                          style={{
                            borderRadius: "10px",
                            overflow: "hidden",
                            cursor: "pointer",
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            backgroundColor: "#f9f9f9",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-4px)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 16px rgba(0, 0, 0, 0.12)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 2px 8px rgba(0, 0, 0, 0.08)";
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "160px",
                              overflow: "hidden",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            <img
                              src={post.image}
                              alt={post.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                transition: "transform 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            />
                          </div>
                          <div style={{ padding: "16px" }}>
                            <h3
                              style={{
                                fontSize: "16px",
                                fontWeight: "700",
                                color: "#000",
                                fontFamily: '"Teko", sans-serif',
                                margin: "0 0 8px 0",
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {post.title}
                            </h3>
                            <p
                              style={{
                                fontSize: "14px",
                                color: "#666",
                                margin: "0",
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN - SIDEBAR (30%) */}
            <div className="blog-sidebar">
              {/* Search Widget */}
              <div className="sidebar-widget">
                <div className="sidebar-title">Search</div>
                <div className="search-input-container">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <button className="search-icon-button">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="sidebar-widget">
                <div className="sidebar-title">Categories</div>
                <div className="categories-list">
                  {allCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`category-item ${
                        selectedCategory === category.id ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span>{category.label}</span>
                      <span className="category-count">
                        {
                          blogPosts.filter((p) => p.category === category.id)
                            .length
                        }
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="sidebar-widget">
                <div className="sidebar-title">Recent Posts</div>
                <div className="recent-posts-list">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="recent-post-item"
                      onClick={() => onPostClick(post)}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="recent-post-thumbnail"
                      />
                      <div className="recent-post-content">
                        <p className="recent-post-title">{post.title}</p>
                        <p className="recent-post-date">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Widget */}
              <div className="sidebar-widget">
                <div className="sidebar-title">Tags</div>
                <div className="tags-list">
                  {allTags.map((tag, idx) => (
                    <button key={idx} className="tag-button">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Bento Grid + Video Carousel */}
      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "60px 24px",
          marginTop: "40px",
          position: "relative",
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.03) 10px, rgba(212, 175, 55, 0.03) 20px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section Title */}
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#fff",
              fontFamily: '"Teko", sans-serif',
              textTransform: "uppercase",
              margin: "0 0 50px 0",
              textAlign: "center",
              letterSpacing: "2px",
            }}
          >
            Gallery
          </h2>

          {/* Bento Grid for Images */}
          {galleryImages.length > 0 && (
            <div style={{ marginBottom: "60px" }}>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: GOLD,
                  fontFamily: '"Teko", sans-serif',
                  textTransform: "uppercase",
                  margin: "0 0 30px 0",
                  paddingBottom: "10px",
                  borderBottom: `2px solid ${GOLD}`,
                }}
              >
                Photos
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "20px",
                  gridAutoRows: "250px",
                }}
              >
                {galleryImages.map((image, idx) => (
                  <div
                    key={image.id}
                    style={{
                      gridColumn: idx === 0 || idx === 3 ? "span 2" : "span 1",
                      gridRow: [0, 3].includes(idx) ? "span 2" : "span 1",
                      position: "relative",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      backgroundColor: "#000",
                      group: "image-item",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(212, 175, 55, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    {/* Image Title Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "20px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    >
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "700",
                          fontFamily: '"Teko", sans-serif',
                          margin: "0",
                        }}
                      >
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button to Videos */}
              {galleryVideos.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  <button
                    onClick={scrollToVideos}
                    style={{
                      padding: "12px 24px",
                      borderRadius: "50px",
                      backgroundColor: GOLD,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: "700",
                      fontFamily: '"Teko", sans-serif',
                      textTransform: "uppercase",
                      transition:
                        "all 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      color: "#000",
                      letterSpacing: "1px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e8c547";
                      e.currentTarget.style.transform =
                        "translateY(-4px) scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(212, 175, 55, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = GOLD;
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Next
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Video Carousel */}
          {galleryVideos.length > 0 && (
            <div ref={videosRef} style={{ scrollMarginTop: "60px" }}>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: GOLD,
                  fontFamily: '"Teko", sans-serif',
                  textTransform: "uppercase",
                  margin: "0 0 30px 0",
                  paddingBottom: "10px",
                  borderBottom: `2px solid ${GOLD}`,
                }}
              >
                Videos
              </h3>
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#000",
                }}
              >
                {/* Current Video */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <video
                    src={currentVideo.src}
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Video Title Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      padding: "40px 30px 30px 30px",
                    }}
                  >
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "700",
                        fontFamily: '"Teko", sans-serif',
                        margin: "0",
                      }}
                    >
                      {currentVideo.title}
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                {galleryVideos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevGallery}
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: GOLD,
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        transition:
                          "transform 0.3s ease, background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e8c547";
                        e.currentTarget.style.transform =
                          "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = GOLD;
                        e.currentTarget.style.transform = "translateY(-50%)";
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNextGallery}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: GOLD,
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        transition:
                          "transform 0.3s ease, background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e8c547";
                        e.currentTarget.style.transform =
                          "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = GOLD;
                        e.currentTarget.style.transform = "translateY(-50%)";
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Video Carousel Indicators */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "10px",
                        zIndex: 10,
                      }}
                    >
                      {galleryVideos.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentGalleryIndex(idx)}
                          style={{
                            width:
                              currentGalleryIndex === idx ? "32px" : "10px",
                            height: "10px",
                            borderRadius: "5px",
                            backgroundColor:
                              currentGalleryIndex === idx
                                ? GOLD
                                : "rgba(255,255,255,0.5)",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (currentGalleryIndex !== idx) {
                              e.currentTarget.style.backgroundColor =
                                "rgba(255,255,255,0.8)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentGalleryIndex !== idx) {
                              e.currentTarget.style.backgroundColor =
                                "rgba(255,255,255,0.5)";
                            }
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Video Counter */}
              {galleryVideos.length > 1 && (
                <p
                  style={{
                    color: GOLD,
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontFamily: '"Teko", sans-serif',
                  }}
                >
                  {currentGalleryIndex + 1} / {galleryVideos.length}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
