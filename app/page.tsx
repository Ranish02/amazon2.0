import React, { Fragment } from "react";
import Navbar from "./[component]/Navbar";
import "../styles/globals.css";
import { use } from "react";
import Banner from "./[component]/Banner";
import ProductFeed from "./[component]/Productfeed";
import Image from "next/image";
import Link from "next/link";

function Home() {
  // const products = use(getData());

  return (
    <main className="text-center text-lg">
      <section className="main-section container mx-auto">
        <div className="min-h-[40vh] flex flex-col justify-center">
          <div className="flex justify-center">
            <Image
              src={"/transparenticon.png"}
              height={300}
              width={300}
              alt="sabbai logo"
            />
          </div>
          <span className="text-3xl font-bold">
            {" "}
            <span className="text-primary">Sabbai .shop</span>{" "}
          </span>
         
          <h2 className="text-xl font-bold my-4">
            Shop Smarter, Shop Local: Your Gateway to Quality Products in Nepal
            🇳🇵
          </h2>
          <p className="text-lg font-medium my-4 ">
            Looking for a convenient and reliable way to shop for all your needs
            in Nepal? Look no further than Sabbai ! We're your one-stop online
            store for a wide variety of high-quality products, all delivered
            straight to your doorstep.
          </p>
        </div>
        <p className="text-3xl font-bold mb-4">Why Sabbai ?</p>
        Here's what sets us apart:
        <div className="grid grid-cols-2 text-left gap-4 p-4">
          <div>
            <ul className="list-disc">
              <li>
                Curated Selection: We handpick only the best products from
                trusted brands, ensuring you get the quality and value you
                deserve.
              </li>
              <li>
                Multiple Payment Options: Choose from secure online payments or
                the trusted cash on delivery option for added convenience.
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-disc">
              <li>
                Best Pricing : We have products at competitively lower price
                that our competitors in Nepal
              </li>
              <li>
                Unbeatable Convenience: Shop from the comfort of your home,
                anytime, and get your purchases delivered quickly and
                efficiently From the best gaming keyboard in Nepal to best
                budget gaming mouse, we've got you covered.
              </li>
            </ul>
          </div>
        </div>
        <section className="key-items mt-24">
          <p className="text-xl font-bold mb-4">What to find in our site?</p>
          <p>
            It is the hub for everything hence the name 'Sabbai'. From Daily
            household items to Gaming equipments for aspiring and upcoming
            gamers here in Nepal, we have a collections of items to choose from.
            Some of the key items that will be available with the beta release:
          </p>
          <ul className="grid grid-cols-2 gap-2 pt-4">
            <li>Best Cheap Gaming Mouse in Nepal</li>
            <li>Best Budget Mechanical Keyboard in Nepal</li>
            <li>Best Budget Gaming Keyboard and Mouse combo in Nepal</li>
            <li>Best Wireless Mouse in Nepal</li>
            <li>Clothings for Mens</li>
            <li>Clothings for Womens</li>
          </ul>
        </section>
        <section className="text-red-600 text-sm mt-4">
          Releasing Soon
        </section>
        <section className="site-info developer-info software-engineer">
          <div className="mt-[20vh]">
            <p>Currently in development phase</p>
          </div>
          <div className="h-[20vh]">
            Contact Developer? <br />
            <Link
              href={"https://ranishkunwar.com.np"}
              className="text-primary font-semibold">
              Ranish Kunwar
            </Link>
          </div>
        </section>
      </section>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <p className="text-center">
            © {new Date().getFullYear()} Sabbai.Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
