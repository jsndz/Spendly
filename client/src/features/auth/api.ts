import axios from "@/lib/axios";

const API = "http://localhost:8080/api/users";

export type LoginCredential = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  email: string;
  name: string;
};

export const LoginUser = async (data: LoginCredential) => {
  const res = await axios.post(`${API}/users`, data, {
    withCredentials: true,
  });
  return res.data;
};
