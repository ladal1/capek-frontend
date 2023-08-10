import React from "react";
import '../App.scss';
import useHomeArticle from "../Hooks/homearticle_fetch";
const Home: React.FC = () => {
    const [article, isLoading, error] = useHomeArticle();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div className="Text">
        {article?.content}
      </div>
    );
  };
  
  export default Home;