import { useContext, useEffect, useState } from "react";
import ApiContext from "../context/api.js";

export default function useApi(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const api = useContext(ApiContext);

  useEffect(() => {
    if (!url) return;

    const apiFn = url.split(".").reduce((obj, name) => {
      if (!obj || !obj[name]) {
        setError(new Error(`API method ${url} does not exist.`));
        throw new Error(`API method ${url} does not exist.`);
      }
      return obj[name];
    }, api);

    if (typeof apiFn !== "function") {
      setError(new Error(`API path ${url} is not a function.`));
      return;
    }
    setIsLoading(true);
    apiFn()
      .then((response) => setData(response))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    error,
    data,
  };
}
