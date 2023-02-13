import React from "react";
import ProductItem from "./[product]/ProductItem";
export default function ProductFeed({ products }: any) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 md:gap-8 mt-[00px] px-4">
      {products.slice(0, 4).map((product: any) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
}
