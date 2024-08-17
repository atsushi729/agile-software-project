import React, { useEffect, useState } from "react";
import "./ArticleListPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";
import { stubArticle } from "../constants/stub";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3000";
    // Fetch article data from the API
    fetch(`${API_ENDPOINT}/articles`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Articles not found");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        // Use the stub article data if the API call fails
        setArticles(stubArticle);
      });
  }, []);

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
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              id={article.id}
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
