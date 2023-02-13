import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addtoCart,
  removefromCart,
  viewCartConsole,
} from "../[redux]/cartreducer";
function CheckoutProduct({ product }: any) {
  const dispatch = useDispatch();
  const Stars = [1, 2, 4];
  const handleAddtoCart = (product: object) => {
    dispatch(addtoCart(product));
  };
  const handleRemovefromCart = (id: number) => {
    dispatch(removefromCart({ id }));
  };
  const viewCart = (product: any) => {
    dispatch(viewCartConsole(product));
  };
  return (
    <div
      className="grid grid-cols-5 max-w-[600] w-full bg-white shadow-xl relative px-8 h-full z-30 p-10 border-b"
      key={product.id}>
      <div className="col-span-1 flex justify-center w-full items-center h-[300px]">
        <Image
          src={product.image}
          width={200}
          height={200}
          className="cursor-pointer "
          alt="Amazon Logo"
          objectFit="contain"
        />
      </div>
      <div className="col-span-3">
        <div className=" text-lg font-semibold">{product.title}</div>
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
        <div className="flex">
          <div>Quantity: </div>
          <div>{product.quantity}</div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-white items-center">
        <div className="">
          <button
            className=" bg-[#fcce68] p-2 text-center font-bold text-xs py-3 w-56 rounded-sm text-black "
            onClick={() => handleAddtoCart(product)}>
            ADD TO CART
          </button>
        </div>
        <div className="">
          <button
            className=" bg-[#eb6666]   p-2 text-center font-bold text-xs py-3 w-56 rounded-sm mt-12"
            onClick={() => handleRemovefromCart(product.id)}>
            REMOVE FROM CART
          </button>
        </div>
        <div className="">
          <button
            className=" bg-[#369eff] p-2 text-center font-bold text-xs py-3 w-56 rounded-sm mt-12"
            onClick={() => viewCart(product)}>
            VIEW CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
