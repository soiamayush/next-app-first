import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="">
        <li className="">
          <Link href="/">Home page</Link>
        </li>
        <li className="">
          <Link href="/blog">blog</Link>
        </li>
        <li className="">
          <Link href="/about"> about</Link>
        </li>
        <li className="">
          <Link href="/contact">contact</Link>
        </li>
        <li className="">
          <Link href="/myaccount">myaccount</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
