import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [resetDone, setResetDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Perform password reset logic here (API call)
    console.log('Password reset to:', newPassword);
    setResetDone(true);
  };

  return (
    <div className="flex h-screen">
      {/* Left Column */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm text-left">
          {!resetDone ? (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Reset Password</h1>
              <p className="text-gray-500 mb-8 text-sm">Enter your new password</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* New Password */}
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-sm pr-10 focus:outline-none focus:border-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* Confirm Password */}
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-black"
                  required
                />

                {error && (
                  <p className="text-red-500 text-sm -mt-4">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-2 bg-[#19C966] text-white rounded-md font-medium hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-14 w-14 text-green-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Password Reset Successful</h2>
              <p className="text-gray-500 text-sm">
                You can now log in with your new password.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Illustration */}
      <div
        className="hidden md:flex w-1/2 items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url('/signupBg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src="/signupIllustration.png" alt="Reset Password" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default ResetPassword;
