import { configureStore } from '@reduxjs/toolkit';
// імпорт для ігнору деяків типів екшенів 3-11 строки
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { clicksReducer } from './clicksSlice';

export const store = configureStore({
  reducer: {
    clicks: clicksReducer,
  },
  // проміжкові умови для ігнору деяків типів екшенів 20-25 строки
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// persistStore відслідковує зміну state та записує в localStorage
