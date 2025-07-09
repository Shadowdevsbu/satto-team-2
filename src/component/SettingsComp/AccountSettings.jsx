import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const AccountSettings = () => {
  const handleDeactivateAccount = () => {
    // Logic to handle account deactivation
  };

  const handleSwitchAccount = () => {
    // Logic to switch account type (student <-> solver)
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-md max-w-[700px] w-full mx-auto mx-5 md:mx-auto">
      <h2 className="text-xl font-bold mb-4">Account Security</h2>

      <div className="w-full bg-[#C7F7C1] px-4 py-4 border rounded-md flex   justify-between gap-4">
        <div className="flex flex-col ">
          <h4 className="text-lg font-semibold"> Switch to Solver </h4>
          <p className="text-sm text-gray-500">
            Start helping other students and earn money
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={handleSwitchAccount}
            className="bg-[#00894E] text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Switch Account
          </button>
        </div>
      </div>

      <hr className="my-3" />
      <div className="flex flex-row  px-4">
        <FaExclamationTriangle className="text-red-500 text-lg mb-4" />
        <p
          role="button"
          onClick={handleDeactivateAccount}
          className="text-red-500 text-sm px-3"
        >
          Deactivate Account
        </p>
      </div>
    </section>
  );
};

export default AccountSettings;
