"use client"; // <-- KEEP THIS DIRECTIVE AT THE VERY TOP

import type { Metadata } from "next";
import Image from "next/image";
import NewsHeader from "@/components/news/NewsHeader";
import NewsFooter from "@/components/news/NewsFooter";
import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from 'react'; // Added React imports for the new component

// NOTE: The 'export const metadata' block has been removed from this file.
// If you still need to set metadata for this page, it must be done in a
// parent Server Component (like the layout.tsx file) or in a separate
// file if the route segment config allows.

// -----------------------------------------------------
// NEW Register Component Implementation (From Second Code)
// Renamed to TaxConferenceRegister for clarity within the page file
// -----------------------------------------------------
const TaxConferenceRegister: React.FC = () => {
  // 1. Define the type for the form data state
  interface FormData {
    firstName: string;
    lastName: string;
    organization: string;
    email: string;
    phoneNumber: string;
  }

  // 2. Define the props for the InputField component
  interface InputFieldProps {
    label: string;
    name: keyof FormData; // Ensures the name matches a key in FormData
    type?: 'text' | 'email' | 'tel';
    placeholder?: string;
    isHalfWidth?: boolean;
  }

  // Use explicit types for useState
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phoneNumber: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // The primary color used for branding
  const primaryColor = '#AB2971';

  // Event handler for input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Type assertion to ensure name is a valid key in FormData
    setFormData(prev => ({ ...prev, [name as keyof FormData]: value }));
  };

  // Event handler for form submission (Original logic - currently not attached to the button)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    console.log('Form Data Submitted:', formData);

    // Simulate an async submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage('Registration successful! Check console for data.');
      // Optional: Clear form data after successful submission
      // setFormData({ firstName: '', lastName: '', organization: '', email: '', phoneNumber: '' });
    }, 2000);
  };

  // NEW: Function to handle navigation to the pricing page
  const handleNavigateToPricing = () => {
    window.location.href = '/tax-conference/pricing';
    // In a real application, this would be: router.push('/pricing') or window.location.href = '/pricing'
    // setMessage('Simulating navigation: Redirecting to the Pricing Page...');
    // To simulate the navigation visually, we could change the state,
    // but for this component, logging and showing a message is the clearest intent.

    // Simulate an immediate navigation (no async needed)
    setTimeout(() => {
      // If this were an actual browser environment, this would redirect:
      // window.location.href = '/pricing';
    }, 500);
  };

  // Input Field Component (Typed)
  const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', placeholder, isHalfWidth = false }) => (
    <div className={isHalfWidth ? 'w-full' : 'sm:col-span-2'}>
      <label htmlFor={name} className="block text-base font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={name}
          // The value is correctly typed as it's pulled from the typed formData object
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          required
          // Using standard Tailwind focus classes for reliability
          // (fuchsia-600 is close to #B83280)
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-fuchsia-600 text-gray-800 transition duration-150`}
        />
      </div>
    </div>
  );

  return (
    // Load Inter font using a global link (simulating a standard Next.js setup)
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <div
        className="min-h-screen flex items-center justify-center p-4 sm:p-8 font-inter bg-gray-50"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div
          className="w-full max-w-4xl bg-white p-6 sm:p-12 rounded-xl shadow-2xl"
        >

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wider uppercase pb-4 mx-auto w-fit"
            style={{ color: primaryColor, borderColor: primaryColor, fontFamily: "Poppins, sans-serif" }}
          >
            REGISTER HERE
          </h1>

          {/* Note: Removed onSubmit from form. The button now handles the navigation. */}
          <form className="space-y-6">

            {/* First Name & Last Name (Two Columns on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
                isHalfWidth
              />
              <InputField
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
                isHalfWidth
              />
            </div>

            {/* Organization (Full Width) */}
            <InputField
              label="Organization"
              name="organization"
              placeholder="Enter your organization name"
            />

            {/* Email (Full Width) */}
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />

            {/* Phone Number (Full Width) */}
            <InputField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
            />

            {/* Message Area */}
            {message && (
              <div className={`text-center py-3 text-lg font-semibold ${message.includes('Redirecting') ? 'text-blue-600 bg-blue-50 rounded-lg' : message.includes('successful') ? 'text-green-600 bg-green-50 rounded-lg' : 'text-red-600 bg-red-50 rounded-lg'}`}>
                {message}
              </div>
            )}

            {/* Submit Button - Now a Navigation Button */}
            <button
              type="button" // IMPORTANT: Changed to type="button" to prevent default form submission
              onClick={handleNavigateToPricing} // Added new navigation handler
              // Disabled logic removed as we are now navigating and not submitting
              className={`w-full py-4 text-xl mt-6 font-bold text-white rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.01] hover:brightness-110 hover:cursor`}
              style={{ backgroundColor: primaryColor }}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
// -----------------------------------------------------
// End of NEW Register Component Implementation
// -----------------------------------------------------

export default function TaxConferencePage() {



  return (
    <div className="min-h-screen bg-white">
      <NewsHeader hideBanner hideTicker />

      <main>

        {/* Hero Banner */}
        <section className="relative h-[450px] w-full mt-8 text-white">
          <Image
            src="/tax.png"
            fill
            className="object-cover"
            alt="Tax Conference Image"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-start">
            <div className="mx-auto flex w-full px-4 sm:px-6">
              <div className="grid w-full gap-8 md:grid-cols-[1.6fr_1fr]">

                {/* Event Card */}
                <div className="absolute right-0 top-1/8 w-full px-4 sm:mr-4 sm:px-0 sm:static md:absolute md:right-0 md:top-1/6 md:w-auto">
  <div className="w-full bg-[#2E3D68] text-xs text-white shadow-lg backdrop-blur-sm
                    pl-6 pt-6         sm:ml-4
                    md:ml-4 md:h-76 md:pl-8 md:pr-40 md:pb-8">

    <p className="text-[14px] font-bold uppercase md:pt-2">
      NIGERIAN TAX CONFERENCE
    </p>

    <h2 className="mt-2 text-[16px] font-bold sm:text-[20px] leading-snug">
      YOUR GATEWAY TO THE ENTIRE TAX<br />
      COMPLIANCE AND AUDIT COMMUNITY<br />
      GATHERING IN NIGERIA
    </h2>

    <p className="mt-2 text-[11px] sm:text-[13px]">
      YOUR GATEWAY TO THE ENTIRE TAX COMPLIANCE AND AUDIT
      COMMUNITY<br />
      GATHERING IN NIGERIA
    </p>

    <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between text-[11px]">
      {/* Date */}
      <div className="flex items-center gap-3">
        <Image src="/cal.png" alt="Calendar" width={46} height={46} />
        <div>
          <span className="text-[12px] font-semibold">
            January 2nd, 2026
          </span>
          <br />
          <span className="text-[16px] font-bold">
            09:00 AM (WAT)
          </span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <Image src="/local.png" alt="Location" width={46} height={46} />
        <span className="text-[12px] font-semibold">FCT Abuja.</span>
      </div>
    </div>

    <Link
      href="#register"
      className="mt-4 inline-flex items-center justify-center bg-[#AB2971] px-4 py-2 text-[11px] font-semibold hover:bg-[#901f5e]"
    >
      Register Now
    </Link>
  </div>
</div>


              </div>
            </div>
          </div>
        </section>

        {/* Sub Navigation */}
        <section className="text-white">
          <div className="bg-[#F5F5F5] text-[11px] sm:text-xs gap-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <nav className="flex flex-wrap text-[16px] items-center gap-8 border-white/10 py-8 font-bold text-[#4B5563]">
                <Link href="/tax-conference">Home</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/sponsors">Sponsors</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/register">Register</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/mission">Speakers</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/pricing">Pricing</Link>
                <span className="h-4 w-[2px] bg-[#8FACFF]"></span>
                <Link href="/tax-conference/sponsors">Become a Sponsor</Link>
              </nav>
            </div>
          </div>
        </section>

      {/* Register */}
        <TaxConferenceRegister /> {/* Replaced original <Register /> with new component */}
      </main>

      <NewsFooter />
    </div>
  );
}