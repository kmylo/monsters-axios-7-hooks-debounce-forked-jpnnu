import { useEffect, useState } from "react";
import "axios-progress-bar/dist/nprogress.css";

const useApi = (url, _params) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const doFetch = async (params = _params) => {
    let data = await url
      .get("/", {
        params
      })
      .then(({ data }) => {
        // console.log("data2", data);
        return data.results || data;
      })
      .catch((error) => {
        console.log("custom error:", error);
        setError(error.message);
      });
    setData(data);
    setIsloading(false);
  };

  useEffect(() => {
    doFetch();
  }, []);
  return { response: data, error, isLoading, refetch: doFetch };
};

export default useApi;
