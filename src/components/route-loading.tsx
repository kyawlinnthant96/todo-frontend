import { Loader } from 'lucide-react';

const RouteLoading = () => {
  return (
    <div className="flex min-h-[calc(100vh-110px)] w-full items-center justify-center">
      <Loader className="w-8 text-primary animate-spin" />
    </div>
  );
};

export default RouteLoading;
