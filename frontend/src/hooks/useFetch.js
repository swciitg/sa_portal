import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [loading, setloading] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      setloading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
        setloading(false);
      } catch (err) {
        setError(false);
      }
    };
    fetch();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
