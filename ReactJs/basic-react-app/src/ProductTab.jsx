import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    gap: "1rem",
  };

  return (
    <div style={styles}>
      <Product title="LogiTech " idx={0} />
      <Product title="Apple Pencil (Gen 2)" idx={1} />
      <Product title="Headphone" idx={2} />
      <Product title="Dell Vostrovo" idx={3} />
    </div>
  );
}

export default ProductTab;
