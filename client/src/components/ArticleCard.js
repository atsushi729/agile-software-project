import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleCard.css";

const ArticleCard = ({ id, image, title, description, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description}</p>
        <p className="article-date">{date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
