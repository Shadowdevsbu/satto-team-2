import { FaCamera, FaPen } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const SettingsForm = () => {
  const DEFAULT_AVATAR =
    "https://ui-avatars.com/api/?name=John+Doe&background=10b981&color=fff&size=80";

  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@university.edu");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [profilePicture, setProfilePicture] = useState(DEFAULT_AVATAR);
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfilePicture(storedImage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (previewRef.current && !previewRef.current.contains(event.target)) {
        setShowPreview(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="bg-white p-6 rounded-xl shadow-md max-w-[700px] w-full mx-auto mx-5 md:mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Profile Information</h2>
          <button className="text-sm text-blue-500">
            <FaPen className="text-green-600" />
          </button>
        </div>

        <div className="flex gap-6">
          <div className="relative w-20 h-20 flex-shrink-0">
            {/* <span className="text-[80px]">🤓</span> */}
            <div className="w-[80px] h-[80px] rounded-full object-cover">
              <img
                src={profilePicture}
                alt="Profile"
                title="Profile Picture"
                className="w-[80px] h-[80px] rounded-full object-cover cursor-pointer"
                onClick={() => setShowPreview(!showPreview)}
              />

              <input
                type="file"
                accept="image/*"
                id="profile-upload"
                onChange={(e) => handleImageUpload(e)}
                className="hidden"
              />
              <label
                htmlFor="profile-upload"
                className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full cursor-pointer"
              >
                <FaCamera className="text-white text-xs" title="upload photo" />
              </label>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={(e) => e.target.select()}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={(e) => e.target.select()}
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onFocus={(e) => e.target.select()}
                  id="phoneNumber"
                  className="w-full md:w-[555px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 ">
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full relative mx-auto mx-5 md:mx-auto"
            ref={previewRef}
          >
            <button
              className="absolute top-[-1px] right-[3px] text-red-500 text-xl font-bold"
              onClick={() => setShowPreview(false)}
              title="Close Preview"
            >
              &times;
            </button>
            <img
              src={profilePicture}
              alt="Profile Preview"
              className="w-full h-auto rounded-md "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsForm;
