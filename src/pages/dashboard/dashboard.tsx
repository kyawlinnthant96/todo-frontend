import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import TaskLists from '@/components/task-lists/task-lists.tsx';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Dashboard = () => {
  const [_, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({ page: '1', limit: '10' });
  }, []);
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="!bg-transparent pb-2 w-full !rounded-none justify-start border-b border-b-gray-200">
        <TabsTrigger className="!bg-transparent !shadow-none !text-lg" value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger className="!bg-transparent !shadow-none !text-lg" value="complete">
          Complete
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <TaskLists />
      </TabsContent>
      <TabsContent value="complete">Complete</TabsContent>
    </Tabs>
  );
};

export default Dashboard;
