'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DarkModeToggle } from './DarkModeToggle';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navlinks = [
  { address: '/', menu: 'Home' },
  { address: '/about', menu: 'About' },
  { address: '/skills', menu: 'Skills' },
  { address: '/contact', menu: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 12 }}
      className='sticky top-0 z-50 w-full bg-background shadow-md px-6 py-4 flex justify-between items-center backdrop-blur-lg'
    >
      {/* Title */}
      <h1 className='text-3xl font-bold font-mono'><span className=' text-cyan-500'>A</span>nimesh</h1>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex gap-8 items-center'>
        {navlinks.map((item, index) => {
          const isActive = pathname === item.address;
          return (
            <Link
              key={index}
              href={item.address}
              className={`text-lg transition hover:text-cyan-500 hover:scale-95 ${
                isActive ? 'text-cyan-400 underline underline-offset-4' : ''
              }`}
            >
              {item.menu}
            </Link>
          );
        })}
      </nav>

      {/* Right Side Controls */}
      <div className='flex items-center gap-4'>
        <DarkModeToggle />
        <button
          className='md:hidden'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className='absolute top-16 left-0 w-full bg-background flex flex-col items-center gap-6 py-6 shadow-md md:hidden z-50'
        >
          {navlinks.map((item, index) => {
            const isActive = pathname === item.address;
            return (
              <Link
                key={index}
                href={item.address}
                className={`text-lg transition hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400 underline underline-offset-4' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.menu}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
