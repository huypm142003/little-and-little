import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../firebase";
import { RootState } from "./store";

export const eventSlice = createSlice({
  name: "events",
  initialState: { data: [], dataById: {} },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDataById: (state, action) => {
      state.dataById = action.payload;
    },
  },
});

export const { setData, setDataById } = eventSlice.actions;

export const getEvent =
  (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const snapshot = await firestore
        .collection("events")
        .orderBy("name", "asc")
        .get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };

export const createEvent =
  (data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("events").add(data);
      dispatch(getEvent());
    } catch (error) {
      console.log(error);
    }
  };

export const updateEvent =
  (id: string, data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("events").doc(id).update(data);
      dispatch(getEvent());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteEvent =
  (id: string): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("events").doc(id).delete();
      dispatch(getEvent());
    } catch (error) {
      console.log(error);
    }
  };
