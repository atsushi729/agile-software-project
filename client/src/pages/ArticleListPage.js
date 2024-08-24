import React, { useState, useEffect } from "react";
import "./ArticleListPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import { stubArticle } from "../constants/stub";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const { data: article, isLoading, error } = useFetch("/articles");

  useEffect(() => {
    // Success
    if (article) {
      setArticles(article.articles);
    }
    // Error
    if (error) {
      console.error("Error fetching article:", error);
      setArticles(stubArticle);
    }
  }, [article, error]);

  return (
    <div className="article-list-page">
      <Header />
      <main>
        <section className="header-hero">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Read eco-friendly article</h1>
            <p>
              We will also focus on eco-friendly cooking to help cut down on
              food waste. You can generate new recipe using generative AI.
            </p>
          </div>
        </section>
        <SearchBar />
        <div className="article-list">
          {isLoading && <div>Loading...</div>}
          {articles &&
            articles.map((article, index) => (
              <ArticleCard
                key={index}
                id={article._id}
                title={article.title}
                image={article.image}
                description={article.description}
                date={article.date}
              />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleListPage;
