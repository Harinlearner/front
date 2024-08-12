import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from "./Users";
import CreateUsers from "./CreateUsers";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Users/>,
  },
  {
    path: "/creating",
    element: <CreateUsers/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);