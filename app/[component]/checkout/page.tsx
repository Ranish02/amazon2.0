// "use client";
// import React from "react";
// import Navbar from "../[component]/Navbar";
// import Image from "next/image";
// import CheckoutProduct from "../[component]/[product]/CheckoutProduct";
// import { useSelector } from "react-redux";
// import { selectItems } from "../[component]/[redux]/cartreducer";
// import "../../styles/globals.css";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// function CheckOut() {
//   const session = useSession();
//   const items = useSelector(selectItems);
//   const router = useRouter();
//   console.log(items);
//   const getSubtotal = () => {
//     var total = 0;
//     var price = 0;
//     items.map((item: any) => {
//       if (item.quantity) {
//         price = item.quantity * item.price;
//       } else {
//         price = item.price;
//       }
//       total = total + price;
//       return null;
//     });
//     var finaltotal = "";
//     finaltotal = total.toFixed(2);
//     return finaltotal;
//   };

//   return (
//     <div className="bg-gray-100">
//       <Navbar />
//       <div className="flex justify-center  max-w-screen-2xl mx-auto">
//         <main className="flex-grow">
//           <div className="flex flex-grow mt-5 w-full justify-center shadow-sm">
//             <Image
//               src="https://links.papareact.com/ikj"
//               width={1020}
//               height={250}
//               className="cursor-pointer"
//               alt="Checkout page"
//               objectFit="contain"
//             />
//           </div>
//           <div className="flex flex-col p-5 space-y-10 bg-white">
//             <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
//           </div>
//           <div className="bg-white ">
//             {items.length != 0 ? (
//               <>
//                 {items.map((item: any) => {
//                   return <CheckoutProduct product={item} />;
//                 })}
//               </>
//             ) : (
//               <div className="text-3xl font-bold text-center">
//                 <div>Nothing in your cart</div>
//                 <div>
//                   <button
//                     className="bg-amazon_yellow text-white p-2 rounded-md my-5"
//                     onClick={() => router.push("/")}>
//                     Go Shopping
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//         <div className="px-12 h-screen mx-2 bg-white pt-12">
//           <div className=" w-full">
//             <div className="flex w-56">
//               <div>
//                 Subtotal ( {items.length} items ) <b> ${getSubtotal()}</b>
//               </div>
//             </div>
//             <div className="text-center">
//               <button className="bg-amazon_yellow p-3 rounded-md">
//                 {session ? "Sign in to checkout" : "Proceed to Checkout"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CheckOut;
import React from 'react'

const page = () => {
  return (
    <div>
      Test
    </div>
  )
}

export default page

