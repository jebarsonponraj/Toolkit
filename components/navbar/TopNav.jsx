'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/toolkit-logo.svg';
import search from '../../public/assets/navIcons/search.svg';

export const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className={`fixed w-full z-50 pb-3  ${isScrolled ? 'bg-[#02001E]/70 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="flex justify-between items-center mx-6 pt-4 lg:mx-32">
        <Link href="/">
          <p className="font-bold text-[#f5f5f5] text-3xl">
            t<span className="text-[#C4B5FD]">oOo</span>lkit
          </p>
        </Link>
        <Link href="/finder">
          <div className="flex items-center">
            <Image src={search} className="w-6 pt-1" />
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
};
