import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialcounterstate = { counter: 0, showCounter: true };

const counterslice = createSlice({
  name: "counter",
  initialState: initialcounterstate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    togglecounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authslice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterslice.reducer, auth: authslice.reducer },
});

export const counterActions = counterslice.actions;
export const authsliceActions = authslice.actions;

export default store;
