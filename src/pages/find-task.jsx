import React, { useState } from 'react';
import {
  Bell,
  Search,
  Code,
  FlaskConical,
  BarChart2,
  FileText,
  User,
} from 'lucide-react';

const FindTask = () => {
  const initialQuickTasks = [
    {
      id: 1,
      subject: 'ENGLISH',
      course: 'ENG102 - Research Summary',
      price: '₦3,000',
      due: 'Due in 6 hours',
      user: 'Sarah A.',
      timePosted: '2 hours ago',
    },
    {
      id: 2,
      subject: 'MATHEMATICS',
      course: 'MTH201 - Calculus Problem Set',
      price: '₦2,500',
      due: 'Due in 1 day',
      user: 'Mike R.',
      timePosted: '4 hours ago',
    },
    {
      id: 3,
      subject: 'CHEMISTRY',
      course: 'CHM301 - Lab Report',
      price: '₦4,200',
      due: 'Due in 1 day',
      user: 'Lisa K.',
      timePosted: '1 hour ago',
    },
    {
      id: 4,
      subject: 'PHYSICS',
      course: 'PHY101 - Mechanics Review',
      price: '₦3,500',
      due: 'Due in 2 days',
      user: 'John D.',
      timePosted: '6 hours ago',
    },
    {
      id: 5,
      subject: 'BIOLOGY',
      course: 'BIO101 - Cell Structure Diagram',
      price: '₦2,800',
      due: 'Due in 8 hours',
      user: 'Emma T.',
      timePosted: '3 hours ago',
    },
    {
      id: 6,
      subject: 'ECONOMICS',
      course: 'ECO201 - Supply & Demand Graph',
      price: '₦3,200',
      due: 'Due in 12 hours',
      user: 'David M.',
      timePosted: '5 hours ago',
    },
    {
      id: 7,
      subject: 'PSYCHOLOGY',
      course: 'PSY101 - Memory Quiz',
      price: '₦1,800',
      due: 'Due in 4 hours',
      user: 'Nina K.',
      timePosted: '1 hour ago',
    },
    {
      id: 8,
      subject: 'MATHEMATICS',
      course: 'MTH101 - Algebra Worksheet',
      price: '₦2,200',
      due: 'Due in 10 hours',
      user: 'Alex R.',
      timePosted: '7 hours ago',
    },
  ];

  const initialAssignments = [
    {
      id: 1,
      subject: 'BIOLOGY',
      course: 'BIO204 - Genetics Essay',
      price: '₦5,500',
      due: 'Due in 3 days',
      user: 'John D.',
      timePosted: '5 hours ago',
    },
    {
      id: 2,
      subject: 'ECONOMICS',
      course: 'ECO301 - Market Analysis',
      price: '₦7,000',
      due: 'Due in 5 days',
      user: 'Emma S.',
      timePosted: '8 hours ago',
    },
    {
      id: 3,
      subject: 'PHYSICS',
      course: 'PHY302 - Quantum Mechanics',
      price: '₦6,800',
      due: 'Due in 1 week',
      user: 'Alex M.',
      timePosted: '12 hours ago',
    },
    {
      id: 4,
      subject: 'PSYCHOLOGY',
      course: 'PSY201 - Behavioral Study',
      price: '₦4,500',
      due: 'Due in 4 days',
      user: 'Nina P.',
      timePosted: '1 day ago',
    },
    {
      id: 5,
      subject: 'ENGLISH',
      course: 'ENG301 - Literature Review',
      price: '₦6,200',
      due: 'Due in 6 days',
      user: 'Sarah L.',
      timePosted: '2 days ago',
    },
    {
      id: 6,
      subject: 'MATHEMATICS',
      course: 'MTH301 - Statistics Project',
      price: '₦5,800',
      due: 'Due in 1 week',
      user: 'Mike K.',
      timePosted: '1 day ago',
    },
    {
      id: 7,
      subject: 'CHEMISTRY',
      course: 'CHM401 - Organic Chemistry Report',
      price: '₦8,500',
      due: 'Due in 2 weeks',
      user: 'Lisa R.',
      timePosted: '3 days ago',
    },
    {
      id: 8,
      subject: 'BIOLOGY',
      course: 'BIO301 - Ecology Assignment',
      price: '₦4,800',
      due: 'Due in 5 days',
      user: 'Tom W.',
      timePosted: '6 hours ago',
    },
    {
      id: 9,
      subject: 'PHYSICS',
      course: 'PHY201 - Thermodynamics Problems',
      price: '₦5,200',
      due: 'Due in 4 days',
      user: 'Anna M.',
      timePosted: '10 hours ago',
    },
    {
      id: 10,
      subject: 'ECONOMICS',
      course: 'ECO401 - Macroeconomics Essay',
      price: '₦7,500',
      due: 'Due in 1 week',
      user: 'James T.',
      timePosted: '2 days ago',
    },
  ];

  const initialFinalYearProjects = [
    {
      id: 1,
      subject: 'COMPUTER SCIENCE',
      course: 'CSC499 - Web Application',
      price: '₦25,000',
      due: 'Due in 3 weeks',
      user: 'David L.',
      timePosted: '2 days ago',
    },
    {
      id: 2,
      subject: 'ENGINEERING',
      course: 'ENG499 - Bridge Design',
      price: '₦30,000',
      due: 'Due in 1 month',
      user: 'Tom W.',
      timePosted: '3 days ago',
    },
    {
      id: 3,
      subject: 'BIOLOGY',
      course: 'BIO499 - Gene Editing Research',
      price: '₦35,000',
      due: 'Due in 2 months',
      user: 'Sarah M.',
      timePosted: '5 days ago',
    },
    {
      id: 4,
      subject: 'ENGINEERING',
      course: 'ENG499 - Solar Panel System',
      price: '₦28,000',
      due: 'Due in 6 weeks',
      user: 'Mike H.',
      timePosted: '1 week ago',
    },
    {
      id: 5,
      subject: 'COMPUTER SCIENCE',
      course: 'CSC499 - Mobile App Development',
      price: '₦32,000',
      due: 'Due in 2 months',
      user: 'Lisa K.',
      timePosted: '4 days ago',
    },
    {
      id: 6,
      subject: 'PSYCHOLOGY',
      course: 'PSY499 - Cognitive Behavior Analysis',
      price: '₦22,000',
      due: 'Due in 5 weeks',
      user: 'Anna R.',
      timePosted: '6 days ago',
    },
    {
      id: 7,
      subject: 'ECONOMICS',
      course: 'ECO499 - Economic Policy Impact Study',
      price: '₦26,000',
      due: 'Due in 7 weeks',
      user: 'James P.',
      timePosted: '3 days ago',
    },
  ];

  const tasksPerPage = 3;
  const [visibleQuickTasks, setVisibleQuickTasks] = useState(tasksPerPage);
  const [visibleAssignments, setVisibleAssignments] = useState(tasksPerPage);
  const [visibleFinalYearProjects, setVisibleFinalYearProjects] = useState(tasksPerPage);

  const loadMoreQuickTasks = () => setVisibleQuickTasks((prev) => prev + tasksPerPage);
  const loadMoreAssignments = () => setVisibleAssignments((prev) => prev + tasksPerPage);
  const loadMoreFinalYearProjects = () => setVisibleFinalYearProjects((prev) => prev + tasksPerPage);

  const getSubjectColor = (subject) => {
    const colors = {
      'ENGLISH': 'bg-red-100 text-red-800',
      'MATHEMATICS': 'bg-blue-100 text-blue-800',
      'CHEMISTRY': 'bg-purple-100 text-purple-800',
      'PHYSICS': 'bg-indigo-100 text-indigo-800',
      'BIOLOGY': 'bg-green-100 text-green-800',
      'ECONOMICS': 'bg-yellow-100 text-yellow-800',
      'PSYCHOLOGY': 'bg-pink-100 text-pink-800',
      'COMPUTER SCIENCE': 'bg-cyan-100 text-cyan-800',
      'ENGINEERING': 'bg-orange-100 text-orange-800',
    };
    return colors[subject] || 'bg-gray-100 text-gray-800';
  };

  const TaskCard = ({ task, isQuick }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getSubjectColor(task.subject)}`}>
          {task.subject}
        </span>
        <span className="text-xs text-gray-500">{task.timePosted}</span>
      </div>
      
      <h3 className="text-sm font-medium text-gray-900 mb-2">{task.course}</h3>
      
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-gray-900">{task.price}</span>
        <span className="text-xs text-gray-600">{task.due}</span>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-2">
            <User size={12} className="text-gray-600" />
          </div>
          <span className="text-xs text-gray-600">{task.user}</span>
        </div>
        <button className="bg-[#15833F] text-white text-xs px-3 py-1 rounded hover:bg-green-600 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-xl font-bold text-gray-800">SATTO</div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell size={24} />
          </button>
          <button className="bg-[#15833F] text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Dashboard
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-[42px] md:text-[60px] font-bold leading-tight">
          The student powered
          <br />
          way to get work{' '}
          <span className="bg-green-200 text-green-800 px-4 py-1 rounded-full">
            done
          </span>
        </h1>
        <p className="text-gray-600 mt-5 mb-8 text-lg">
          Browse real requests from students who need help with assignments,
          final projects, and more.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl w-[597] mx-auto rounded-xl bg-[#E5E7EB] mb-6 shadow-sm">
      <input
        type="text"
        placeholder="Search by subject, course, or keyword..."
        className="w-full pl-5 pr-12 py-4 text-gray-500 placeholder:text-gray-400 text-lg rounded-xl focus:outline-none"
      />
      <Search
        size={21}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
        <button className="bg-[#15833F] text-white px-4 py-2 rounded-full font-medium">
            All
          </button>
          <button className=" text-gray-600 bg-white rounded-full hover:text-gray-900 px-4 py-2 font-medium">
            Assignments
          </button>
          <button className="text-gray-600 hover:text-gray-900 bg-white rounded-full font-medium px-4 py-2">
            Projects
          </button>
          <button className="text-gray-600 hover:text-gray-900 bg-white rounded-full font-medium px-4 py-2">
            Quick Tasks
          </button>
          <button className="text-gray-600 hover:text-gray-900 bg-white rounded-full font-medium px-4 py-2">
            Exams
          </button>
        </div>

        {/* Popular Categories */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Code className="h-8 w-8 text-blue-600 mb-2 mx-auto" />
              <h4 className="font-medium text-gray-900 mb-1">Programming Tasks</h4>
              <p className="text-xs text-gray-600">PHP, Python, Java, JavaScript</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <FlaskConical className="h-8 w-8 text-green-600 mb-2 mx-auto" />
              <h4 className="font-medium text-gray-900 mb-1">Science Reports</h4>
              <p className="text-xs text-gray-600">Lab Reports, Research, Analysis</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <BarChart2 className="h-8 w-8 text-purple-600 mb-2 mx-auto" />
              <h4 className="font-medium text-gray-900 mb-1">Data Analysis</h4>
              <p className="text-xs text-gray-600">Statistics, Excel, Python</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <FileText className="h-8 w-8 text-orange-600 mb-2 mx-auto" />
              <h4 className="font-medium text-gray-900 mb-1">Essay Writing</h4>
              <p className="text-xs text-gray-600">Academic Papers, Research</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Quick Tasks */}
        <section className="mb-16">
          <h2 className="text-2xl mt-16 font-semibold text-gray-900 mb-6">
            Quick Tasks <span className="text-gray-500">(Due Soon)</span>
          </h2>
          {initialQuickTasks.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initialQuickTasks
                  .slice(0, visibleQuickTasks)
                  .map((task) => (
                    <TaskCard key={task.id} task={task} isQuick />
                  ))}
              </div>
              {visibleQuickTasks < initialQuickTasks.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={loadMoreQuickTasks}
                    className="bg-[#15833F] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">No quick tasks available.</p>
          )}
        </section>

        {/* Assignments */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Assignments</h2>
          {initialAssignments.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initialAssignments
                  .slice(0, visibleAssignments)
                  .map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
              </div>
              {visibleAssignments < initialAssignments.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={loadMoreAssignments}
                    className="bg-[#15833F] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">No assignments available.</p>
          )}
        </section>

        {/* Final Year Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Final Year Projects</h2>
          {initialFinalYearProjects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initialFinalYearProjects
                  .slice(0, visibleFinalYearProjects)
                  .map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
              </div>
              {visibleFinalYearProjects < initialFinalYearProjects.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={loadMoreFinalYearProjects}
                    className="bg-[#15833F] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">No final year projects available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default FindTask;