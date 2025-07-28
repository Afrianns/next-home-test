"use server";

import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const baseURL = "https://test-fe.mysellerpintar.com/api";

export const GetAllArticles = async ({
  page = 1,
  search,
  category,
}: {
  page: number | undefined;
  search: string | undefined;
  category: string | undefined;
}) => {
  let url = `${baseURL}/articles`;
  try {
    const params = new URLSearchParams();

    if (page && page !== 1) params.set("page", page.toString());
    if (search) params.set("title", search);
    if (category) params.set("category", category);

    const fullUrl = `${url}?${params.toString()}`;

    const response = await axios.get(fullUrl);
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("there is an error");
  }
};

export const GetSingleArticle = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/articles/${id}`);
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    let err = error as AxiosError;
    if (err) {
      if (err.status == 404) {
        return redirect("/articles");
      } else {
        throw Error(`An error occur: ${err.message}`);
      }
    }
    throw new Error("there is an error");
  }
};

export const GetAllCategories = async (page: string = "1") => {
  try {
    const response = await axios.get(`${baseURL}/categories/?page=${page}`);
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    throw new Error("there is an error");
  }
};
