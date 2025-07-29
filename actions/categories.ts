"use server";

import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const baseURL = "https://test-fe.mysellerpintar.com/api";

export const GetSingleCategory = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/categories/${id}`);
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    let err = error as AxiosError;
    if (err) {
      console.log(err);
      throw Error(`An error occur: ${err.message}`);
    }
    throw new Error("there is an error");
  }
};

export const createCategory = async (name: string) => {
  const cookie = await getCookies();

  if (!cookie || !name) return;
  try {
    const response = await axios.post(
      `${baseURL}/categories`,
      {
        name: name,
      },
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );
    return response.status;
  } catch (error) {
    defaultErrorMessage(error);
  }
};

export const editCategory = async (id: string, name: string) => {
  const cookie = await getCookies();

  console.log(cookie, name, id);
  if (!cookie || !name || !id) return;

  try {
    const response = await axios.put(
      `${baseURL}/categories/${id}`,
      {
        name: name,
      },
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );
    console.log(response.status);
    return response.status;
  } catch (error) {
    defaultErrorMessage(error);
  }
};

export const deleteCategory = async (id: string) => {
  const cookie = await getCookies();

  if (!cookie || !id) return;

  try {
    const response = await axios.delete(`${baseURL}/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    if (response.status == 200) {
      const cookieStore = await cookies();
      cookieStore.delete("session");
      return 200;
    }
  } catch (error) {
    defaultErrorMessage(error);
  }
};

const defaultErrorMessage = (error: any) => {
  let err = error as AxiosError;
  if (err) {
    throw Error(`An error occur: ${err.message}`);
  }
  throw new Error("there is an error");
};

const getCookies = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  return cookie;
};
