import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [datas, setDatas] = useState<T>([] as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = (await res.json()) as T;
      setDatas(json);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { datas, loading, error, refetch };
};
