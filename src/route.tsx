import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/pages/auth/login/login.tsx';
import AppLayout from '@/layout/AppLayout.tsx';
import AppError from '@/components/app-error.tsx';
import Dashboard from '@/pages/dashboard/dashboard.tsx';
import Signup from '@/pages/auth/signup/signup.tsx';
import Landing from '@/pages/auth/landing/landing.tsx';

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to={"/dashboard"} replace /> },
  {
    path: "/dashboard",
    element: <AppLayout />,
    errorElement: <AppError />,
    children: [
      {
        element: <Dashboard />,
        index: true
      }
    ]
  },
])

export const authRoute = createBrowserRouter([
  { index: true, element: <Landing /> },
  { path: '/signup', element: <Signup /> },
  {path: "/login", element: <Login /> },
  { path: '*', element: <Navigate to={"/"} replace /> },
]);
