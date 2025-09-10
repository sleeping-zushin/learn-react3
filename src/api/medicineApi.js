import axios from "axios";

const baseURL = "https://api-schoolhealth.purintech.id.vn/api/Medicine";
const medicineApi = {
  getMedicines: async () => {
    const response = await axios.get(baseURL + "/GetAllMedicines");
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
