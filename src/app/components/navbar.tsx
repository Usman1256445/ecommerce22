'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiShoppingCart, CiSearch, CiHeart, CiUser } from 'react-icons/ci';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-poppins text-black relative">
      {/* Header Container */}
      <div className="bg-white w-full max-w-[1440px] mx-auto py-6 px-4 sm:px-8 flex justify-between items-center">
        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Navigation Menu (Desktop Version) */}
        <div className="hidden sm:flex gap-12">
          <ul className="flex flex-row items-center text-base font-medium text-center gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Pages/shop">Shop</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="/Pages/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6 sm:gap-8 text-[24px] sm:text-[28px]">
          <Link href="/Pages/myAccount">
            <CiUser />
          </Link>
          <Link href="#">
            <CiSearch />
          </Link>
          <Link href="#">
            <CiHeart />
          </Link>
          <Link href="/shop">
            <CiShoppingCart />
          </Link>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] ${
          isMenuOpen ? 'bg-white' : 'bg-[#FBEBB5]'
        } z-50 shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 left-4 text-black text-2xl"
        >
          <FiX />
        </button>
        <ul className="flex flex-col items-center gap-6 mt-16 text-lg font-medium">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Pages/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/Pages/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when Menu is Open */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}
    </div>
  );
}