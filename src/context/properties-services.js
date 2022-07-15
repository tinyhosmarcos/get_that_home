import { tokenKey } from "../config";
import apiFetch from "./api-fetch"

export async function getProperties(){
  const data = await apiFetch("property")

  return data;
}