import { configureStore } from '@reduxjs/toolkit'
import UserLoginReducer from './slices'
import CodeReducer from './codeSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistedUserReducer = persistReducer(persistConfig, UserLoginReducer);


 export const store = configureStore({
  reducer: {
    UserLogin: persistedUserReducer,
    code : CodeReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),

})


export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch