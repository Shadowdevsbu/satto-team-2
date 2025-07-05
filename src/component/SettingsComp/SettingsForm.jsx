import { FaCamera, FaPen } from "react-icons/fa";

const SettingsForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-[700px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Profile Information</h2>
        <button className="text-sm text-blue-500">
          <FaPen className="text-green-600" />
        </button>
      </div>

      <div className="flex gap-6">
        <div className="relative">
          {/* <span className="text-[80px]">🤓</span> */}
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=10b981&color=fff&size=80"
            alt="Profile"
            className="w-[80px] h-[80px] rounded-full object-cover"
          />
          <div className="absolute bottom-[60px] right-[10px] bg-green-500 p-1 rounded-full cursor-pointer">
            <FaCamera className="text-white text-xs" />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value="John doe"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                value="johndoe@university.edu"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="phoneNumber"
              >
                Phone Number(optional)
              </label>
              <input
                type="text"
                value="123-456-7890"
                className="w-[520px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
