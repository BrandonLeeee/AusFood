import { useEffect, useState } from "react";
import "../../public/style.css";
const StaticPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/home.html")
      .then((response) => response.text())
      .then((html) => setContent(html))
      .catch((error) => console.error("Error loading static page:", error));

    // Inject CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/style.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className="static-content-container">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default StaticPage;
