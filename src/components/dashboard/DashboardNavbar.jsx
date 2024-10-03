import { useState } from "react";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";
import { RiMenuAddFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import useInfo from "../../hooks/useInfo";
import { logoutRequest } from "../../apiRequest/userApiRequest";
import { errorMsg } from "../../utils/helper";
import { PiSignOutThin } from "react-icons/pi";
import Cookies from "js-cookie";

function DashboardNavbar({ toggleSidebar }) {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const { data, loading, error } = useInfo();

  const handleLogout = async()=>{
    let res = await logoutRequest();
    if(res){
      Cookies.remove('token');
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/login"
    }
    else{
      errorMsg("unauthorized!")
    }
  }

  const handleDropDown = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full sm:px-4 bg-white lg:py-1 border-b border-gray-200">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className=" text-2xl mb-2 p-2 text-gray-600 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={toggleSidebar}
            >
              <RiMenuAddFill />
            </button>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  className="flex text-2xl rounded-ful"
                  onClick={handleDropDown}
                >
                  <FaUserCircle />
                </button>
              </div>
              {isProfileOpen && (
                <div
                  className={`z-50 absolute top-[40px] right-[20px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow p-2`}
                >
                  <div className="px-4 py-3">
                    <p className="text-md text-gray-600 font-semibold">
                      {data[0]?.profile?.firstName} {data[0]?.profile?.lastName}
                    </p>
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                    
                    <li className="flex items-center justify-center">
                      <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-white bg-[#E5383B] rounded-[8px]">
                      <PiSignOutThin />
                        <span className="ms-3"> Sign out</span>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
