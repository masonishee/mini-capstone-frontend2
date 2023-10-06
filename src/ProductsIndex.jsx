export function ProductsIndex(props) {
  return (
    <div className="cards">
      <h1>All products</h1>
      {props.products.map((product) => (
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
