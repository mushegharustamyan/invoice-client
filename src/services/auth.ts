import Cookies from "js-cookie";
import { client } from "./axios";

export const signIn = async (username: string, password: string) => {
  if (username === "" || password === "") {
    return;
  }

  const response = await client.post("/auth", { username, password });

  return response;
};

export const refresh = async () => {
  const token = Cookies.get("token")
  const response = await client.post("/refresh" , {} ,{headers: {token}})

  return response
}
