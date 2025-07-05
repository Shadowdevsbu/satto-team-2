import { BiSolidMessageAltDetail } from "react-icons/bi";
import { RiLayout3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { BsFilePersonFill } from "react-icons/bs";
import { FaArrowUpLong,FaWallet,FaMoneyBills,FaCirclePause,FaCheck   } from "react-icons/fa6";
import { FaCoins,FaClock,FaClipboardList   } from "react-icons/fa";
import { ArrowUp, Search } from "lucide-react";


const Earnings = () => {
  return (
    <div className="min-h-screen flex bg-[#F5F5F5] text-[#404040]">

<aside className="w-52 bg-white py-6 flex flex-col justify-between border-r border-gray-200">
  <div className="space-y-6">
    <h1 className="text-2xl px-12 font-bold text-black">SATTO</h1>

    <nav className="space-y-1">
      {[
        { name: "Dashboard", icon: <RiLayout3Fill size={18} />, active: false },
        { name: "My tasks", icon: <FaClipboardList  size={18} />, active: false },
        { name: "Proposals", icon: <BsFilePersonFill size={18} />, active: false },
        { name: "Messages", icon: <BiSolidMessageAltDetail size={18} />, active: false },
        { name: "Settings", icon: <FaCirclePause className="rotate-90 " size={18} />, active: false },
        { name: "Earnings", icon: <FaMoneyBills size={18} />, active: true },
      ].map(({ name, icon, active }) => (
        <div
          key={name}
          className={`flex items-center gap-3 px-4 py-2 text-sm font-medium cursor-pointer
            ${
              active
                ? "bg-[#C7F7C1] border-l-4 border-[#00894E]"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          {icon}
          <span>{name}</span>
        </div>
      ))}
    </nav>
  </div>

  <div className="pt-6">
    <div className="flex items-center gap-3 px-4 py-2 text-[#404040] hover:bg-red-100 cursor-pointer rounded-lg text-sm font-medium">
      <IoLogOut size={18} />
      <span>Logout</span>
    </div>
  </div>
</aside>



      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold">Your Earnings</h2>
        <p className="text-sm text-gray-500 mt-1 py-2">
            Track your income from completed tasks and payouts.
        </p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
  {/* Total Earned */}
  <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-3">
    <div className="bg-[#E6F7EC] text-[#00894E] p-2 rounded-lg w-fit">
    <FaCoins size={20}/>
    </div>
    <h3 className="text-2xl font-bold text-[#00894E]">₦28,500</h3>
    <p className="text-sm text-gray-500">Total Earned</p>
  </div>

  {/* Available Balance */}
  <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-3">
    <div className="bg-[#D1FAE5] text-[#047857] p-2 rounded-lg w-fit">
      <FaWallet  size={20} />
    </div>
    <h3 className="text-2xl font-bold text-[#047857]">₦5,500</h3>
    <p className="text-sm text-gray-500">Available Balance</p>
  </div>

  {/* Pending Funds */}
  <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-3">
    <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg w-fit">
    <FaClock size={20}/>
    </div>
    <h3 className="text-2xl font-bold text-yellow-600">₦3,000</h3>
    <p className="text-sm text-gray-500">Pending Funds</p>
  </div>

  {/* Withdrawn */}
  <div className="bg-white rounded-lg shadow p-5 flex flex-col gap-3">
    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg w-fit">
    <FaArrowUpLong size={20} />

    </div>
    <h3 className="text-2xl font-bold text-blue-600">₦20,000</h3>
    <p className="text-sm text-gray-500">Withdrawn</p>
  </div>
</div>

<section className="mt-10">
    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
     <div className="space-y-4">
        
{/* Activity Card #1 */}
<div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">

  <div className="flex items-start gap-4">
    <div className="bg-green-100 text-green-700 p-2 rounded-lg">
      <FaCheck  size={20} />
    </div>
    <div>
      <p className="font-medium text-sm">Frontend Bug Fix</p>
      <p className="text-xs text-gray-500">
        Ref: #SAT19201 &middot; May 5, 2025
      </p>
    </div>
  </div>

  <div className="text-right">
    <p className="text-sm font-semibold ">₦4,000</p>
    <span className="inline-block mt-1 bg-green-100 text-green-800 text-[10px] font-semibold px-2 py-1 rounded-full">
      Paid
    </span>
  </div>
</div>

{/* Activity Card #2 */}
<div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
  <div className="flex items-start gap-4">
    <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg">
      <FaClock size={20}/>
    </div>
    <div>
      <p className="font-medium text-sm">Final Year Project</p>
      <p className="text-xs text-gray-500">
        Ref: #SAT17438 &middot; May 4, 2025
      </p>
    </div>
  </div>
  <div className="text-right">
    <p className="text-sm font-semibold ">₦3,000</p>
    <span className="inline-block mt-1 bg-yellow-100 text-yellow-800 text-[10px] font-semibold px-2 py-1 rounded-full">
      Pending
    </span>
  </div>
</div>

{/* Activity Card #3 */}
<div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
  <div className="flex items-start gap-4">
    <div className="bg-green-100 text-green-700 p-2 rounded-lg">
      <FaCheck  size={20} />
    </div>
    <div>
      <p className="font-medium text-sm">Data Cleanup</p>
      <p className="text-xs text-gray-500">
        Ref: #SAT16742 &middot; May 3, 2025
      </p>
    </div>
  </div>
  <div className="text-right">
    <p className="text-sm font-semibold ">₦2,500</p>
    <span className="inline-block mt-1 bg-green-100 text-green-800 text-[10px] font-semibold px-2 py-1 rounded-full">
      Paid
    </span>
  </div>
</div>
</div>
</section>
<section className="mt-10">
  <h3 className="text-lg font-semibold mb-4">Payout History</h3>

  <div className="overflow-x-auto bg-white rounded-lg shadow">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-gray-100 text-gray-600">
        <tr>
          <th className="px-6 py-3 font-semibold">Date</th>
          <th className="px-6 py-3 font-semibold">Amount</th>
          <th className="px-6 py-3 font-semibold">Method</th>
          <th className="px-6 py-3 font-semibold">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="px-6 py-4 text-gray-600">May 1, 2025</td>
          <td className="px-6 py-4 font-semibold">₦20,000</td>
          <td className="px-6 py-4 text-gray-600">Bank Transfer</td>
          <td className="px-6 py-4">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              Successful 
            </span>
          </td>

        </tr>

        <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="px-6 py-4 text-gray-600">April 28, 2025</td>
          <td className="px-6 py-4 font-semibold">₦5,500</td>
          <td className="px-6 py-4 text-gray-600">Bank Transfer</td>
          <td className="px-6 py-4">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              Successful 
            </span>
          </td>
          
        </tr>

                <tr className="border-t border-gray-200 hover:bg-gray-50">
          <td className="px-6 py-4 text-gray-600">April 28, 2025</td>
          <td className="px-6 py-4 font-semibold">₦5,500</td>
          <td className="px-6 py-4 text-gray-600">Bank Transfer</td>
          <td className="px-6 py-4">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              Processing
            </span>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</section>

            
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
  {/* Withdraw Funds */}
  <button className="flex items-center justify-center gap-2 bg-[#00894E] text-white font-medium py-3 rounded-md hover:bg-green-700 transition w-full">
    <ArrowUp size={16} />
    Withdraw Funds
  </button>

  {/* Find Tasks */}
  <button className="flex items-center justify-center gap-2 border border-[#00894E] text-[#00894E] font-medium py-3 rounded-md hover:bg-green-50 transition w-full">
    <Search size={16} />
    Find Tasks
  </button>
</div>
      </main>
    </div>
  );
}

export default Earnings
