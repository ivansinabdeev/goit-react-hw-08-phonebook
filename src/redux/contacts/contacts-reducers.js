import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
  fetchContactsSuccess,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
