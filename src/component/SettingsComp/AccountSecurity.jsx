import React from "react";

const AccountSecurity = () => {
  return (
    <>
      <section className="bg-white p-6 rounded-xl shadow-md max-w-[700px] w-full mx-auto mx-5 md:mx-auto">
        <h2 className="text-xl font-bold mb-4">Account Security</h2>

        <form className="space-y-4 mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Change Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Current password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            id="newPassword"
            placeholder="New password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            id="newPassword"
            placeholder="Confirm new password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            Update Password
          </button>
        </form>
        <hr className="my-6" />

        <div className="mb-2">
          <div>
            <h3 className="font-semibold">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600">
              Add an extra layer of security to your account
            </p>
          </div>

          <div className="flex flex-col items-end ">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-600 transition-all duration-200"></div>
              <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all duration-200 peer-checked:translate-x-full peer-checked:left-0.5"></div>
            </label>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Last login: December 15, 2024 2:30PM
          </p>
        </div>
      </section>
    </>
  );
};

export default AccountSecurity;
