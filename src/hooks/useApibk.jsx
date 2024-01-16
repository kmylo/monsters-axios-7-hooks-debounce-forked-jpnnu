import { useEffect, useState } from "react";

const useApibk = (url) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const doFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  };

  useEffect(() => {
    doFetch();
  }, []);

  // const response = await fetch(url);

  return { response: data, error, isLoading };
};

export default useApibk;

// https://www.youtube.com/watch?v=hnJe7CC0EjQ&ab_channel=LeoMedina-JavascriptDeveloper
