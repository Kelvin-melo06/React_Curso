import { useFetch } from "./hooks/useFetch.jsx";
import { useState } from "react";

const url = "http://localhost:3000/products";

function App() {
  const { data: items, loading, error, httpConfig } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isEditId, setIsEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price: Number(price),
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const handleEdit = (product) => {
    setIsEditId(product.id);
    setName(product.name);
    setPrice(product.price);
  };

  const handleSave = (id) => {
    httpConfig({ name, price: Number(price) }, "PATCH", id);

    // ✅ limpa edição
    setIsEditId(null);
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {loading && <p>Carregando Dados....</p>}
      {error && <p>{error}</p>}

      {items && items.length > 0 ? ( // ✅ mais seguro
        <ul>
          {items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price.toFixed(2)}

              <button onClick={() => handleEdit(product)}>
                Editar
              </button>

              <button onClick={() => httpConfig(null, "DELETE", product.id)}>
                Excluir
              </button>

              {isEditId === product.id && (
                <button onClick={() => handleSave(product.id)}>
                  Salvar
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <span>Price:</span>
            <input
              type="number"
              step="0.01"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
}

export default App;