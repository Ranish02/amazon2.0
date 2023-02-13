"use client";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addtoCart } from "../[redux]/cartreducer";
function ProductItem({ product }: any) {
  const dispatch = useDispatch();
  const Stars = [1, 2, 4];
  const handleAddtoCart = (product: object) => {
    dispatch(addtoCart(product));
  };
  return (
    <div
      className="flex flex-col max-w-[600] w-full bg-white shadow-xl relative px-8 h-full z-30 p-10 "
      key={product.id}>
      <div className="flex justify-center  items-center h-[300px]">
        <Image
          src={product.image}
          width={200}
          height={200}
          className="cursor-pointer "
          alt="Amazon Logo"
          objectFit="contain"
        />
      </div>
      <div className="text-lg font-semibold">{product.title}</div>
      <div className="flex my-2">
        {Stars.map((s) => {
          return (
            <>
              <div className="text-[#fcce68]" key={s}>
                <AiFillStar />
              </div>
            </>
          );
        })}
      </div>
      <div className="text-xs line-clamp-2">{product.description}</div>
      <div className="flex font-bold">
        <div>$</div>
        <div>{product.price}</div>
      </div>
      <p className="absolute top-2 right-2 text-gray-400 font-semibold text-xs">
        {product.category}
      </p>
      <div className="mt-auto">
        <button
          className=" bg-[#fcce68] p-2 text-center font-bold text-xs py-3 w-full"
          onClick={() => handleAddtoCart(product)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
