"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

const categories = ["All", "Shirts", "Pants", "Shoes", "Accessories"];
const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Black",
  "White",
  "Purple",
  "Orange",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const availabilty = ["In Stock", "Low Stock", "Out Of Stock"];

const Filter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="active:scale-90 transition-all duration-200 rounded-md px-2 py-1.5 text-sm flex items-center gap-x-1 bg-[#4A5568] text-white">
          <SlidersHorizontal size={15} /> Filter
        </button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[20rem] overflow-y-auto">
        <SheetTitle className="hidden">filter</SheetTitle>
        <div className="mt-5   ">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              {categories.map((category, i) => {
                return (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <label
                      htmlFor={category}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-4 mt-9">
            <h3 className="text-lg font-semibold">Color</h3>
            <div className=" flex items-center flex-wrap  gap-x-4 gap-y-3">
              {colors.map((color, i) => {
                return (
                  <button
                    key={i}
                    style={{ backgroundColor: color }}
                    className="size-[2rem] hover:opacity-35 transition-colors duration-200 border rounded-full"
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="space-y-4 mt-9">
            <h3 className="text-lg font-semibold">Size</h3>
            <RadioGroup defaultValue="M">
              <div className="space-y-2">
                {sizes.map((size, i) => (
                  <div key={i} className="flex items-center gap-x-5">
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="peer"
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-4 mt-9">
            <h3 className="text-lg font-semibold">Availability</h3>
            <RadioGroup defaultValue="M">
              <div className="space-y-2">
                {availabilty.map((available, i) => (
                  <div key={i} className="flex items-center gap-x-5">
                    <RadioGroupItem
                      value={available}
                      id={`size-${available}`}
                      className="peer"
                    />
                    <label
                      htmlFor={`size-${available}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {available}
                    </label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
