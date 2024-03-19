import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/LOGIN/Login";
import Dashboard from "./Components/DASHBOARD/Dashboard";
import Registration from "./Components/Registration/Registration";
import Employ from "./Components/EMPLOY/Employ";


const routes = createBrowserRouter([
  { path: "", Component: Login },
  { path: "/dashboard", Component: Dashboard },
  { path: "/registration", Component: Registration },
  { path : '/contact' , Component : Employ}
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
