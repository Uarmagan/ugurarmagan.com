import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Simple Hamburger Icon SVG
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <line x1='3' y1='12' x2='21' y2='12'></line>
    <line x1='3' y1='6' x2='21' y2='6'></line>
    <line x1='3' y1='18' x2='21' y2='18'></line>
  </svg>
);

const Nav: React.FC = () => {
  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className='py-6 mb-8 flex justify-between items-center'>
      {/* Initials/Logo Placeholder */}
      <a
        href='/'
        className='text-2xl font-bold font-heading text-foreground hover:text-primary transition-colors'
      >
        UA
      </a>

      {/* Desktop Navigation Links */}
      <ul className='hidden md:flex space-x-6 md:space-x-8'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon'>
              <MenuIcon className='h-6 w-6 text-foreground' />
              <span className='sr-only'>Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <ul className='mt-8 space-y-4'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='block text-lg text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
