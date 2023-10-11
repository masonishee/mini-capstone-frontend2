import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div className="cards">
      <div className="searchFilter">
        Search Products:{" "}
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      {props.products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <img src={product.images[0].url} alt="" />
            <p>Price: ${product.price}</p>
            <a href={`/products/${product.id}`} className="button">
              More Info
            </a>
          </div>
        ))}
    </div>
  );
}
