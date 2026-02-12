import axios from "@/lib/axios";

const API = "http://localhost:8080/api/users";

export type LoginCredential = {
  email: string;
  password: string;
};

export type UserDto = {
  id: number;
  name: string;
  email: string;
};

export type LoginResponse = {
  user: UserDto;
};

export type SignUpCredential = {
  name: string;
  email: string;
  password: string;
};

export type SignupResponse = {
  user: UserDto;
};

export const LoginUser = async (data: LoginCredential) => {
  const res = await axios.post(`${API}/login`, data, {
    withCredentials: true,
  });
  console.log(res.data);
  
  return res.data;
};

export const SignupUser = async (data: SignUpCredential) => {
  const res = await axios.post(`${API}/signup`, data, {
    withCredentials: true,
  });
  return res.data;
};
