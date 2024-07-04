"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="flex items-center justify-between">
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
          <li className={`bg-black w-8 h-1 transition-all ease-in-out duration-300 ${click && "-rotate-45 origin-top-right"}`}></li>
          <li className={`bg-black w-8 h-1 transition-all ease-in-out duration-300 ${click && "bg-white"}`}></li>
          <li className={`bg-black w-8 h-1 transition-all ease-in-out duration-300 ${click && "rotate-[48deg] origin-[25px_6px]"}`}></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
