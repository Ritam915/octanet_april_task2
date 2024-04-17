import React from "react";
import "./Tag.css";
const Tag = ({ tagName, selectTag, selected }) => {
  //   console.log("props", props);
  const tagStyle = {
    HTML: { backgroundColor: "#82E0AA " },
    CSS: { backgroundColor: "#5DADE2 " },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
