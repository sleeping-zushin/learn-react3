import React, { useEffect, useState } from "react";
import medicineApi from "../api/medicineApi";
import { MovieAddForm } from "../components/MovieAddForm";
import { Button, Card } from "antd";
import { MainLayout } from "../layout/mainLayout";
import { useNavigate } from "react-router-dom";
const { Meta } = Card; // Thêm dòng này để lấy Meta từ Card của antd
export const MedicineList = () => {
  const [medicineList, setMedicineList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [staffName, setStaffName] = useState("");
  const [ listOrder, setListOrder ] = useState(""); // "", "asc", "desc"

  const navigate = useNavigate();
  
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

  const filteredList = keyword && keyword.length >0 ?
    medicineList.filter(x => x.medicinename.includes(keyword)) 
    : medicineList
  
  const filterListByStaff =  staffName && staffName.length >0 ?
    filteredList.filter(x => x.createdby && x.createdby.includes(staffName)) 
    : filteredList

    const orderedList = listOrder && listOrder === "" ?
      filterListByStaff
      : listOrder === "asc" ?
        filterListByStaff.sort((a,b) => a.medicinename.localeCompare(b.medicinename))
        : filterListByStaff.sort((a,b) => b.medicinename.localeCompare(a.medicinename))
    
  return (
    <MainLayout>
      <div>
        <h1>Medicine List</h1>

        <Button type="primary" onClick={fetchMedicines}>
          Fetch Medicines
        </Button>
        {/* medicine list */}
        <MovieAddForm />

        <div>
          <input
            type="text"
            placeholder="Enter keyword"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter staff name"
            onChange={(e) => {
              setStaffName(e.target.value);
            }}
          />

          <button onClick={() => {setListOrder("")}}>Reset order</button>
          <button onClick={() => {setListOrder("asc")}}>Order ascending</button>
          <button onClick={() => {setListOrder("desc")}}>Order descending</button>

        </div>
        {filterListByStaff &&
          filterListByStaff.map((medicine) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={medicine.poster} />}
              onClick={() => {
                navigate(`/medicine/${medicine.medicineid}`);
              }}
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
