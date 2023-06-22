import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "54911f43d0f3c86adebfc4f67e1b3e66",
    language: "ko-KR",
  },
});

export default instance;
