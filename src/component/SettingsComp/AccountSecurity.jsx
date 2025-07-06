import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AccountSecurity = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRef =  useRef(null)
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
       confirmPasswordRef.current?.focus();
      return;
    }

    alert("Password updated successfully!");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");

    passwordRef.current?.blur();
    newPasswordRef.current?.blur();
    confirmPasswordRef.current?.blur();
  };
  return (
    <>
      <section className="bg-white p-6 rounded-xl shadow-md max-w-[700px] w-full mx-auto mx-5 md:mx-auto">
        <h2 className="text-xl font-bold mb-4">Account Security</h2>

        <form className="space-y-4 mb-6" onSubmit={handlePasswordChange}>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Change Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              ref={passwordRef}
              placeholder="Current password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {password && (
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              ref={newPasswordRef}
              placeholder="New password"
              value={newPassword}
              required
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {newPassword && (
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              ref={confirmPasswordRef}
              placeholder="Confirm new password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {confirmPassword && (
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
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
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={twoFactorEnabled}
                onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
              />
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
