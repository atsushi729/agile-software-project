import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // prettier-ignore
  useEffect(() => {
    const BASE_API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:3000";
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_API_ENDPOINT}${url}`, { signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
