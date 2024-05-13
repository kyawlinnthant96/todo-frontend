import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { PencilIcon, Trash } from 'lucide-react';
import { Task } from '@/types/task';
import { useAppDispatch } from '@/store/hook.ts';
import { setCurrentTask } from '@/store/slices/task.slice.ts';
import { setDeleteTaskDialog, setUpdateTaskDialog } from '@/store/slices/dialog.slice.ts';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div key={task._id} className="p-4 gap-6 border-2 flex justify-between items-start border-gray-200 rounded-xl">
      <div className="w-32">
        <Select defaultValue={task.status}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in_progress">On Progress</SelectItem>
              <SelectItem value="done">Complete</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold tracking-tight">{task.title}</h3>
        <p className="text-sm font-normal">{task.description}</p>
      </div>
      <div className="flex items-center gap-x-6">
        <PencilIcon
          onClick={() => {
            dispatch(setCurrentTask(task));
            dispatch(setUpdateTaskDialog(true));
          }}
          className="w-5 h-5 cursor-pointer text-gray-400"
        />
        <Trash
          onClick={() => {
            dispatch(setCurrentTask(task));
            dispatch(setDeleteTaskDialog(true));
          }}
          className="w-5 h-5 cursor-pointer text-gray-400"
        />
      </div>
    </div>
  );
};

export default TaskCard;
