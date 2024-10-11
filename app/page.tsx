import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductInfo from "./components/ProductInfo";
import { Eye, ScanEye } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" pt-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(4,_minmax(0,_15rem))] sm:grid-rows-[repeat(3,_minmax(0,_15rem))] lg:grid-rows-[repeat(2,_minmax(0,_15rem))] max-w-[86rem] mx-auto gap-5  ">
        <div className="bg-white  row-span-1 border relative rounded-lg">
          <ProductInfo />
          <Image
            src={"/camera.avif"}
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="bg-white overflow-hidden group border relative lg:row-start-2 rounded-lg">
          <Image
            src={"/prod-b1-blue.jpg"}
            alt=""
            fill
            className="object-cover transition-transform duration-300 scale-95 group-hover:scale-100 rounded-lg"
          />
        </div>
        <div className="bg-white  group rounded-lg border col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden row-span-2 relative">
          <div className="absolute transition-all duration-200  -right-full group-hover:right-0 bg-white/50 border-l backdrop-blur h-full flex flex-col justify-center px-5  top-1/2 -translate-y-1/2  z-10 ">
            <Link
              href={""}
              className=" border bg-white  rounded-md size-[2rem] grid place-items-center "
            >
              <Eye size={16} />
            </Link>
            <button className=" border mt-5 bg-white rounded-md size-[2rem] grid place-items-center ">
              <ScanEye size={16} />
            </button>
          </div>
          <Image
            src={"/prod-d1-green.jpg"}
            alt=""
            fill
            className="object-contain scale-125 rounded-lg transition-transform group-hover:scale-100 duration-300 object-center"
          />
        </div>
      </div>
      <div className="py-5">
        <FeaturedProducts />
      </div>
    </div>
  );
}
