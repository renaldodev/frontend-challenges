import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
export default function Navbar() {
  const mobileMenuVariant = {
    show: {
      y: 0,
      opacity: 1,
      rotate: "0",
      display: "flex",
      transition: {
        staggerChildren:0.3,
        staggerDirection:10
      },
    },
    hidden: {
      y: -200,
      opacity: 0,
      rotate: "120deg",
      display: "none"
    },
  } as Variants;
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex flex-col p-4 lg:px-32 bg-blue-500">
      <div className="flex justify-between">
        <span className="text-xl cursor-pointer text-white">Hambuger Toxico</span>
        <button
          className="focus:ring ring-amber-600 ring-opacity-3 lg:hidden"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <FaHamburger className="fill-white w-6 h-6"/>
        </button>
        <ul className="hidden lg:flex space-x-3 text-white">
          <li className="hover:text-gray-900 transition-all">
            <Link href={"/home"}>Home</Link>
          </li>
          <li className="hover:text-gray-900 transition-all">
            <Link href={"/home"}>About</Link>
          </li>
          <li className="hover:text-gray-900 transition-all">
            <Link href={"/home"}>Contact</Link>
          </li>
        </ul>
      </div>
      <motion.ul
        variants={mobileMenuVariant}
        initial={false}
        animate={toggleMenu ? "show" : "hidden"}
        className="flex flex-col space-y-3 items-center lg:hidden xl:hidden text-white"
      >
        <motion.li>
          <Link href={"/home"}>Home</Link>
        </motion.li>
        <motion.li>
          <Link href={"/home"}>About</Link>
        </motion.li>
        <motion.li>
          <Link href={"/home"}>Contact</Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
}
