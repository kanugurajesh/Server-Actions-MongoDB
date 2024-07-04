"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className={`flex items-center justify-between px-8 pt-8`}>
      <div>
        <Link
          href="/"
          className="flex gap-3 items-center hover:scale-105 transition-all ease-in-out duration-300"
        >
          <Image src="/check-list.png" alt="logo" width={40} height={40} />
          <h1 className="font-black text-xl">Todo List</h1>
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-1" onClick={() => setClick(!click)}>
          <li
            className={`bg-black w-8 h-1 transition-all ease-in-out duration-300 ${
              click && "-rotate-45 origin-top-right"
            }`}
          ></li>
          <li
            className={`bg-black w-8 h-1 transition-all ease-in-out duration-300 ${
              click && "bg-white"
            }`}
          ></li>
          <li
            className={`bg-black w-8 h-1 transition-all ease-in-out duration-300 ${
              click && "rotate-[48deg] origin-[25px_6px]"
            }`}
          ></li>
        </ul>
      </div>
      <div
        className={`absolute w-48 top-0 h-full bg-black left-[-200px] ${
          click && "left-[0px]"
        } transition-all ease-in-out duration-300`}
      >
        <ul>
          <li className="relative group">
            <Link href="/">Home</Link>
            <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link href="/About">About Us</Link>
            <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link
              href="https://github.com/kanugurajesh/Server-Actions-MongoDB"
              target="_blank"
            >
              Github
            </Link>
            <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link href="/">Contact</Link>
            <div className="absolute bottom-[-3px] h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
