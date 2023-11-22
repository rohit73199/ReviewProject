import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
const Routes =createBrowserRouter([
      {path: "/",element: <Home />},
      {path: "/Login", element:<Login />},
])
export default Routes