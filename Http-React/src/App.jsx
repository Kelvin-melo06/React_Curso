import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch.jsx";

const url = "http://localhost:3000/products";

function App() {
  const { data: items, loading, error, httpConfig } = useFetch(url);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price: Number(price),
    };

    httpConfig(product, "POST");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Http-React</h1>
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) =>(
              <li key={product.id}>
                {product.name} - R$ {product.price}
                <button onClick={() => httpConfig(null, "DELETE", product.id)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200">
                  Deletar
                </button>
              </li>
            ))}
        </ul>
      )}

      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <label className="block">
            <span>Name:</span>
            <input
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 w-full h-7 ml-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Price:</span>
            <input
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 w-full h-7 ml-2"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading ? (
            <input
              className="border border-gray-300 rounded-md shadow-sm p-2 bg-blue-500 text-white w-48 hover:bg-blue-600 hover:transform hover:scale-105 hover:transition duration-200 hover: transition-all"
              type="submit"
              disabled
              value="Aguarde"
            />
          ) : (
            <input
              type="submit"
              className="border border-gray-300 rounded-md shadow-sm p-2 bg-blue-500 text-white w-48 hover:bg-blue-600 hover:transform hover:scale-105 hover:transition duration-200 hover: transition-all"
              value="Enviar"
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
