"use client";
import React from "react";
import Image from "next/image";
import { BsCart, BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import navbottomlinks from "../../data/bottomnavdata";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "./[redux]/cartreducer";
function Navbar() {
  const router = useRouter();
  const items = useSelector(selectItems);
  // console.log(items);
  const { data: session, status } = useSession();
  return (
    <div className="">
      <div className=" bg-[#131921] pl-2 pt-4 pb-2 text-white flex justify-around pr-4 text-sm font-bold">
        <div className=" flex items-center flew-grow ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className="cursor-pointer"
            alt="Amazon Logo"
            objectFit="contain"
            onClick={() => router.push("/")}
          />
        </div>
        <div></div>

        <div className="flex flex-grow mx-4 rounded-lg items-center text-black h-12">
          <select name="" id="" className="rounded-l-lg text-center h-full">
            <option value="all" className="flex">
              All
            </option>
            <option value="hello">hello</option>
            <option value="dancer">dancer</option>
            <option value="singer">singer</option>
            <option value="worker">worker</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.com"
            className="h-full w-6 flex-grow flex-shrink focus:outline-none pl-4 font-medium "
          />
          <div className="h-full ">
            <button className="h-12  bg-[#f3a847] p-4 rounded-r-lg">
              <BsSearch />
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="hidden md:flex flex-row rounded-lg items-center text-white h-12">
            <div>EN</div>
            <div>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="relative">
            <div
              className=" my-auto flex flex-col px-4 justify-start h-12 relative"
              id="usernamebtn"
              onClick={() => {
                signIn();
              }}>
              <div className="flex">
                <div className="pr-2">Hello </div>
                {status === "authenticated" ? (
                  <div>{session.user?.name}</div>
                ) : (
                  <div>Sign In </div>
                )}
              </div>

              <div className="flex">
                <div>Account & Lists</div>
                <div>
                  <IoMdArrowDropdown />
                </div>
              </div>
              {/* <div className="usernamebtn">Ranish</div>
            <div id="usernamedropmenu">Kunwar</div> */}
            </div>
            <div
              id="usernamedropmenu"
              className=" absolute bg-white top-full mt-[-10px] text-black right-0 p-4 font-normal text-base z-10 w-56 ">
              <div>Your Account</div>
              {status === "authenticated" ? (
                <>
                  <div>{session.user?.name}</div>
                  <div>Track Your orders</div>
                  <div>WishLists</div>
                </>
              ) : (
                <button
                  className="bg-amazon_yellow p-2"
                  onClick={() => {
                    signIn();
                  }}>
                  Sign In
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-col my-auto  px-4 justify-start h-12 cursor-pointer">
            <div className="font-medium">Returns </div>
            <div className="font-bold">& Orders</div>
          </div>
          <div
            className="hidden md:flex cursor-pointer"
            onClick={() => router.push("/checkout")}>
            <div className="relative">
              <div className="absolute top-2 left-4 text-[#f3a847]">
                {items.length}
              </div>
              <BsCart size={40} />
            </div>
            <div className="flex items-center ">Cart</div>
          </div>
        </div>
      </div>
      <div className="bottomnav flex justify-start items-center bg-[#232f3e] text-white py-2 text-sm font-medium">
        <div>
          <AiOutlineMenu className="font-extrabold" size={20} />
        </div>
        <div className="pl-2">All</div>
        <div className="flex justify-evenly flew-grow w-full">
          {navbottomlinks.map((link) => {
            return (
              <div key={link.id} className="mx-2">
                {link.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
