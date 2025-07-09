import React from 'react';
import { FiDownload } from 'react-icons/fi'; // For the download icon
import { FaMoneyBillAlt, FaLock, FaTimesCircle } from 'react-icons/fa'; // For money, lock, and times circle icons

const Payment = () => {
  // Sample data for the payment history table
  const payments = [
    {
      id: 1,
      taskTitle: 'PHY202 - Thermodynamics Assignment',
      taskDetails: 'Physics • University Level',
      solver: 'David Okafor',
      amount: '₦3,000',
      status: 'Paid',
      date: 'June 17, 2025',
    },
    {
      id: 2,
      taskTitle: 'MTH301 - Linear Algebra Problem Set',
      taskDetails: 'Mathematics • Graduate Level',
      solver: 'Sarah Ahmed',
      amount: '₦4,500',
      status: 'Escrowed',
      date: 'June 15, 2025',
    },
    {
      id: 3,
      taskTitle: 'CHM201 - Organic Chemistry Lab Report',
      taskDetails: 'Chemistry • Undergraduate',
      solver: 'Michael Chen',
      amount: '₦2,800',
      status: 'Paid',
      date: 'June 12, 2025',
    },
    {
      id: 4,
      taskTitle: 'ENG102 - Essay on Climate Change',
      taskDetails: 'English • Undergraduate',
      solver: 'Aisha Ibrahim',
      amount: '₦1,500',
      status: 'Refunded',
      date: 'June 10, 2025',
    },
    {
      id: 5,
      taskTitle: 'CSC305 - Database Design Project',
      taskDetails: 'Computer Science • Graduate Level',
      solver: 'James Wilson',
      amount: '₦6,200',
      status: 'Paid',
      date: 'June 8, 2025',
    },
    {
      id: 6,
      taskTitle: 'BIO201 - Cell Biology Research Paper',
      taskDetails: 'Biology • Undergraduate',
      solver: 'Fatima Musa',
      amount: '₦3,800',
      status: 'Escrowed',
      date: 'June 5, 2025',
    },
  ];

  // Helper function to get status badge styling
  const getStatusBadgeClasses = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Escrowed':
        return 'bg-yellow-100 text-yellow-800';
      case 'Refunded':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Payments</h1>
          <p className="text-gray-600">Track your payment history and escrow releases for all tasks.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 transition duration-200">
          <FiDownload className="w-5 h-5 mr-2" /> {/* Replaced SVG with FiDownload */}
          Download Payment Report
        </button>
      </div>

      {/* Filter Section */}
      <div className="mb-6 flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Filter by status:</span>
        <button className="px-4 py-2 rounded-full bg-[#15833F] text-white font-medium shadow-md hover:bg-green-600 transition duration-200">
          All
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium shadow-md hover:bg-gray-100 transition duration-200">
          Paid
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium shadow-md hover:bg-gray-100 transition duration-200">
          Escrowed
        </button>
        <button className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium shadow-md hover:bg-gray-100 transition duration-200">
          Refunded
        </button>
      </div>

      {/* Payment History Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Solver
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.taskTitle}</div>
                  <div className="text-sm text-gray-500">{payment.taskDetails}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{payment.solver}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClasses(
                      payment.status
                    )}`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Paid Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <FaMoneyBillAlt className="w-6 h-6 text-green-600" /> {/* Replaced SVG with FaMoneyBillAlt */}
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Paid</p>
            <p className="text-2xl font-bold text-gray-800">₦16,300</p>
          </div>
        </div>

        {/* In Escrow Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
            <FaLock className="w-6 h-6 text-yellow-600" /> {/* Replaced SVG with FaLock */}
          </div>
          <div>
            <p className="text-gray-500 text-sm">In Escrow</p>
            <p className="text-2xl font-bold text-gray-800">₦8,300</p>
          </div>
        </div>

        {/* Refunded Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <FaTimesCircle className="w-6 h-6 text-red-600" /> {/* Replaced SVG with FaTimesCircle */}
          </div>
          <div>
            <p className="text-gray-500 text-sm">Refunded</p>
            <p className="text-2xl font-bold text-gray-800">₦1,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
