import { useEffect, useState } from "react";

interface Article {
  id: number;
  Title: string;
  Content: any;
  Price: any;
  Pictures: {
    data: any;
  };
  InstrumentType: string;
}

interface ArticleResponse {
  id: number;
  attributes: {
    Title: string;
    Content: any;
    Price: any;
    Pictures: {
      data: any;
    };
    instrument_type: {
      data: {
        id: number;
        attributes: {
          Name: string;
        };
      };
    };
  };
}

const useHomeArticle = () => {
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any| undefined>(undefined);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/articles?populate=*");
        const data: ArticleResponse = await response.json();
        const {
          id,
          attributes: { Content,Title,Price, },
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
