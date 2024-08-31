import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import { stubArticle } from "../constants/stub";
import Footer from "../components/Footer";
import "./ArticlePage.css";
import useFetch from "../hooks/useFetch";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [articleList, setArticleList] = useState([]);
  // fetch article data
  const { data: articleData, isLoading, error } = useFetch("/articles");

  // prettier-ignore
  useEffect(() => {
    // Success
    if (articleData) {
      setArticle(articleData.articles.find((article) => article._id === id));
      setArticleList(articleData.articles);
    }
    // Error
    if (error) {
      console.error("Error fetching article:", error);
      setArticle(stubArticle.find((article) => article._id === Number(id)) || {});
      setArticleList(stubArticle);
    }
  }, [articleData, error, id, isLoading]);

  return (
    <div>
      <main className="article-main">
        {isLoading && <div>Loading...</div>}
        {article && (
          <>
            <section className="article-hero">
              <Header />
              <h1 className="article-page-title">{article.title}</h1>
              <p className="article-author">By {article.author}</p>
              <img
                src={article.image}
                alt="Article hero"
                className="article-page-image"
              />
            </section>
            <section className="article-page-content">
              {article.content}
            </section>
          </>
        )}
        <section className="featured-articles">
          <h3>Featured Articles</h3>
          <div className="article-grid">
            {articleList &&
              articleList
                .slice(0, 3)
                .map((articleItem) => (
                  <ArticleCard
                    key={articleItem._id}
                    id={articleItem._id}
                    title={articleItem.title}
                    image={articleItem.image}
                    description={articleItem.description}
                    date={articleItem.date}
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
