import React, { useState, useRef, useEffect, useMemo } from "react";
import BlogHomeView from "./BlogHomeView";
import BlogDetailView from "./BlogDetailView";
import { blogPosts, categories, carouselImages } from "./data";

export default function ARSBlogPlatform({ onNavHome }) {
  const [currentView, setCurrentView] = useState("home");
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [liked, setLiked] = useState({});
  const carouselRef = useRef(null);

  const featuredPost = blogPosts[0];

  const filteredPosts = useMemo(() => {
    const basePosts =
      activeCategory === "all"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);

    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return basePosts;
    }

    return basePosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery]);

  const relatedPosts = useMemo(() => {
    if (!selectedPost) {
      return [];
    }

    return blogPosts
      .filter(
        (post) =>
          post.category === selectedPost.category &&
          post.id !== selectedPost.id,
      )
      .slice(0, 2);
  }, [selectedPost]);

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

  if (currentView === "detail" && selectedPost) {
    return (
      <BlogDetailView
        selectedPost={selectedPost}
        liked={liked}
        onBackClick={handleBackClick}
        onToggleLike={toggleLike}
        relatedPosts={relatedPosts}
        onPostClick={handlePostClick}
        carouselRef={carouselRef}
        carouselImages={carouselImages}
        onScrollCarousel={scrollCarousel}
      />
    );
  }

  return (
    <BlogHomeView
      onNavHome={onNavHome}
      featuredPost={featuredPost}
      categories={categories}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      filteredPosts={filteredPosts}
      onPostClick={handlePostClick}
    />
  );
}
