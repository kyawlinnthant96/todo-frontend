import { Task } from '@/types/task';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TaskSliceProps {
  currentTask: Task | null;
}

const initialState: TaskSliceProps = {
  currentTask: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setCurrentTask: (state, action: PayloadAction<Task>) => {
      state.currentTask = action.payload;
    },
  },
});

export const { setCurrentTask } = taskSlice.actions;

export default taskSlice.reducer;
