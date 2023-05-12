import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./reducers/invoiceSlice";
import ticketsReducer from "./reducers/ticketSlice";
import invoiceFilltersReducer from "./reducers/inVoicesFillterts";
import userReducer from "./reducers/userSlice";
import rolesReducer from "./reducers/roleSlice"
import createSagaMiddleware from "@redux-saga/core";
import { sagaWatcher } from "./midlewares/saga";

export const setupStore = () => {
  const saga = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      invoiceReducer,
      ticketsReducer,
      invoiceFilltersReducer,
      userReducer,
      rolesReducer
    },
    middleware: [saga],
  });

  saga.run(sagaWatcher);

  return store;
};
