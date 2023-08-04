import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contactSlice";
import { eventSlice } from "./eventSlice";
import { packSlice } from "./packSlice";
import { bookingSlice } from "./bookingSlice";

export const store = configureStore({
  reducer: {
    firestoreContact: contactSlice.reducer,
    firestoreEvent: eventSlice.reducer,
    firestorePack: packSlice.reducer,
    firestoreBooking: bookingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
