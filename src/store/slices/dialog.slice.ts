import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogSliceProps {
  createTaskDialog: boolean;
  updateTaskDialog: boolean;
  deleteTaskDialog: boolean;
}

const initialState: DialogSliceProps = {
  createTaskDialog: false,
  updateTaskDialog: false,
  deleteTaskDialog: false,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setCreateTaskDialog: (state, action: PayloadAction<boolean>) => {
      state.createTaskDialog = action.payload;
    },
    setUpdateTaskDialog: (state, action: PayloadAction<boolean>) => {
      state.updateTaskDialog = action.payload;
    },
    setDeleteTaskDialog: (state, action: PayloadAction<boolean>) => {
      state.deleteTaskDialog = action.payload;
    },
  },
});

export const { setCreateTaskDialog, setDeleteTaskDialog, setUpdateTaskDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
