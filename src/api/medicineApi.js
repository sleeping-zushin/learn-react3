import axios from "axios";

const baseURL = "https://api-schoolhealth.purintech.id.vn/api/Medicine";
// https://api-schoolhealth.purintech.id.vn/api/Medicine/GetAllMedicines
const medicineApi = {
  getMedicines: async () => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage

    const response = await axios.get(baseURL + "/GetAllMedicines", {
      // Su dung ma dinh danh
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  },
  getMedicineById: async (id) => {
    const response = await axios.get(baseURL + "/GetMedicineById?id="+id);
    return response.data;
  },
  addMedicine: async (data) => {
    const response = await axios.post(baseURL + "/AddMedicine", data);

    console.log(response);
    return response.data;
  },
};
export default medicineApi;
