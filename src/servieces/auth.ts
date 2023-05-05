import { client } from "./axios";

export const signIn = async (email: string, password: string) => {
  if (email === "" || password === "") {
    return;
  }

  const response = await client.post("/auth", { email, password });

  return response.data.token;
};
