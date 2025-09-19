import axios from "axios";

const baseURL = "https://api-schoolhealth.purintech.id.vn/api/User";
export const userApi = {
  login: async (loginInfo) => {
    console.log("loginInfo to login: ", loginInfo);
    const response = axios
      .post(baseURL + "/user", loginInfo)
      .then((response) => {
        console.log('response',response.data.token);
      });
  },
};
