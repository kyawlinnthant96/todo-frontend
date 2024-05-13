import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { BellDotIcon, Calendar } from 'lucide-react';
import moment from 'moment';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
const Header = () => {
  const info = JSON.parse(localStorage.getItem('info'));
  const now = moment(Date.now());
  const currentDateFormat = now.format('DD MMM YYYY');
  return (
    <div className="pt-6 px-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-tight leading-none">Welcome back, {info?.name} 👏</h1>
      <div className="flex items-center gap-x-6">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-800" />
        <BellDotIcon className="w-5 h-5 text-gray-800" />
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-800" />
          <p className="text-md font-bold text-gray-400">{currentDateFormat}</p>
        </div>
        <Avatar className="h-12 w-12">
          <AvatarImage src={'/public.jpg'} alt="user-image" />
          <AvatarFallback>{info?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
