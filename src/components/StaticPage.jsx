import { useEffect } from "react";

const StaticPage = () => {
  useEffect(() => {
    window.location.href = "/home.html"; // Redirect to static page
  }, []);

  return null; // Prevent rendering inside a container
};

export default StaticPage;
