import { tokenKey } from "../config";
import apiFetch from "./api-fetch"

export async function login(credentials){
  const {token, ...user} = await apiFetch("login", {
    body: credentials
  })

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "GET" });

  sessionStorage.removeItem(tokenKey);
}

export async function signup(newUser) {
  const { token, ...user } = await apiFetch("signup", { body: newUser });
  sessionStorage.setItem(tokenKey, token);
  return user;
}