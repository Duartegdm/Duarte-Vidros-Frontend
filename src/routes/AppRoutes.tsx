import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";
import "../main.css";
import Home from "../pages/Home/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);