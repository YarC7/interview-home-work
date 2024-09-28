// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import { api } from "./apiSlice";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const rootReducer = {
//   [api.reducerPath]: api.reducer,
// };
// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers(rootReducer)
// );
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(api.middleware),
// });

// // Persistor
// export const persistor = persistStore(store);
// // export default store;
// export default store;
