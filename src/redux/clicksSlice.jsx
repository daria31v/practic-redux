import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = { value: 0, a: 1, b: 2 };

const clicksSlice = createSlice({
  name: 'clicks',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  whitelist: ['value', 'a'],
};

// без уточнення збергаються усі данні
// blacklist - не зберігати в localStorage те що вказано в переліку
// whitelist - зберегти в localStorage тільки те що вказано в переліку

// 'root' просто назва ключа, може бути такою ж як назва slice

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;

// Selectors
export const getClicks = state => state.clicks.value;