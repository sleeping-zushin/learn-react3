
import App from "../App";
import { MedicineList } from "../pages/medicine";
import { HomePage } from "../pages/home";
import { createBrowserRouter } from "react-router-dom";
import { MedicineList2 } from "../pages/medicine2";
import { MedicineDetail } from "../pages/medicineDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/medicine",
    element: <MedicineList />,
  },
  {
    path: '/medicine2',
    element: <MedicineList2 />

  },
  {
    path: '/medicine2/:id',
    element: <MedicineDetail />
  },
    // /medicine?id=4
]);
