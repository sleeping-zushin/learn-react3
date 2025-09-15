import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../layout/mainLayout";
import medicineApi from "../api/medicineApi";

export const MedicineDetail = () => {
  const { id } = useParams();
  const [ medicine, setMedicine] = useState(null);

  useEffect(
    () => {
      fetchMedicineById(id);
    }
  , [])

  const fetchMedicineById = async (id) => {
    const medicineDetail = await medicineApi.getMedicineById(id);

    console.log(medicineDetail)

    setMedicine(medicineDetail)
  }

  return (
    <MainLayout>
      <h1>Medicine Detail</h1>
      <p>ID: {id}</p>
      {
        medicine &&
        (
          <>
            <p>Medicine name: {medicine.medicinename}</p>
            <p>Medicine quantity: {medicine.quantity}</p>
          </>
        )
      }
    </MainLayout>
  );
};


