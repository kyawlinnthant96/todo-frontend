import { RouterProvider } from 'react-router-dom';
import { authRoute, router } from '@/route.tsx';
import { useAppSelector } from '@/store/hook.ts';

const App = () => {
  const { isAuthenticate } = useAppSelector((state) => state.auth);

  if (isAuthenticate || (localStorage.token && localStorage.info)) {
    return <RouterProvider router={router} />;
  }
  return <RouterProvider router={authRoute} />;
};

export default App;
