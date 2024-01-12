import {combineReducers , configureStore,} from "@reduxjs/toolkit";
import userSliceReducer from "./user/userSlice";
import { persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({user: userSliceReducer});
const persistConfig = {
      key: "root",
      version: 1,
      storage,

}
const persistReduce = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
      reducer: persistReduce
      

});

export const  persistor = persistStore(store);