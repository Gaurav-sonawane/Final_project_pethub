import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import rootReducer from "./rootreducer";
export default function configureStore() {
  return createStore(rootReducer);
}
