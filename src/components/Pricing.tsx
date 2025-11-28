"use client";

import React, { useState, useMemo } from "react";

// 1. Define the structure for the pricing data
interface Feature {
  id: number;
  text: string;
}

interface PricingPlan {
  id: number;
  title: string;
  priceNaira: string;
  features: Feature[];
  isFeatured: boolean;
}

// 2. Checkmark Icon
const CheckIcon = ({ className = '' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 flex-shrink-0 ${className}`}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// 3. Pricing Card Component
interface PricingCardProps {
  plan: PricingPlan;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  hoveredPlanId: number | null;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onMouseEnter, onMouseLeave, hoveredPlanId }) => {
  const { title, priceNaira, features } = plan;

  const isFeatured = plan.id === 3;
  
  // Flag to know if the featured card (Plan 3) is currently unfocused because another card is hovered
  const isFeaturedButUnfocused = isFeatured && hoveredPlanId !== null && hoveredPlanId !== plan.id;
  
  // Flag to know if the current card is explicitly hovered
  const isSelfHovered = hoveredPlanId === plan.id;

  // Determine the final 'active' state for styling purposes
  // A card is active if:
  // 1. It is the featured card AND it is NOT unfocused (i.e., no other card is hovered)
  // 2. OR, it is currently being hovered
  const isActive = (isFeatured && !isFeaturedButUnfocused) || isSelfHovered;
  
  const handleMouseEnter = () => onMouseEnter(plan.id);
  const handleMouseLeave = () => onMouseLeave();

  // --- Dynamic Class Calculation ---

  // Base card styling
  let cardClasses = `
    relative p-8 flex flex-col h-full rounded-xl shadow-xl
    transition-all duration-300 transform
    ${isFeatured && !isFeaturedButUnfocused ? 'scale-[1.08] shadow-2xl shadow-[#2E3D68]/40' : 'hover:scale-[1.08] hover:shadow-2xl hover:shadow-[#2E3D68]/40'}
  `;

  // Colors
  if (isActive) {
    cardClasses += ' bg-[#2E3D68] text-white';
  } else {
    cardClasses += ' bg-white text-[#2E3D68]';
  }
  
  // Check Icon Colors
  const checkIconClasses = isActive ? 'text-white' : 'text-[#2E3D68]';

  // Button Styles
  const buttonBase = 'w-full py-3 mt-auto font-medium rounded-lg border-2 transition-all duration-300';
  let buttonClasses;

  if (isActive) {
    // White button on blue background
    buttonClasses = `${buttonBase} bg-white text-[#2E3D68] border-white hover:bg-gray-200`;
  } else {
    // Blue button on white background
    buttonClasses = `${buttonBase} bg-[#2E3D68] text-white border-[#2E3D68] hover:bg-[#202c4b]`;
  }

  // Animated Border (Show only when hovered or if it's the featured card)
  const animatedBorderClasses = `
    absolute inset-0 rounded-xl p-[2px]
    bg-gradient-to-r from-[#2E3D68] via-white to-[#2E3D68]
    transition-opacity duration-500 blur-sm
    ${isFeatured || isSelfHovered ? 'opacity-100' : 'opacity-0'}
  `;


  return (
    // Set h-full on the outer div to ensure it fills the grid cell height
    <div 
      className="relative h-full" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Border */}
      <div className={animatedBorderClasses}></div>

      {/* Card: use flex-col h-full to make content fill the space and push the button to the bottom */}
      <div className={cardClasses}>
        <div className="flex-grow">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>

          {/* Price */}
          <div className="text-4xl font-extrabold flex items-baseline justify-center mb-6">
            <span className="text-4xl">N</span>
            <span>{priceNaira}</span>
            <span className="text-sm font-normal ml-2 opacity-75">+VAT</span>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature.id} className="flex items-start">
                <CheckIcon className={checkIconClasses} />
                <span className="ml-3 text-base">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button
          className={buttonClasses}
        >
          Create a free account
        </button>
      </div>
    </div>
  );
};

// 4. Pricing Data
const plans: PricingPlan[] = [
  {
    id: 1,
    title: "Super Early Bird",
    priceNaira: "170,000",
    features: [
      { id: 101, text: "Register 3 delegates, get one free" },
    ],
    isFeatured: false,
  },
  {
    id: 2,
    title: "Full Conference",
    priceNaira: "220,000",
    features: [
      { id: 201, text: "Register 3 delegates, get one free" },
      { id: 202, text: "Workshops" },
      { id: 203, text: "C-Level Sessions" },
    ],
    isFeatured: false,
  },
  {
    id: 3,
    title: "Early Bird",
    priceNaira: "195,000",
    features: [
      { id: 301, text: "Register 3 delegates, get one free" },
      { id: 302, text: "Workshops" },
      { id: 303, text: "C-Level Sessions" },
      { id: 304, text: "Networking and Dinner" },
    ],
    isFeatured: true,
  },
];

// 5. Main App Component
export default function App() {
  const [hoveredPlanId, setHoveredPlanId] = useState<number | null>(null);
  
  const handleMouseEnter = (id: number) => setHoveredPlanId(id);
  const handleMouseLeave = () => setHoveredPlanId(null);
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Pricing
        </h1>

        {/* grid-cols-3 handles the equal height of the card containers */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              hoveredPlanId={hoveredPlanId}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
}