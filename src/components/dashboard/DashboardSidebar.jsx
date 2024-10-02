import {
  MdOutlineAdminPanelSettings,
  MdOutlineDashboard,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import SettingsNavbar from "./SettingsNavbar";
import { MdWorkOutline } from "react-icons/md";
import JobsNavbar from "./JobsNavbar";
import { HiOutlineUsers } from "react-icons/hi";
import { TbNavigationCog } from "react-icons/tb";
import { getUserInfo } from "../../utils/helper";

function DashboardSidebar({ toggleSidebar }) {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isJobsOpen, setJobsOpen] = useState(false);

  const {role} = getUserInfo();
  console.log(role);

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
    setJobsOpen(false);
  };

  const toggleJobs = () => {
    setJobsOpen(!isJobsOpen);
    setSettingsOpen(false);
  };

  function handleOnClick() {
    setSettingsOpen(false);
    if (isMobile) {
      toggleSidebar(false);
    }
  }

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-[#F8F9FA] border-r border-dashed border-[#929da8]">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <ul className="space-y-3 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-[#505961]  rounded-lg dark:text-white hover:bg-gray-100  group"
              onClick={handleOnClick}
            >
              <MdOutlineDashboard />
              <span className="ms-3 font-semibold">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/profile"
              className="flex items-center p-2 text-[#6B7986]  rounded-lg dark:text-white hover:bg-gray-100  group"
              onClick={handleOnClick}
            >
              <FaRegUser />
              <span className="ms-3">Profile</span>
            </Link>
          </li>
          <li>
            <button
              onClick={toggleSettings}
              className="flex items-center w-full p-2 text-[#6B7986]  rounded-lg dark:text-white hover:bg-gray-100  group"
            >
              <IoSettingsOutline />
              <span className="ms-3">Settings</span>
            </button>
            {isSettingsOpen && <SettingsNavbar toggleSidebar={toggleSidebar} />}
          </li>
         {
          role !== "user"? ( <li>
            <div
              className="flex items-center p-2 text-[#505961]  rounded-lg  group"
              onClick={handleOnClick}
            >
              <MdOutlineAdminPanelSettings size={16} />
              <span className="text-sm uppercase ms-3   font-semibold">
                Admin Panel
              </span>
            </div>
          </li>):(<></>)
         }
        {
          role !== "user"?(  <li>
            <button
              className="flex items-center w-full p-2 text-[#6B7986]  rounded-lg dark:text-white hover:bg-gray-100  group"
              onClick={toggleJobs}
            >
              <MdWorkOutline />
              <span className="ms-3">Jobs</span>
            </button>
            {isJobsOpen && (
              <JobsNavbar
                toggleSettings={toggleSettings}
                toggleSidebar={toggleSidebar}
              />
            )}
          </li>):(<></>)
        }
         {
          role === "admin"?( <li>
            <Link
              to="/users"
              className="flex items-center p-2 text-[#6B7986] rounded-lg dark:text-white hover:bg-gray-100 group"
            >
              <HiOutlineUsers />
              <span className="ms-3 ">Users</span>
            </Link>
          </li>):(<></>)
         }
          <li>
          <div
              className="flex items-center p-2 text-[#505961] rounded-lg group"
              onClick={handleOnClick}
            >
              <TbNavigationCog size={16} />
              <span className="text-sm uppercase ms-3 font-semibold">
              Navigation
            </span>
            </div>
          </li>

          <li>
            <Link
              to="/login"
              className="flex items-center p-2 text-[#6B7986]  rounded-lg dark:text-white hover:bg-gray-100 group"
            >
              <MdLogin />
              <span className="ms-3">Sign in</span>
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="flex items-center p-2 text-[#6B7986]  rounded-lg dark:text-white hover:bg-gray-100 group"
            >
              <AiOutlineForm />
              <span className="ms-3">Sign up</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
