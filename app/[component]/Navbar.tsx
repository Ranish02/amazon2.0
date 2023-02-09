import React from "react";
import Image from "next/image";
import { BsCart, BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import navbottomlinks from "../../data/bottomnavdata";
function Navbar() {
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
          />
        </div>

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
          <div className=" my-auto flex flex-col px-4 justify-start h-12">
            <div>Hello, sign in</div>
            <div className="flex">
              <div>Account & Lists</div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col my-auto  px-4 justify-start h-12">
            <div className="font-medium">Returns </div>
            <div className="font-bold">& Orders</div>
          </div>
          <div className="hidden md:flex ">
            <div className="relative">
              <div className="absolute top-2 left-4 text-[#f3a847]">{2}</div>
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
