import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);

  const [id, setId] = useState(null);

  const httpConfig = (data, method, id) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setMethod(method);
      setId(id);
    }
  };

  useEffect(() => {
    // 6 - loading
    setLoading(true);

    const fetchData = async () => {
      // 7 - tratando erros
      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);

        setError("Houve algum erro ao carregar os dados!");
      }

      // 6 - loading
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        await fetch(...fetchOptions);
      } else if (method === "DELETE") {
        let deleteUrl = `${url}/${id}`;
        await fetch(deleteUrl, { method: "DELETE" });
      }

      setCallFetch((prev) => !prev);
    };

    httpRequest();
  }, [config, method, url, id]);

  return { data, httpConfig, loading, error };
};
