import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link
        href="/"
        className="flex gap-2 items-center hover:scale-105 transition-all ease-in-out duration-300"
      >
        <Image src="/check-list.png" alt="logo" width={40} height={40} />
        <h1 className="font-black text-xl">Todo List</h1>
      </Link>
      <div>
        <ul className="flex gap-8 font-black ">
          <li className="relative group">
            <Link href="/">Home</Link>
            <div className="absolute bottom-0 h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link href="/">About Us</Link>
            <div className="absolute bottom-0 h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link href="/">Star Us</Link>
            <div className="absolute bottom-0 h-1 bg-black w-0 left-0 group-hover:w-full transition-all ease-in-out duration-300"></div>
          </li>
          <li>
            <Link href="/github">Contact</Link>
          </li>
          <li>
            <Link href="/todos/new">Create Todo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
