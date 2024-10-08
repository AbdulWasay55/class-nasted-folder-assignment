import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
