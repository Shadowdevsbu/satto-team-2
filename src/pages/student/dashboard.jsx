import React from "react";
import { Bell, Search, ArrowRight, MoreVertical } from "lucide-react";

const StudentDashboard = () => {
  const userName = "Maro";
  const currentDate = "June 18th, 2025";

  const stats = [
    { label: "Posted tasks", value: 25, color: "text-blue-600" },
    { label: "Tasks in progress", value: 13, color: "text-red-500" },
    { label: "Ready for review", value: 10, color: "text-orange-500" },
  ];

  const tasks = [
    { title: "Chem101 assignment", status: "In progress", statusColor: "text-green-700" },
    { title: "SIWES Project thesis", status: "Ready for review", statusColor: "text-green-700" },
  ];

  const notifications = [
    {
      title: "New proposal on BIO103",
      description: "@James_levi has proposed BIO103. Interested?",
    },
    {
      title: "MATHS101 is ready for review",
      description:
        "The solver has submitted their work for MAT101 Group Assignment. You can now review the delivery and either approve or request changes.",
    },
  ];

  return (
    <div className="w-full p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex items-center space-x-4">
          <img src='/profile.png' alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-sm text-gray-500">Student</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Welcome */}
      <section className="bg-[#19C966] text-white p-8 rounded-lg mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h2>
          <p className="text-lg max-w-[420px] mb-4">
            You've received {notifications.length} proposals in the past 30 days, and {stats[1].value} of your tasks are currently in progress.
          </p>
          <p className="text-sm">{currentDate}</p>
        </div>
        <img src="/illustration.png" alt="Illustration" className="absolute bottom-0 right-0 h-48 lg:h-full object-cover" />
      </section>

      {/* Main Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Stats */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <p className="text-black font-semibold text-base">{stat.label}</p>
                  <p className={`text-4xl ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Tasks</h3>
              <button className="text-green-700 hover:underline text-sm">See more</button>
            </div>
            <div className="flex gap-4 flex-wrap">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-[#CDF7C7] p-6 rounded-lg shadow-md flex justify-between items-center w-[280px]"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{task.title}</p>
                    <p className={`text-sm ${task.statusColor}`}>{task.status}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <div className="flex items-center gap-1 mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Notifications</h3>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {notifications.length}
            </span>
          </div>
          <div className="space-y-4">
            {notifications.map((note, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-800">{note.title}</p>
                  <MoreVertical className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
                </div>
                <p className="text-sm text-gray-600 mb-2">{note.description}</p>
                <button className="text-blue-600 hover:underline text-sm">See more</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
