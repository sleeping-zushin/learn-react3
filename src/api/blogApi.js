import axios from "axios";

const baseURL = 'https://api-schoolhealth.purintech.id.vn/api/Blog';
const blogApi = {
  getBlogs: async () => {
    const response = await axios.get(baseURL + "/getAll");
    return response.data;
  }
};
export default blogApi;
