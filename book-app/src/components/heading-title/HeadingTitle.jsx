import React from "react";

const HeadingTitle = ({ title }) => {
  return (
    <div style={divStyles}>
      <h2 style={h2Styles}>{title}</h2>
    </div>
  );
};

const divStyles = {
  padding: "10px 30px",
  backgroundColor: "#fff",
};

const h2Styles = {
  color: "#1926d2",
  fontSize: "30px",
  fontWeight: "500",
  borderBottom: "2px solid #1926d2",
  width: "max-content",
  paddingBottom: "5px",
};
export default HeadingTitle;
