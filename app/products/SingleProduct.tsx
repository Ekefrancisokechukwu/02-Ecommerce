import Image from "next/image";
import ProductInfo from "../components/ProductInfo";
import Link from "next/link";

const SingleProduct = () => {
  return (
    <Link href={"#"} className="size-[20rem] relative border rounded-lg ">
      <ProductInfo />
      <Image
        alt="Product image"
        src="/12.webp"
        fill
        className="object-cover rounded-lg"
      />
    </Link>
  );
};
export default SingleProduct;
