import React from 'react';
import "./index.css";

const TagItem = ({ tag }) => {
  return (
    <a href={tag.link}>
    <button className="tag-btn">
      <span>{tag.name}</span>
    </button>
    </a>
  );
}

export default TagItem;
