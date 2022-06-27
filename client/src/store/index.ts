import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth.slice"
import userReducer from "../slices/user.slice"
import appReducer from "../slices/app.slice"
import widgetsReducer from "../slices/widgets.slice"



export default configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    app:appReducer,
    widgets:widgetsReducer
  },
})