import { getGuests, getGuest } from "./api";

const COHORT_CODE = "2604FTBETWEBFT";
const BASE_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT_CODE}`;

export async function getGuests() {
  const response = await fetch(`${BASE_URL}/guests`);
  const result = await response.json();

  return result.data;
}

export async function getGuest(id) {}
