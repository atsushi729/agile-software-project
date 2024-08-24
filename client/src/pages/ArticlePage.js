import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import { stubArticle } from "../constants/stub";
import Footer from "../components/Footer";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3000";
    fetch(`${API_ENDPOINT}/articles/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Article not found");
        }
        return response.json();
      })
      .then((data) => {
        const targetArticle = data.articles.find(
          (article) => article._id === id
        );
        setArticle(targetArticle);
        setArticleList(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setArticle(stubArticle[id]); // Use stub data in case of error
        setArticleList(stubArticle);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main className="article-main">
        <section className="article-hero">
          <h1 className="article-page-title">{article.title}</h1>
          <p className="article-author">By {article.author}</p>
          <img
            src={article.image}
            alt="Article hero"
            className="article-page-image"
          />
        </section>
        <section className="article-page-content">{article.content}</section>
        <section className="featured-articles">
          <h3>Featured Articles</h3>
          <div className="article-grid">
            {articleList.slice(0, 3).map((article, index) => (
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
