import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-50 px-6 md:px-12 lg:px-24 xl:px-64 2xl:px-96">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <span className="text-success">Sweat</span>
        <span className="pr-2">Lab</span>
        <Image
          src="/header-icon.png"
          alt="Header Icon"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Header;
