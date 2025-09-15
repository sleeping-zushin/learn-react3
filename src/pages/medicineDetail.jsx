import React from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../layout/mainLayout";

export const MedicineDetail = () => {
  const { id } = useParams();

  return (
    <MainLayout>
      <h1>Medicine Detail</h1>
      <p>ID: {id}</p>
    </MainLayout>
  );
};


