import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./reducers/invoiceSlice";
import createSagaMiddleware from "@redux-saga/core";
import { sagaWatcher } from "./midlewares/saga";

export const setupStore = () => {
  const saga = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      invoiceReducer,
    },
    middleware: [saga],
  });

  saga.run(sagaWatcher);

  return store;
};
