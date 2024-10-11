import { LayoutGrid, List } from "lucide-react";
import Filter from "./Filter";
import Sort from "./Sort";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="max-w-[85rem] mx-auto  pt-[3rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-7">
          {/* <button className="grid place-items-center hover:opacity-50 active:scale-90 transition-all duration-300   rounded-md">
            <LayoutGrid size={20} />
          </button>
          <button className="grid place-items-center  hover:opacity-50 active:scale-90 transition-all duration-300  rounded-md">
            <List size={20} />
          </button> */}
          <Filter />
        </div>
        <Sort />
      </div>

      <div className="mt-[4rem]">
        <ProductList />
      </div>
    </div>
  );
};
export default Products;
