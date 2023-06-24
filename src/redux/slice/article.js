import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],

}

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addToDoList: (state, { payload }) => {
      state.list = payload
    },
    deleteToDoList: (state, { payload }) => {

      state.list = payload
    },
    changeTodoList: (state, { payload }) => {

      state.list = payload
    }
  }
})

export const { addToDoList, deleteToDoList, changeTodoList } = articleSlice.actions
export default articleSlice.reducer