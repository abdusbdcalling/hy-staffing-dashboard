import React, { useEffect, useState } from 'react';
import DasboardSidebar from '../components/dashboard/DasboardSidebar';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';
import useDeviceSize from '../hooks/useDeviceSize';

function DashboardLayout() {
  const isMobile = useDeviceSize();
  // console.log(isMobile);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  function toggleSidebar() {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <DashboardNavbar toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <DasboardSidebar />}
      <main>
        <div className="p-6 sm:ml-64 mt-14">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default DashboardLayout;
