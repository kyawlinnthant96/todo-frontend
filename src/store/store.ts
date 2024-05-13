import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '@/store/slices/auth.slice.ts';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import dialogSlice from '@/store/slices/dialog.slice.ts';
import taskSlice from '@/store/slices/task.slice.ts';

const rootPersitConfig = {
  key: 'root',
  storage,
  whitelist: ['authSlice'],
};

const rootReducers = combineReducers({
  auth: authSlice,
  dialog: dialogSlice,
  task: taskSlice,
});

const persistedReducer = persistReducer(rootPersitConfig, rootReducers);
export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
