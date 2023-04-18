import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./reducers/invoiceSlice";
import ticketsReducer from "./reducers/ticketSlice";
import createSagaMiddleware from "@redux-saga/core";
import { sagaWatcher } from "./midlewares/saga";

export const setupStore = () => {
  const saga = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      invoiceReducer,
      ticketsReducer,
    },
    middleware: [saga],
  });

  saga.run(sagaWatcher);

  return store;
};