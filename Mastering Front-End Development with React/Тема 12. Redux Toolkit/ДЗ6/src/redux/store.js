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

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReducer),
  filters: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Ignore these paths in the state
        ignoredPaths: ["register", "rehydrate"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
