import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user.slice'
import pagination from './slices/pagination.slice'
import background from './slices/background.slice'

export default configureStore({
  reducer: {
    user,
    pagination,
    background
	}
})