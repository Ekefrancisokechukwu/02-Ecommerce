"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Popularity", value: "popularity" },
];

const Sort = () => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const handleSort = (option: { label: string; value: string }) => {
    setSelectedSort(option);
    // Here you would typically dispatch an action or call a function to actually sort the products
    // For example: dispatch(sortProducts(option.value));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-sm gap-x-2 bg-white border rounded-md px-3 py-2">
        {selectedSort.label} <ChevronDown size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={() => handleSort(option)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Sort;
