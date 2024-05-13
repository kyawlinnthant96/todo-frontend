import { Button } from '@/components/ui/button.tsx';
import { CircleFadingPlus, Loader } from 'lucide-react';
import TaskCard from '@/components/task-card.tsx';
import useTaskListsHook from '@/components/task-lists/useTaskListsHook.ts';
import { useAppDispatch } from '@/store/hook.ts';
import { setCreateTaskDialog } from '@/store/slices/dialog.slice.ts';
import CreateTask from '@/components/create-task.tsx';
import UpdateTask from '@/components/update-task.tsx';
import DeleteTask from '@/components/delete-task.tsx';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';

const TaskLists = () => {
  const { totalTasks, isPending, isError, handleNext, handlePrev } = useTaskListsHook();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className=" flex flex-col pt-2 px-2 relative h-screen">
        <div className="flex pb-2 justify-between items-center">
          <h2 className="text-gray-400 font-bold text-lg">Todo(4)</h2>
          <Button
            onClick={() => dispatch(setCreateTaskDialog(true))}
            size="lg"
            className="gap-2 px-3 items-center text-md rounded-xl"
          >
            <CircleFadingPlus className="w-5 h-5 text-white" />
            Add new task
          </Button>
        </div>
        <div className="h-[500px] w-full overflow-y-auto ">
          {isPending ? (
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex gap-x-4">
                <Loader className="w-8 h-8 animate-spin text-primary" />
              </div>
            </div>
          ) : (
            <>
              {totalTasks?.data?.tasks?.length > 0 ? (
                <div className="flex relativeflex-1 lg:pb-52 flex-col space-y-2">
                  {totalTasks?.data?.tasks.map((task) => <TaskCard key={task._id} task={task} />)}
                </div>
              ) : (
                <div>Data not found</div>
              )}
            </>
          )}

          {isError && (
            <div className="w-full h-[500px] flex justify-center items-center text-md rounded-xl">Something wrong</div>
          )}
        </div>
        <div className="sticky inset-x-0 bottom-0 z-40 h-12 bg-white">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={handlePrev} />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      {/* create Task Dialog */}
      <CreateTask />

      {/* update Task Dialog */}
      <UpdateTask />

      {/* delete Task Dialog */}
      <DeleteTask />
    </>
  );
};

export default TaskLists;
