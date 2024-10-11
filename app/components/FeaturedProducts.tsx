import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div className="overflow-x-auto pb-2  mt-8  ">
      <div className="flex gap-6  max-w-[86rem] mx-auto  ">
        {Array(7)
          .fill("")
          .map((_, i) => {
            return (
              <div
                key={i}
                className="bg-white flex-shrink-0 rounded-lg shadow-md w-[25rem] overflow-hidden transition-transform duration-300 "
              >
                <div className="relative h-64 ">
                  <Image
                    src="/prod-b1-blue.jpg"
                    alt="Featured Product"
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-75"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
