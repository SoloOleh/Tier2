// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import contactsReducer from "./contactsSlice";
// import filtersReducer from "./filtersSlice";
// import { combineReducers } from "redux";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
//   filters: filtersReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import contactsReducer from "./contactsSlice";
// import filtersReducer from "./filtersSlice";
// import { combineReducers } from "redux";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
//   filters: filtersReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Ignore these action types
//         ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
//         // Ignore these paths in the state
//         ignoredPaths: ["register", "rehydrate"],
//       },
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

// Конфіг для redux-persist (зберігаємо лише поле items у slice контактів)
const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

// Робимо persist для contactsReducer
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // необхідно для коректної роботи redux-persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
