import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const middlewares = [];

if (ProcessingInstruction.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
