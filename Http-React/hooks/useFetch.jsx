import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

// METHOAD GET
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

// METHOAD POST
  const postData = () => {
    async function postData(newItem) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });
        const json = await response.json();
        setData((prevData) => [...prevData, json]);
      } catch (error) {
        console.log(error);
      }
    }
    postData();
  };

// RETORNO DOS DADOS, LOADING E FUNÇÃO DE POST
  return { data, loading, postData };
};
