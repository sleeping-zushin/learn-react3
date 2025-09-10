import React, { useEffect, useState } from "react";
import medicineApi from "../api/medicineApi";
import { MovieAddForm } from "../components/MovieAddForm";
import { Button, Card } from "antd";
import { MainLayout } from "../layout/mainLayout";
const { Meta } = Card; // Thêm dòng này để lấy Meta từ Card của antd
export const MedicineList = () => {
  const [medicineList, setMedicineList] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const data = await medicineApi.getMedicines();
      console.log("Fetched medicines:", data);
      setMedicineList(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };
  return (
    <MainLayout>
      <div>
        <h1>Medicine List</h1>

        <Button type="primary" onClick={fetchMedicines}>
          Fetch Medicines
        </Button>
        {/* medicine list */}
        <MovieAddForm />

        {medicineList &&
          medicineList.map((medicine) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={medicine.poster} />}
            >
              <Meta
                title={medicine.medicinename}
                description={medicine.createdby}
              />
            </Card>
          ))}
      </div>
    </MainLayout>
  );
};
