import { useAppDispatch, useAppSelector } from '@/store/hook.ts';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { setCreateTaskDialog } from '@/store/slices/dialog.slice.ts';
import { Button } from '@/components/ui/button.tsx';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { createTaskValidationSchema } from '@/lib/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import useCreateTask from '@/api/task/useCreateTask.ts';
import { useToast } from '@/components/ui/use-toast.ts';

const CreateTask = () => {
  const { createTaskDialog } = useAppSelector((state) => state.dialog);
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const createTask = useCreateTask();
  const form = useForm<z.infer<typeof createTaskValidationSchema>>({
    resolver: zodResolver(createTaskValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      status: 'open',
    },
  });

  const onSubmit = (values: z.infer<typeof createTaskValidationSchema>) => {
    const payloadData = {
      title: values.title,
      description: values.description,
      status: values.status,
    };

    createTask.mutate(payloadData, {
      onSuccess: () => {
        toast({
          title: 'Create task successful!',
        });
        form.reset();
        dispatch(setCreateTaskDialog(false));
      },
      onError: (error) => {
        toast({
          title: 'Create Task Fail',
          variant: 'destructive',
          description: error?.response?.data?.message,
        });
      },
    });
  };

  return (
    <Dialog open={createTaskDialog} onOpenChange={() => dispatch(setCreateTaskDialog(false))}>
      <DialogContent className="flex flex-col rounded-md bg-white px-8 py-5 shadow-md">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
          <div className="relative flex flex-col">
            <label className="mb-1" htmlFor="">
              Title
            </label>
            <Input type="text" {...form.register('title')} />
            {form.formState.errors.title && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.title.message}</p>
            )}
          </div>
          <div className="relative flex flex-col">
            <label className="mb-1" htmlFor="">
              Description
            </label>
            <Input type="text" {...form.register('description')} />
            {form.formState.errors.description && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.description.message}</p>
            )}
          </div>
          <div className="relative flex flex-col">
            <label className="mb-1" htmlFor="">
              Task Status
            </label>
            <Controller
              control={form.control}
              name="status"
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="select task status" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in_progress">Progress</SelectItem>
                    <SelectItem value="done">Complete</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {form.formState.errors.status && (
              <p className="mt-1 text-sm text-red-500">{form.formState.errors.status.message}</p>
            )}
          </div>

          <DialogFooter className="mt-4 gap-x-3">
            <DialogClose asChild>
              <Button onClick={() => form.reset()} size="sm" className="px-6">
                Close
              </Button>
            </DialogClose>
            <Button isLoading={createTask.isPending} size="sm" className="px-6" variant="outline" type="submit">
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTask;
