import React from "react";
import Navbar from "./[component]/Navbar";
import "../styles/globals.css";
import { use } from "react";
import Banner from "./[component]/Banner";
import ProductFeed from "./[component]/Productfeed";
function Home() {
  const products = use(getData());
  return (
    <div>
      {/* nav */}

      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </div>
    </div>
  );
}

export default Home;
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const jsondata = await res.json();
  return jsondata;
}
