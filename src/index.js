import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { fetchLocations } from "./redux/store/locationsSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </DevSupport>
  </React.StrictMode>
);

store.dispatch(fetchLocations());
