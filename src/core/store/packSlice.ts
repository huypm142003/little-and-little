import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../firebase";
import { RootState } from "./store";

export const packSlice = createSlice({
  name: "packs",
  initialState: { data: [] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = packSlice.actions;

export const getPack =
  (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const snapshot = await firestore.collection("packs").get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };

export const createPack =
  (data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("packs").add(data);
      dispatch(getPack());
    } catch (error) {
      console.log(error);
    }
  };

export const updatePack =
  (id: string, data: any): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("packs").doc(id).update(data);
      dispatch(getPack());
    } catch (error) {
      console.log(error);
    }
  };

export const deletePack =
  (id: string): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore.collection("packs").doc(id).delete();
      dispatch(getPack());
    } catch (error) {
      console.log(error);
    }
  };
