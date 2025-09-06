import { useState } from "react";

import "./App.css";
import { Header } from "./Header";
import { Title } from "./Title";
import { Movies } from "./Movies";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {

  return (
    <>
      <RouterProvider router={router} />,
    </>
  );
}

export default App;
