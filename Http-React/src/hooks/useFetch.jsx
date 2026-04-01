import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);

  const [id, setId] = useState(null);

  const bodyRequest = (method, data, id) => {
    setConfig({
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setMethod(method);
    id !== undefined && setId(id);
  };

  const httpConfig = (data, method, id) => {
    if (method === "POST") {
      bodyRequest(method, data);
    } else if (method === "PATCH") {
      bodyRequest(method, data, id);
    } else if (method === "DELETE") {
      setMethod(method);
      setId(id);
    }
  };

  useEffect(() => {
    if (!method) return;
    setLoading(true); 

    async function httpRequest() {
      setError(null);
      try {
        if (method === "POST") {
          const res = await fetch(url, config);
          if (!res.ok) {
            throw new Error("Erro ao enviar dados");
          }
          const json = await res.json();
          setData((prevData) => [...prevData, json]);
        } else if (method === "PATCH") {
          const res = await fetch(`${url}/${id}`, config);
          if (!res.ok) {
            throw new Error("Erro ao atualizar dados");
          }
          const json = await res.json();
          setData((prevData) => {
            return prevData.map((item) => (item.id === id ? json : item));
          });
        } else if (method === "DELETE") {
          const res = await fetch(`${url}/${id}`, { method: "DELETE" });
          if (!res.ok) {
            throw new Error("Erro ao deletar dados");
          }
          setData((prevData) => prevData.filter((item) => item.id !== id));
        }
      } catch (error) {
        console.log(error.message);
        setError("Erro na requisição");
      } finally {
        setLoading(false);
      }
    }
    setMethod(null); 

    httpRequest();
  }, [config, method, url, id]);

  // GET
  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }

        const json = await res.json();

        const normalizedData = json.map((item) => ({
          ...item,
          price: Number(item.price),
        }));

        setData(normalizedData);
      } catch (error) {
        console.log(error.message);
        setError("Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error, httpConfig };
};
