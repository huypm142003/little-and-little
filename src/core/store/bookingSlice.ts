import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../firebase";
import { RootState } from "./store";

export const bookingSlice = createSlice({
  name: "bookings",
  initialState: { data: [], dataByBookingId: {} },
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

export const getBookingByBookingId =
  (bookingId: string): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const snapshot = await firestore
        .collection("bookings")
        .where("bookingId", "==", bookingId)
        .get();
      const data = {
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data(),
      }
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
