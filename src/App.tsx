import { RouterProvider } from 'react-router-dom';
import { authRoute, router } from '@/route.tsx';

const App = () => {

  if (localStorage.token && localStorage.info) {
    return (
      <RouterProvider router={router} />
    );
  }
  return <RouterProvider router={authRoute} />;
};

export default App;
