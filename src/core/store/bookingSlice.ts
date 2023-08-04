import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../firebase";
import { RootState } from "./store";

export const bookingSlice = createSlice({
  name: "bookings",
  initialState: { data: [] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = bookingSlice.actions;

export const getBooking =
  (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const snapshot = await firestore.collection("bookings").get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };

export const createBooking =
  (data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("bookings").add(data);
      dispatch(getBooking());
    } catch (error) {
      console.log(error);
    }
  };

export const updateBooking =
  (id: string, data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("bookings").doc(id).update(data);
      dispatch(getBooking());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteBooking =
  (id: string): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("bookings").doc(id).delete();
      dispatch(getBooking());
    } catch (error) {
      console.log(error);
    }
  };
