import axios from "axios";

const baseURL = "https://api-schoolhealth.purintech.id.vn/api/User";
//https://api-schoolhealth.purintech.id.vn/api/User/user
export const userApi = {
  login: async (loginInfo) => {
    console.log("loginInfo to login: ", loginInfo);
    const response = axios
      .post(baseURL + "/user", loginInfo)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("response", response.data.token);
      });
  },
};
