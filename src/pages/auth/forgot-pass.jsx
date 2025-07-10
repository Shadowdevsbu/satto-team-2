import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmitted(true);
  };

  return (
    <div className="flex h-screen">
      {/* Left Column: Forgot Password Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm text-left">
          {!submitted ? (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Forgot Password</h1>
              <p className="text-gray-500 mb-8 text-sm">
                Enter your email to receive a reset link
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none focus:border-black"
                  required
                />

                {/* Submit Button */}
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
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Check your email</h2>
              <p className="text-gray-500 text-sm">
                A password reset link has been sent to <br />
                <span className="font-medium text-gray-800">{email}</span>.
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
        <img src="/forgotIllustration.png" alt="Forgot Password" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default ForgotPassword;
