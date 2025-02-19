import React from "react";

const StaticPage = ({ page }) => {
  return (
    <iframe
      src={`/${page}.html`}
      style={{ width: "100%", height: "100vh", border: "none" }}
      title={page}
    />
  );
};

export default StaticPage;
