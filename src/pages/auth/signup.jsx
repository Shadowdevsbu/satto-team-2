import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fname, Fname] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', { email, password, accountType });
   
  };

const handleGoogle = async () => {
  window.location.href = 'http://localhost:3000/auth/google';
}
  return (
    <div className="flex h-screen">
      {/* Left Column: Sign Up Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign up</h1>
          <p className="text-gray-500 mb-8 text-sm">Enter your account details</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <input
              type="text"
              placeholder="Full Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none "
              required
            />

                        {/* Email Input */}
                        <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 bg-transparent py-2 text-sm focus:outline-none "
              required
            />

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm pr-10 focus:outline-none "
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

            {/* Account Type Selection */}
            <div className="flex space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setAccountType('student')}
                className={`w-full py-2 rounded-md text-sm font-medium transition ${
                  accountType === 'student'
                    ? 'bg-[#19C966] text-white'
                    : 'bg-white border border-gray-300 text-gray-900'
                }`}
              >
                Sign up as a Student
              </button>
              <button
                type="button"
                onClick={() => setAccountType('solver')}
                className={`w-full py-2 rounded-md text-sm font-medium transition ${
                  accountType === 'solver'
                    ? 'bg-green-500 text-white'
                    : 'bg-white border border-gray-300 text-gray-900'
                }`}
              >
                Sign up as a Solver
              </button>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md text-sm font-medium bg-white hover:bg-gray-50"
              onClick={handleGoogle}
            >
            
              <FcGoogle className="h-5 w-5 mr-2" />
              Continue with Google
            </button>
          </form>

          <div className="mt-10 text-center text-sm text-gray-600">
            Already have an account?
            <a
              href="/auth/signin"
              className="ml-2 inline-block px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800"
            >
              Login
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
        <img src="/signupIllustration.png" alt="Illustration" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default SignUp;
