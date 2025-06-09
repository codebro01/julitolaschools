import { School, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 text-center text-sm text-foreground/70">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <School className="h-5 w-5 text-primary" />
            <span className="font-semibold font-headline">Julitola Intl School, Lokoja.</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Julitola Intl School, Lokoja.. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-xs">
          <p>123 Education Lane, Knowledge City, 90210</p>
          <p>Email: info@schoolhub.edu | Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}
