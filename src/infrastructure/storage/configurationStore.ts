// Vendor
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Src
import authReducer from '@infrastructure/reducer/authReducer/authReducer';
import rootReducer from '@infrastructure/reducer/rootReducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistAuth = {
  key: 'auth',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistReducer: persistedReducer,
    authReducer: persistReducer(persistAuth, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
});

export const persist = persistStore(store);
