import { RouterProvider } from 'react-router-dom';
import { loginRoute, router } from '@/route.tsx';

const App = () => {
  const isAuthenticate = false;
  if (isAuthenticate) {
    return (
      <RouterProvider router={router} />
    );
  }
  return <RouterProvider router={loginRoute} />;
};

export default App;
