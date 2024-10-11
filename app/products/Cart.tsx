"use client";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { closeCart } from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/store";
import { X } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { isCartOpen } = useSelector((state: RootState) => state.cartState);
  const dispatch = useDispatch();

  return (
    <Sheet open={isCartOpen} onOpenChange={() => dispatch(closeCart())}>
      <SheetContent>
        <SheetTitle className="">Shopping Cart</SheetTitle>

        {/* <h2 className="text-lg font-bold mb-4">Shopping Cart</h2> */}
        <div className=" flex flex-col justify-between  h-[90%] mt-8 ">
          <ul className="space-y-3 divide-y h-[60%] overflow-y-auto px-3">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <li key={i} className="flex py-2 items-start">
                  <div className="relative rounded-lg border">
                    <button className="absolute -left-2 -top-1 grid place-items-center size-[1.5rem] rounded-full bg-gray-400/55 backdrop-blur-sm">
                      <X size={13} />
                    </button>
                    <Image
                      alt=" "
                      src={"/prod-b1-blue.jpg"}
                      width={65}
                      height={65}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="ml-2 text-sm text-zinc-700 ">
                    <span>Acme Circles T-Shirt</span>
                  </div>
                  <div className="ms-auto">
                    <span className="text-sm text-zinc-500 font-medium">
                      $20.00
                    </span>
                    <div className="mt-2 rounded-full bg-zinc-300/40 border text-lgs flex items-center">
                      <button className="px-4 active:scale-95 transition-all duration-150 py-1 ">
                        -
                      </button>
                      <span className="text-sm">{1 + i}</span>
                      <button className="px-4 active:scale-95 transition-all duration-150 py-1">
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>

          <div className="bg-white/55 backdrop-blur-sm h-[40%] flex flex-col justify-end">
            <div className="flex justify-between font-bold mt-6">
              <span>Taxes :</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold mt-6">
              <span>Total:</span>
              <span>$32.00</span>
            </div>
            <button className="w-full mt-4 py-3 rounded-full bg-black text-white">
              Checkout
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
