"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-8">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="flex gap-2 items-center hover:scale-105 transition-all ease-in-out duration-300"
        >
          <Image src="/check-list.png" alt="logo" width={40} height={40} />
          <h1 className="font-black text-xl">Todo List</h1>
        </Link>
        <div>
          <ul className="flex gap-8 font-medium items-center">
            <li className="relative group">
              <Link href="/">Home</Link>
              <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
            </li>
            <li className="relative group">
              <Link href="/">About Us</Link>
              <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
            </li>
            <li className="relative group">
              <Link href="/">Github</Link>
              <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
            </li>
            <li className="relative group">
              <Link href="/">Contact</Link>
              <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
            </li>
            <li>
              <Link href="">
                <div className="flex gap-4 p-2 pl-4 bg-black rounded-full items-center justify-between group hover:bg-white border-2 border-black transition-all ease-in-out duration-300">
                    <p className="text-white group-hover:text-black transition-all ease-in-out duration-300">Get Started</p>
                    <div className="bg-[#3a3a3a] p-3 rounded-full transition-all ease-in-out duration-300">
                        <Image src="/down-arrow-1.png" alt="plus" width={15} height={15} className="-rotate-90" />
                    </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
