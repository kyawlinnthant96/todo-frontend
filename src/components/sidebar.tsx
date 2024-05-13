import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import { useAppDispatch } from '@/store/hook.ts';
import { setInfoInitialState, setIsAuthenticate } from '@/store/slices/auth.slice.ts';

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[1];
  const isActive = currentPath === 'dashboard';
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setInfoInitialState());
    dispatch(setIsAuthenticate(false));
    localStorage.removeItem('info');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-w-[200px] relative p-8 bg-white shadow h-screen border-r border-gray-200">
      <h1 className="text-3xl mb-4 font-bold">
        To<span className="text-primary">Do</span>
      </h1>
      <NavLink to={'/dashboard'}>
        <div className={cn('text-md font-medium tracking-tight w-full py-2', isActive && 'border-b-2 border-primary')}>
          Dashboard
        </div>
      </NavLink>
      <Button onClick={handleLogout} variant="destructive" className="absolute bottom-0 inset-x-0 my-4 mx-2">
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
