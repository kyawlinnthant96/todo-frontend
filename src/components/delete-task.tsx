import { useAppDispatch, useAppSelector } from '@/store/hook.ts';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { setDeleteTaskDialog, setUpdateTaskDialog } from '@/store/slices/dialog.slice.ts';
import { Button } from '@/components/ui/button.tsx';
import { useToast } from '@/components/ui/use-toast.ts';
import useDeleteTask from '@/api/task/useDeleteTask.ts';
import { setCurrentTask } from '@/store/slices/task.slice.ts';

const DeleteTask = () => {
  const { deleteTaskDialog } = useAppSelector((state) => state.dialog);
  const { currentTask } = useAppSelector((state) => state.task);
  const deleteTask = useDeleteTask();
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleDelete = () => {
    const payloadData = {
      taskId: currentTask._id,
    };

    deleteTask.mutate(payloadData, {
      onSuccess: () => {
        toast({
          title: 'Delete task successful!',
        });
        dispatch(setCurrentTask(null));
        dispatch(setDeleteTaskDialog(false));
      },
      onError: () => {
        toast({
          title: 'Delete Task Fail',
          variant: 'destructive',
        });
      },
    });
  };

  return (
    <Dialog open={deleteTaskDialog} onOpenChange={() => dispatch(setUpdateTaskDialog(false))}>
      <DialogContent className="flex flex-col rounded-md bg-white px-8 py-5 shadow-md">
        <DialogHeader>
          <DialogTitle>Delete Task</DialogTitle>
        </DialogHeader>
        <div className="">Are your sure you want to delete tasks</div>

        <DialogFooter className="mt-4 gap-x-3">
          <DialogClose asChild>
            <Button size="sm" variant="outline" className="px-6">
              Close
            </Button>
          </DialogClose>
          <Button
            isLoading={deleteTask.isPending}
            size="sm"
            className="px-6"
            variant="destructive"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTask;
