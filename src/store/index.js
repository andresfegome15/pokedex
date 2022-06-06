import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user.slice'
import pagination from './slices/pagination.slice'
import background from './slices/background.slice'
import header1 from './slices/header1.slice'
import header2 from './slices/header2.slice'
import column  from './slices/column.slice'

export default configureStore({
  reducer: {
    user,
    pagination,
    background,
    header1,
    header2,
    column
	}
})