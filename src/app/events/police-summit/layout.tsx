"use client"; // <-- ADDED THIS DIRECTIVE

import React, { useState, type ReactNode, type FC } from 'react';
import Link from "next/link"; 
import Image from "next/image";

// --- INTERFACES FOR TYPE SAFETY ---

interface NavItemProps {
    children: ReactNode;
    hasDropdown?: boolean;
    href?: string;
    className?: string;
}


// Corrected type definition for layout component which only receives children
interface SummitLayoutProps { 
    children: ReactNode; // Standard React children prop
}

// --- Mock Component for External Dependency (NewsFooter) ---
const NewsFooter: FC = () => (
    <footer className="bg-gray-100 py-6 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Onewave News. All rights reserved. (Footer Placeholder)</p>
        </div>
    </footer>
);

// --- Icon Components ---

const LogoIcon: FC = () => (
  // Replaced Next.js Link/Image with standard <a> and <div> placeholder
 <Link href="/" className="inline-flex items-center gap-3">
          <Image src="/logo.png" alt="Onewave News" width={180} height={32} className="mt-2" />
        </Link>
);

const ChevronDownIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const SearchIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const XIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const MenuIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Navigation Item Component (Used for Desktop)
const NavItem: FC<NavItemProps> = ({ children, hasDropdown = false, href = "#", className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center space-x-1 transition-colors duration-200 ${className}`}
  >
    <span>{children}</span>
    {hasDropdown && <ChevronDownIcon />}
  </a>
);

// Mobile Navigation Item Helper
const MobileNavItem: FC<Omit<NavItemProps, 'hasDropdown'>> = ({ children, href = "#", className = "" }) => (
    // font-semibold (weight 600)
    <a href={href} className={`block text-gray-700 hover:bg-gray-50 p-2 rounded transition-colors font-semibold ${className}`}> 
        {children}
    </a>
);

// Mobile Menu Component (visible only when toggled)
const MobileMenu: FC = () => (
    <div className="md:hidden bg-white shadow-xl border-t pb-4">
        <div className="flex flex-col space-y-1 px-4 py-2">
            
            <h3 className="text-xs font-semibold uppercase text-gray-500 pt-2 mt-2">Main Navigation</h3>
            {/* font-bold (weight 700) */}
            <MobileNavItem href="#" className="text-[#3A3F71] font-bold border-l-4 border-[#3A3F71] pl-3">HOME</MobileNavItem> 
            <MobileNavItem href="#">NEWS AND INSIGHTS</MobileNavItem>
            <MobileNavItem href="#">BUSINESS (Dropdown)</MobileNavItem>
            <MobileNavItem href="#">FUTURE (Dropdown)</MobileNavItem>
            <MobileNavItem href="#">MARITIME (Dropdown)</MobileNavItem>
            <MobileNavItem href="#">ECONOMY AND MARKET (Dropdown)</MobileNavItem>

            <h3 className="text-xs font-semibold uppercase text-gray-500 pt-4 border-t mt-4">Corporate Links</h3>
            <MobileNavItem href="#">INDUSTRIES WE SERVE (Dropdown)</MobileNavItem>
            <MobileNavItem href="#">WHO WE ARE (Dropdown)</MobileNavItem>
            <MobileNavItem href="#">EVENTS (Dropdown)</MobileNavItem>
            <MobileNavItem href="#">CAREERS</MobileNavItem>
        </div>
    </div>
);


// --- End of Header Components ---

// Applied SummitLayoutProps type here
const SummitLayout: FC<SummitLayoutProps> = ({
  children,
}) => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  
  // State to manage the visibility of the in-line search bar (used ONLY for desktop)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    // Close the mobile menu if the search bar is opened
    if (!isSearchOpen) setIsMenuOpen(false);
  }

  return (
    // Added font-sans to use Inter font globally
    <div className="min-h-screen bg-white font-sans"> 
      <header className="bg-white shadow-sm">
      </header>
      
      {/* Conditionally render the mobile menu */}
      {isMenuOpen && <MobileMenu />} 

      <main>{children}</main>
      

    </div>
  );
}

// Export the component as the default export
export default SummitLayout;