import {combineReducers, configureStore} from '@reduxjs/toolkit';
import timeboxPlanReducer from './features/timeboxPlanSlice';
import counterReducer from './features/counterSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['counter', 'timeboxPlan'],
};

const timeboxPlanPersistConfig = {
  key: 'timeboxPlan',
  storage: storageSession,
};

const rootReducer = combineReducers({
  timeboxPlan: persistReducer(timeboxPlanPersistConfig, timeboxPlanReducer),
  counter: counterReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
