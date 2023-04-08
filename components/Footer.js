import Image from "next/image";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-800 flex flex-col items-center select-none text-slate-300">
      <div className="flex m-16 mx-56 items-center">
        <div className="text-lg font-medium md:mr-20">
          <div className="flex justify-center cursor-pointer p-2 hover:text-xl w-8">
            <Link href="/">Home</Link>
          </div>
          <div className="flex justify-center cursor-pointer p-2 hover:text-xl w-8">
            <Link href="/article">Articles</Link>
          </div>
          <div className="flex justify-center cursor-pointer p-2 hover:text-xl w-8">
            <Link href="/about">About</Link>
          </div>
          <div className="flex justify-center cursor-pointer p-2 hover:text-xl w-8">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="hidden md:block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            id odio officiis, aliquid eius est deleniti debitis dolor doloremque
            accusantium! Exercitationem ratione excepturi praesentium ad fugiat
            officia atque culpa voluptatum quos reprehenderit suscipit
            voluptatem ullam corporis odio voluptate animi, sequi, sed eligendi
            vero veniam ut quisquam labore possimus. Voluptates, non.
          </p>
        </div>
      </div>
      <div className="bg-black text-center w-full py-1 tracking-widest font-sans text-xs">
        Copyright@Article 2023
      </div>
    </div>
  );
}

export default Footer;
