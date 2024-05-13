import Sidebar from '@/components/sidebar.tsx';
import Header from '@/components/header.tsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import RouteLoading from '@/components/route-loading.tsx';

const AppLayout = () => {
  return (
    <div className="flex h-screen antialiased bg-white/90">
      <div className="flex">
        <Sidebar />
      </div>
      <div className="flex flex-1 p-4 flex-col overflow-hidden">
        <Header />
        <div className="h-fill w-full">
          <div className="mx-auto max-w-7xl p-4">
            <Suspense fallback={<RouteLoading />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
