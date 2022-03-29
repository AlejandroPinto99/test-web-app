import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { baseStoreApi } from "./storeApi";
import { configReducer } from "./reducers/config";
import  localStorage  from "redux-persist/es/storage";


const reducers = combineReducers({
  //auth: authReducer,
  config: configReducer,
  [baseStoreApi.reducerPath]: baseStoreApi.reducer,
});


const store = configureStore({
  reducer: reducers,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseStoreApi.middleware),
});


export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
