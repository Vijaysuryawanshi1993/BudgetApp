import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
const persistConfig = {
  key: "CoCRN",
  storage: AsyncStorage,
  // stateReconciler: autoMergeLevel2,
  whitelist: ["persistedReducer"], // see "Merge Process" section for details.
};

export const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
export default store;
// persistor.purge();