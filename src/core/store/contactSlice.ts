import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../firebase";
import { RootState } from "./store";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: { data: [] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = contactSlice.actions;

export const getContact =
  (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const snapshot = await firestore.collection("contacts").get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };

export const createContact =
  (data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("contacts").add(data);
      dispatch(getContact());
    } catch (error) {
      console.log(error);
    }
  };

export const updateContact =
  (id: string, data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("contacts").doc(id).update(data);
      dispatch(getContact());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteContact =
  (id: string): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("contacts").doc(id).delete();
      dispatch(getContact());
    } catch (error) {
      console.log(error);
    }
  };
