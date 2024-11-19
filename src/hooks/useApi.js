import { useContext, useEffect, useState } from "react";
import ApiContext from "../context/api.js";

export default function useApi(url) {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);
  let [data, setData] = useState([]);

  const api = useContext(ApiContext);
  const apiFn = url.split(".").reduce((obj, name) => obj[name], api);

  useEffect(() => {
    if (!url) return;

    apiFn()
      .then((text) => setData(text))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    data,
  };
}
