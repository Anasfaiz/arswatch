import React, { useState } from "react";
import Navbar from "../sections/Navbar";
import "./blog.css";

const SPORTS_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552481851-8fbe026e6d8d?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1624526267942-ab67cb7db225?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1545007713-51671e0bb629?w=1200&h=400&fit=crop",
];

const POSTS_PER_PAGE = 4;

const FireIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff3333">
    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 2.08 13.5.67zM12 20c-3.35 0-6-2.57-6-6s2.65-6 6-6 6 2.57 6 6-2.65 6-6 6z" />
  </svg>
);

const DotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default function BlogHomeView({
  onNavHome,
  featuredPost,
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  filteredPosts,
  onPostClick,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const randomHeroImage =
    SPORTS_HERO_IMAGES[Math.floor(Math.random() * SPORTS_HERO_IMAGES.length)];

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE,
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 300);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 300);
    }
  };

  return (
    <div className="blog-page">
      {/* Navbar */}
      <Navbar menuOpen={false} setMenuOpen={() => {}} onNavBlog={() => {}} />

      {/* Hero Section */}
      <div className="blog-hero">
        <img src="./watch1.png" alt="Blog Hero" />
        <div className="blog-hero-overlay">
          <div className="blog-hero-content">
            <p className="blog-hero-breadcrumb">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavHome) onNavHome();
                }}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                }}
              >
                Home
              </a>
              {" / "}
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Our Blogs</span>
            </p>
            <h1 className="blog-hero-title">Our Blogs</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="blog-main">
        <div className="blog-grid">
          {/* Left Column - Blog Cards */}
          <div>
            <div className="blog-cards-container">
              {paginatedPosts.length > 0 ? (
                paginatedPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="blog-card"
                    onClick={() => onPostClick(post)}
                  >
                    {/* Card Image */}
                    <div className="blog-card-image">
                      {index === 0 && (
                        <div
                          className="blog-card-badge"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <FireIcon />
                          LATEST
                        </div>
                      )}
                      {index === 1 && (
                        <div
                          className="blog-card-badge"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <DotIcon />
                          NEW
                        </div>
                      )}
                      <img src={post.image} alt={post.title} />
                    </div>

                    {/* Card Content */}
                    <div className="blog-card-content">
                      {/* Meta Info */}
                      <div className="blog-card-meta">
                        <span className="blog-card-meta-author">
                          {post.author}
                        </span>
                        <span className="blog-card-meta-separator">|</span>
                        <span>{post.date}</span>
                        <span className="blog-card-meta-separator">|</span>
                        <span>4 min read</span>
                      </div>

                      {/* Title */}
                      <h3 className="blog-card-title">{post.title}</h3>

                      {/* Description */}
                      <p className="blog-card-description">{post.excerpt}</p>

                      {/* Read More Button */}
                      <button
                        className="blog-card-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPostClick(post);
                        }}
                      >
                        READ MORE
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="blog-no-posts">No posts found</div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > POSTS_PER_PAGE && (
              <div className="pagination-container">
                <button
                  className="pagination-button"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      className={`pagination-button ${currentPage === idx ? "active" : ""}`}
                      onClick={() => {
                        setCurrentPage(idx);
                        window.scrollTo(0, 300);
                      }}
                      style={{
                        width: "40px",
                        height: "40px",
                        padding: "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  className="pagination-button"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                >
                  Next
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <aside className="blog-sidebar">
            {/* Search Widget */}
            <div className="sidebar-widget">
              <h3 className="sidebar-title">Search</h3>
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Type here ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-icon-button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="sidebar-widget">
              <h3 className="sidebar-title">Categories</h3>
              <div className="categories-list">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`category-item ${
                      activeCategory === cat.id ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="category-count">({cat.count || 1})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="sidebar-widget">
              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="recent-posts-list">
                {filteredPosts.slice(0, 4).map((post, idx) => (
                  <div
                    key={idx}
                    className="recent-post-item"
                    onClick={() => onPostClick(post)}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="recent-post-thumbnail"
                    />
                    <div className="recent-post-content">
                      <h5 className="recent-post-title">{post.title}</h5>
                      <p className="recent-post-date">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Widget */}
            <div className="sidebar-widget">
              <h3 className="sidebar-title">Tags</h3>
              <div className="tags-list">
                {[
                  "travel",
                  "tour",
                  "beach",
                  "nature",
                  "wellness",
                  "food",
                  "culture",
                  "adventure",
                ].map((tag, idx) => (
                  <button key={idx} className="tag-button">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="blog-footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* About */}
            <div className="footer-column">
              <h4>About</h4>
              <p>
                Discover inspiring travel stories, tips, and guides for your
                next adventure with Ars Kreedashala.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#blogs">Blogs</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div className="footer-column">
              <h4>Information</h4>
              <ul className="footer-links">
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#sitemap">Sitemap</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-column">
              <h4>Newsletter</h4>
              <p>Subscribe to get the latest updates.</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                />
                <button type="submit" className="newsletter-button">
                  →
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-divider">
            <p className="footer-copyright">
              © 2024 Ars Kreedashala. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
