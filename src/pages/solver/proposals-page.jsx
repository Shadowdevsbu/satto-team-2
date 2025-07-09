import React from "react";

export default function Proposals() {
  return (
    <main className="flex-1 bg-[#F9F9F9] p-6 min-h-screen text-[#1F2937]">
      {/* Page Title */}
      <h1 className="text-2xl font-bold">My Proposals</h1>
      <p className="text-sm text-gray-500 mt-1">
        Track all tasks you have applied for — see which are pending, accepted, rejected, or completed.
      </p>

      {/* Stats Card */}
      <div className="bg-white rounded-xl shadow p-6 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-black">12</p>
            <p className="text-gray-600">Proposals Sent</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-500">5</p>
            <p className="text-gray-600">Pending</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">3</p>
            <p className="text-gray-600">Accepted</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">4</p>
            <p className="text-gray-600">Completed</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mt-6">
        {["All", "Pending", "Accepted", "Rejected", "Completed"].map((tab, i) => (
          <a href="#"
            key={i}
            className={`text-sm px-4 py-2 rounded-full ${
              tab === "All" ? "bg-[#00894E] text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </a>
        ))}
      </div>

      {/* Proposal Cards */}
      <div className="mt-6 space-y-4">

        {/* 1: Accepted */}
        <div className="bg-white rounded-lg p-4 border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">CSC101: Data Analysis Report</p>
              <div className="flex gap-3 text-xs text-gray-500 mt-1">
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">Computer Science</span>
                <span>Budget: ₦2,500</span>
                <span>June 13, 3 PM</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Your proposal was accepted! The student is ready to work with you.
              </p>
            </div>
            <div className="flex py-7 items-end gap-2">
              <span className="text-xs bg-green-200 text-green-800 px-3 py-0.5 rounded-full">Accepted</span>
              <a href="#"  className="bg-[#15833F] text-white text-xs px-4 py-1 rounded hover:bg-green-700 transition">Go to Task</a> 
            </div>
          </div>
        </div>

        {/* 2: Pending */}
        <div className="bg-white rounded-lg p-4 border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">MAT201 – Calculus Assignment Help</p>
              <div className="flex gap-3 text-xs text-gray-500 mt-1">
                <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium">Mathematics</span>
                <span>Budget: ₦3,200</span>
                <span>June 15, 11 AM</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Your proposal was viewed by the student. You’re one of 8 applicants.
              </p>
            </div>
            <div className="flex py-7 items-end gap-2">
              <span className="text-xs bg-orange-100 text-orange-600 px-3 py-0.5 rounded-full">Pending</span>
              <a href="#"  className="border border-green-600 text-green-600 text-xs px-4 py-1 rounded hover:bg-green-50 transition">View Proposal</a>
            </div>
          </div>
        </div>

        {/* 3: Completed */}
        <div className="bg-white rounded-lg p-4 border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">ENG103 – Essay Writing Assistance</p>
              <div className="flex gap-3 text-xs text-gray-500 mt-1">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">English</span>
                <span>Budget: ₦1,800</span>
                <span>June 10, 2 PM</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Task completed successfully. Payment received on June 18.
              </p>
            </div>
            <div className="flex py-7 items-end gap-2">
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-0.5 rounded-full">Completed</span>
              <span className="text-yellow-500 text-sm">⭐ 5.0 rating</span>
            </div>
          </div>
        </div>

        {/* 4: Rejected */}
        <div className="bg-white rounded-lg p-4 border shadow-sm">
          <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">PHY102 – Lab Report Review</p>
            <div className="flex gap-3 text-xs text-gray-500 mt-1 flex-wrap">
              <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full font-medium">Physics</span>
              <span>Budget: ₦2,000</span>
              <span>June 12, 9 AM</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Student chose another solver. Last viewed 3 days ago.</p>
          </div>
          <div className="flex items-center">
            <span className="text-xs bg-red-100 text-red-500 px-3 py-0.5 rounded-full">Rejected</span>
          </div>
          </div>
        </div>

        {/* 5: Pending (again) */}
        <div className="bg-white rounded-lg p-4 border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">BIO201 – Research Paper Writing</p>
              <div className="flex gap-3 text-xs text-gray-500 mt-1">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">Biology</span>
                <span>Budget: ₦4,500</span>
                <span>June 16, 4 PM</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Proposal submitted. You’re one of 5 applicants.</p>
            </div>
            <div className="flex py-7 items-end gap-2">
              <span className="text-xs bg-orange-100 text-orange-600 px-3 py-0.5 rounded-full">Pending</span>
              <a href="#" className="border border-green-600 text-green-600 text-xs px-4 py-1 rounded hover:bg-green-50 transition">Edit Proposal</a>
            </div>
          </div>
        </div>
      </div>

      {/* Browse More Section */}
      <div className="mt-10 bg-white p-6 rounded-lg text-center shadow border">
        <h3 className="font-semibold text-gray-800">Looking for more opportunities?</h3>
        <p className="text-sm text-gray-500 mt-1">
          Discover new tasks that match your skills and expertise.
        </p>
        <a href="#" className="inline-block mt-4 bg-[#15833F] text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition">
          Browse Tasks
        </a>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-6">
        <button className="text-sm px-4 py-2 border rounded bg-white hover:bg-gray-100 transition">
          Load more proposals
        </button>
      </div>
    </main>
  );
}
