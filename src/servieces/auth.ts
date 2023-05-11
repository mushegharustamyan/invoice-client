import Cookies from "js-cookie";
import { config } from "process";
import { client } from "./axios";

export const signIn = async (email: string, password: string) => {
  if (email === "" || password === "") {
    return;
  }

  const response = await client.post("/auth", { email, password });

  return response;
};

export const refresh = async () => {
  const token = Cookies.get("token")
  const response = await client.post("/refresh" , {} ,{headers: {token}})

  return response
}
