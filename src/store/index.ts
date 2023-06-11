import { configureStore } from "@reduxjs/toolkit";
import { Action, combineReducers } from "redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkAction } from "redux-thunk";

// import app from './App';
import auth from "./Auth";
// import drive from './Drive';
// import layout from './Layout';

const reducers = combineReducers({
  auth,
  // add more reducer here
});

export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return middlewares;
  },
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export { store, persistor };
