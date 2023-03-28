import React from "react";
import "./ShareButtons.css";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Web = () => {
  const shareUrl = "https://example.com";
  const title = "Check out this website!";

  return (
    <div className="share-buttons">
      <br />
      <br />
      <br />
      <br />
      <a
        href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href={`https://github.com/`} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href={`https://www.instagram.com/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a href={shareUrl} target="_blank" rel="noopener noreferrer">
        Web
      </a>
    </div>
  );
};

export default Web;
