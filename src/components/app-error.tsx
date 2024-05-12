
import { useNavigate } from 'react-router-dom';

const AppError = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-[100vh] flex-col items-center justify-center gap-4'>
      <p className='font-medium'>
        Application Error: a client-side exception has occurred.
      </p>
      <div
        className='cursor-pointer hover:underline'
        onClick={() => navigate(-1)}
      >
        Go back
      </div>
    </div>
  );
};

export default AppError;
