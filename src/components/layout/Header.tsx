
"use client";

import Link from 'next/link';
import { School, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/academics', label: 'Academics' },
  { href: '/feedback', label: 'Feedback' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky flex justify-center items-center top-3 z-50 w-full">
      <div className='w-[80vw] border-primary rounded-lg  backdrop-blur supports-[backdrop-filter]:bg-black/80'>
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* <School className="h-6 w-6 text-primary" /> */}
          <div className="logo">
            <Image
              src = {'/img/julitola-logo.png'}
              width={120}
              height={70}
              alt='Julitola-schools.png'
            >

            </Image>
          </div>
          {/* <span className="font-bold font-headline text-lg">Julitola Intl School, Lokoja.</span> */}
        </Link>
        <nav className="hidden md:flex items-center space-x-6 justify-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-white/80 text-white ${pathname === link.href ? 'text-primary' : 'text-foreground/70'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex  items-center justify-end space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Login</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href="/login/student" passHref>
                <DropdownMenuItem>Student</DropdownMenuItem>
              </Link>
              <Link href="/login/teacher" passHref>
                <DropdownMenuItem>Teacher</DropdownMenuItem>
              </Link>
              <Link href="/login/admin" passHref>
                <DropdownMenuItem>Admin</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="secondary"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col items-start space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full rounded-md p-2 text-sm font-medium transition-colors hover:bg-primary/80 hover:text-primary-foreground ${pathname === link.href ? 'bg-primary/80 text-primary-foreground' : 'text-foreground/70'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
