import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/pages/auth/login';
import AppLayout from '@/layout/AppLayout.tsx';
import AppError from '@/components/app-error.tsx';
import Dashboard from '@/pages/dashboard/dashboard.tsx';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <AppError />,
    children: [
      {
        element: <Dashboard />,
        index: true
      }
    ]
  }
])

export const loginRoute = createBrowserRouter([
  { index: true, element: <Login /> },
  { path: '*', element: <Navigate to='/' replace /> },
]);
