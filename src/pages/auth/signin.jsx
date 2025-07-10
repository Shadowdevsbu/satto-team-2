import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', { email, password });
    
  };

  return (
    <div className="flex h-screen">
      {/* Left Column: Login Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-500 mb-8 text-sm">Enter your account details</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none"
              required
            />

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm pr-10 focus:outline-none"
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

            {/* Forgot Password */}
            <div className="text-right text-sm text-gray-500 hover:underline cursor-pointer">
              <a href="/auth/forgot-password">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 bg-[#19C966] text-white rounded-md font-medium hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>

          {/* Google Login */}
          <button
            type="button"
            className="mt-4 w-full flex items-center justify-center py-2 border border-gray-300 rounded-md text-sm font-medium bg-white hover:bg-gray-50"
          >
            <FcGoogle className="h-5 w-5 mr-2" />
            Continue with Google
          </button>

          <div className="mt-10 text-center text-sm text-gray-600">
            Dont have an account?
            <a
              href="/auth/signup"
              className="ml-2 inline-block px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800"
            >
              Sign up
            </a>
          </div>
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
        <img src="/siginIllustration.png" alt="Illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default SignIn;
