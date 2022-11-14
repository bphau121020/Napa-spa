import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import drawerReducer from "./drawer/slice";
import formReducer from "./form/slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    drawer: drawerReducer,
    form: formReducer,
  },
});
