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

interface TopNavProps {
    onMenuToggle: () => void; // Function takes no arguments and returns nothing
    isMenuOpen: boolean;       // Boolean state for menu visibility
}

// Corrected type definition for layout component which only receives children
interface SummitLayoutProps { 
    children: ReactNode; // Standard React children prop
}

interface BottomNavProps {
    onSearchToggle: () => void; // Handler to toggle search bar
    isSearchOpen: boolean;      // State to control search bar visibility
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


// Top Navigation Bar
const TopNav: FC<TopNavProps> = ({ onMenuToggle, isMenuOpen }) => (
  <div className="py-3 sm:py-4 md:py-0 md:h-20 mt-3 mb-3">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <LogoIcon />
        </div>
        
        {/* Desktop Top Nav Links: SEMIBOLD (Weight 600) */}
        <nav className="hidden md:flex pt-14 items-center space-x-4 lg:space-x-6">
          {/* font-semibold (Weight 600) */}
          <NavItem href="#" className="text-gray-600 hover:text-blue-700 font-semibold text-xs lg:text-sm tracking-wide" hasDropdown>
            INDUSTRIES WE SERVE
          </NavItem>
          <NavItem href="#" className="text-gray-600 hover:text-blue-700 font-semibold text-xs lg:text-sm tracking-wide" hasDropdown>
            WHO WE ARE
          </NavItem>
          <NavItem href="#" className="text-gray-600 hover:text-blue-700 font-semibold text-xs lg:text-sm tracking-wide" hasDropdown>
            EVENTS
          </NavItem>
          <NavItem href="#" className="text-gray-600 hover:text-blue-700 font-semibold text-xs lg:text-sm tracking-wide">
            CAREERS
          </NavItem>
        </nav>

        {/* Mobile Menu Toggle Button (visible only on mobile) */}
        <button 
          className="md:hidden text-gray-800 hover:text-blue-700 transition-colors duration-200 p-2"
          onClick={onMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  </div>
);

// Bottom (Main) Navigation Bar
const BottomNav: FC<BottomNavProps> = ({ onSearchToggle, isSearchOpen }) => (
  <div className="bg-[#3A3F71] text-white shadow-md">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container is now relative for positioning the search bar overlay on mobile */}
      <div className="flex items-center min-h-[3.5rem] sm:h-14 md:h-16 relative py-2 md:py-0">
        
        {/* --- DESKTOP NAV LINKS (Hidden on mobile) --- */}
        {/* Links are visible on desktop (md:) and hidden on mobile (default) */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-7 mr-auto overflow-x-auto">
          {/* font-bold (Weight 700) */}
          <NavItem href="#" className="hover:text-gray-300 font-bold text-xs lg:text-sm tracking-wide border-b-2 border-white pb-1 whitespace-nowrap">
            HOME
          </NavItem>
          <NavItem href="#" className="hover:text-gray-300 font-bold text-xs lg:text-sm tracking-wide whitespace-nowrap">
            NEWS AND INSIGHTS
          </NavItem>
          <NavItem href="#" className="hover:text-gray-300 font-bold text-xs lg:text-sm tracking-wide whitespace-nowrap" hasDropdown>
            BUSINESS
          </NavItem>
          <NavItem href="#" className="hover:text-gray-300 font-bold text-xs lg:text-sm tracking-wide whitespace-nowrap" hasDropdown>
            FUTURE
          </NavItem>
          <NavItem href="#" className="hover:text-gray-300 font-bold text-xs lg:text-sm tracking-wide whitespace-nowrap" hasDropdown>
            MARITIME
          </NavItem>
          <NavItem href="#" className="hover:text-gray-300 font-bold text-xs lg:text-sm tracking-wide whitespace-nowrap" hasDropdown>
            ECONOMY AND MARKET
          </NavItem>
        </nav>
        
        {/* --- RESPONSIVE SEARCH AREA --- */}
        <div className="flex items-center space-x-2 ml-auto w-full md:w-auto">
            
            {/* Mobile Search Bar: Always visible and full width on mobile */}
            <div className="w-full md:hidden">
                <input
                    type="search"
                    placeholder="Search news..."
                    className="w-full h-9 sm:h-10 px-3 py-2 text-xs sm:text-sm text-gray-800 rounded-lg border-none focus:ring-2 focus:ring-blue-300 transition bg-white"
                />
            </div>
            
            {/* Desktop Search Input Field Container: Toggled via isSearchOpen, sliding inline */}
            <div className={`
                hidden md:flex
                transition-all duration-300 ease-in-out
                ${isSearchOpen 
                    ? 'w-48 lg:w-64 opacity-100' // Desktop Open state
                    : 'w-0 opacity-0' // Desktop Closed state
                }
            `}>
                <input
                    type="search"
                    placeholder="Search news..."
                    className="w-full h-9 lg:h-10 px-3 py-2 text-xs lg:text-sm text-gray-800 rounded-lg border-none focus:ring-2 focus:ring-blue-300 transition bg-white"
                    autoFocus={isSearchOpen} // Focus when opened on desktop (via toggle)
                />
            </div>
            
            {/* Toggle Button: Swaps icon, used ONLY on desktop for the sliding bar */}
            <button 
                className="hidden md:block text-white hover:text-gray-300 transition-colors duration-200 z-10 flex-shrink-0"
                onClick={onSearchToggle}
                aria-label={isSearchOpen ? "Close search bar" : "Open search bar"}
            >
              {isSearchOpen ? <XIcon /> : <SearchIcon />}
            </button>
        </div>
      </div>
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
        
        {/* Pass state and handler to TopNav */}
        <TopNav onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} /> 
        
        {/* Pass search state and toggle handler to BottomNav */}
        <BottomNav 
            onSearchToggle={handleSearchToggle} 
            isSearchOpen={isSearchOpen} 
        />
      </header>
      
      {/* Conditionally render the mobile menu */}
      {isMenuOpen && <MobileMenu />} 

      <main>{children}</main>
      

    </div>
  );
}

// Export the component as the default export
export default SummitLayout;