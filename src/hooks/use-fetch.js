import { useState } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const response = await cb(options, ...args);
      setData(response);
      return response;
    } catch (error) {
      console.error("useFetch error:", error);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn };
};

export default useFetch;
