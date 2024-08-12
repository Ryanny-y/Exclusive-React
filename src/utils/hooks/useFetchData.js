import { useState, useEffect } from 'react';

const useFetchData = (dataUrl, reqBody = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async (url, options) => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        if (isMounted) {
          setData(data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setData([]);
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData(dataUrl, reqBody);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [dataUrl]);

  return { data, error, isLoading };
};

export default useFetchData;
