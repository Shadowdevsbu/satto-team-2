import React, { useState } from "react";

const ComputerIcon = () => (
  <div className="bg-blue-100 p-3 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </div>
);

const MathIcon = () => (
  <div className="bg-green-100 p-3 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  </div>
);

const ChemistryIcon = () => (
  <div className="bg-purple-100 p-3 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-purple-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  </div>
);

const LiteratureIcon = () => (
  <div className="bg-red-100 p-3 rounded-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-red-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  </div>
);

const StudentMyTask = () => {
  const [activeTab, setActiveTab] = useState("All");

  const allTasks = [
    {
      id: 1,
      title: "CSC204 - Final Year Project Proposal",
      subject: "Computer Science",
      posted: "3 days ago",
      deadline: "Dec 15, 2024",
      status: "In Progress",
      icon: <ComputerIcon />,
    },
    {
      id: 2,
      title: "MATH301 - Calculus Assignment 4",
      subject: "Mathematics",
      posted: "1 week ago",
      completedDate: "Dec 8, 2024",
      status: "Completed",
      icon: <MathIcon />,
    },
    {
      id: 3,
      title: "CHEM205 - Organic Chemistry Lab Report",
      subject: "Chemistry",
      posted: "5 days ago",
      deadline: "Dec 20, 2024",
      status: "Submitted",
      icon: <ChemistryIcon />,
    },
    {
      id: 4,
      title: "ENG102 - Literature Essay Analysis",
      subject: "Literature",
      posted: "2 weeks ago",
      deadline: "Dec 12, 2024",
      status: "Pending",
      icon: <LiteratureIcon />,
    },
    {
      id: 5,
      title: "ENG102 - Literature Essay Analysis",
      subject: "Literature",
      posted: "2 weeks ago",
      deadline: "Dec 12, 2024",
      status: "Pending",
      icon: <LiteratureIcon />,
    },
    {
      id: 6,
      title: "ENG102 - Literature Essay Analysis",
      subject: "Literature",
      posted: "2 weeks ago",
      deadline: "Dec 12, 2024",
      status: "Pending",
      icon: <LiteratureIcon />,
    },
  ];

  const handleView = (title) => console.log(`Viewing task: ${title}`);
  const handleDownload = (title) =>
    console.log(`Downloading files for: ${title}`);
  const handleFindSolver = (title) =>
    console.log(`Finding a solver for: ${title}`);
  const handleMessageSolver = (title) =>
    console.log(`Opening messages for: ${title}`);

  const filteredTasks =
    activeTab === "All"
      ? allTasks
      : allTasks.filter((task) => task.status === activeTab);

  const getStatusClass = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Submitted":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-gray-200 text-gray-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const tabs = ["All", "In Progress", "Submitted", "Completed", "Cancelled"];

  return (
    <div className="bg-[#F5F5F5] p-8 font-sans w-full min-h-screen">
      <h1 className="text-3xl font-bold text-[#404040]">My Tasks</h1>
      <p className="text-gray-600 mt-2">
        View and manage your submitted assignments, track progress, and follow
        up with solvers.
      </p>

      <div className="mt-6 flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              activeTab === tab
                ? "bg-[#00894E] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between flex-wrap"
            >
              <div className="flex items-center mb-4 sm:mb-0 flex-grow">
                {task.icon}
                <div className="ml-4">
                  <h3 className="font-bold text-lg text-[#404040]">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {task.subject} • Posted {task.posted}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <div className="text-right">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    {task.status === "Completed"
                      ? `Completed: ${task.completedDate}`
                      : `Deadline: ${task.deadline}`}
                  </p>
                </div>
                <button
                  onClick={() => handleView(task.title)}
                  className="bg-[#00894E] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  View
                </button>
                {task.status === "Completed" && (
                  <button
                    onClick={() => handleDownload(task.title)}
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Download
                  </button>
                )}
                {task.status === "Pending" && (
                  <button
                    onClick={() => handleFindSolver(task.title)}
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Find Solver
                  </button>
                )}
                {(task.status === "In Progress" ||
                  task.status === "Submitted") && (
                  <button
                    onClick={() => handleMessageSolver(task.title)}
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Message Solver
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No tasks in the "{activeTab}" category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentMyTask;
