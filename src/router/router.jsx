import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import ChangePassword from '../pages/Password/ChangePassword';
import JobCreate from '../pages/Jobs/JobCreate';
import AllJobs from '../pages/Jobs/AllJobs';
import Users from '../pages/Users/Users';
import Otp from '../pages/Otp/Otp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
      {
        path: '/settings/change-password',
        element: <ChangePassword />,
      },
      {
        path: '/jobs/create',
        element: <JobCreate />,
      },
      {
        path: '/jobs/read',
        element: <AllJobs />,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/otp-verification',
    element: <Otp />,
  },
]);

export default router;
