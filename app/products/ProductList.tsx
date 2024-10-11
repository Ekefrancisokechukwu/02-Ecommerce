import SingleProduct from "./SingleProduct";

const ProductList = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <SingleProduct key={i} />
          ))}
      </div>
    </div>
  );
};
export default ProductList;
