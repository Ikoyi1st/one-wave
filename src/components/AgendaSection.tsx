"use client";
import { useState } from "react";

export default function AgendaSection() {
  const [open, setOpen] = useState(false);

  const agendaItems = [
    "Tax Reform and Nigeria’s Revenue Future",
    "Digital Taxation & Compliance Automation",
    "Transfer Pricing and Cross-Border Tax Issues",
    "Taxation of the Digital Economy",
    "MSME Tax Incentives and Regulatory Support",
    "Tax Administration: Data, AI, and Technology",
    "The Evolving Role of Technology in Nigeria’s Tax Reporting",
  ];

  return (
    <section className="mt-16 w-full">
      <h2 className="text-center text-2xl font-bold text-[#221919] mb-4">
        Agenda
      </h2>

      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-[#2E3D68] text-white py-5 px-6 flex items-center justify-between cursor-pointer"
      >
        <span className="text-[18px] font-medium">View Event Agenda</span>
        <span className="text-3xl font-light">{open ? "−" : "+"}</span>
      </div>

      {/* Dropdown Animation */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-6 py-6 border border-t-0 border-gray-200">
          {agendaItems.map((item, index) => (
            <div key={index} className="py-4">
              <p className="text-[18px] text-[#221919] font-semibold">{item}</p>
              {index !== agendaItems.length - 1 && (
                <hr className="mt-4 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
