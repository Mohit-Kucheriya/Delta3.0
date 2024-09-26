import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["5985", "3952", "6551", "49589"];
  let newPrice = ["4999", "1999", "3999", "39999"];

  let description = [
    ["Durable","Longlasting"],
    ["More efficient","Long Battery"],
    ["durable","24 hours backup"],
    ["8000 DT Processor","i11"],
  ];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>

      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
