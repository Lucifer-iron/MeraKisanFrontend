
import { useState } from "react";
import { FaRegThumbsDown,FaRegThumbsUp } from "react-icons/fa";
import './FarmerCard.css';

const FarmerCard = ({ farmer }) => {

  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);

  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === 'like') {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === 'dislike') {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };


  return (
    <div className="farmer-card">
      <div className="farmer-image">
        <img src={farmer.image} alt={farmer.name} />
      </div>
      <div className="farmer-details">
        <h3 className="farmer-name">{farmer.name}
          <span className="farmer-location">{farmer.location}</span>
          <p className="farmer-description">{farmer.description}</p>
        </h3>
      
          <div className="rating-btn-container">
            <button
              className={`rating-btn ${activeBtn === "like" ? "like-active" : ""}`}
              onClick={handleLikeClick}
            >
              <FaRegThumbsUp/>
              Like {likeCount}
            </button>

            <button
              className={`rating-btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
              onClick={handleDisikeClick}
            >
              <FaRegThumbsDown/>
              Dislike {dislikeCount}
            </button>
          </div>
        <div className="farmer-buttons">
          <button className="farmer-details-button">View Details</button>
          <button className="farmer-chat-button">Chat with Farmer</button>
        </div>
      </div>
    </div>
  );
};

export default FarmerCard;