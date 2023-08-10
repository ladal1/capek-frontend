import { useEffect, useState } from "react";

interface HomeArticle {
  id: number;
  content: string;

}

interface HomeArticleResponse {
  data: {
    id: number;
    attributes: {
      Content: string;
    };
  };
  meta: any;
}

const useHomeArticle = () => {
  const [article, setArticle] = useState<HomeArticle | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any| undefined>(undefined);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/homearticle");
        const data: HomeArticleResponse = await response.json();
        const {
          id,
          attributes: { Content },
        } = data.data;
        setArticle({
          id,
          content: Content
        });
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, []);

  return [article, isLoading, error];
};

export default useHomeArticle;
