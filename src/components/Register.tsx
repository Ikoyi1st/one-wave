"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

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

// Main application component
const Register: React.FC = () => {
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
      window.location.href = '/electricity-conference/pricing';
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
            className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wider uppercase pb-4 mx-auto w-fit border-b-4"
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

export default Register;