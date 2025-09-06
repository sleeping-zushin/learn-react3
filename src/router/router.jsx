
import App from "../App";
import { MedicineList } from "../pages/medicine";
import { HomePage } from "../pages/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/medicine",
    element: <MedicineList />,
  },
]);
