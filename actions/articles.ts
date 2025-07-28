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

    const fullUrl = `${url}?limit=1&${params.toString()}`;

    const response = await axios.get(fullUrl);
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    let err = error as AxiosError;
    if (err) {
      throw Error(`An error occur: ${err.message}`);
    }
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
        console.log(err);
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
    let err = error as AxiosError;
    if (err) {
      throw Error(`An error occur: ${err.message}`);
    }
    throw new Error("there is an error");
  }
};

export const GetCategories = async ({
  page = 1,
  search,
}: {
  page: number | undefined;
  search: string | undefined;
}) => {
  let url = `${baseURL}/categories`;
  try {
    const params = new URLSearchParams();

    if (page && page !== 1) params.set("page", page.toString());
    if (search) params.set("search", search);

    const fullUrl = `${url}?${params.toString()}`;

    const response = await axios.get(fullUrl);
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    let err = error as AxiosError;
    if (err) {
      if (err.status == 500) {
        return redirect("/dashboard/categories");
      }
      throw Error(`An error occur: ${err.message}`);
    }
    throw new Error("there is an error");
  }
};

const callError = (error: any, route: string) => {
  let err = error as AxiosError;
  if (err) {
    if (err.status == 404) {
      return redirect(route);
    } else {
      console.log(err);
      throw Error(`An error occur: ${err.message}`);
    }
  }
  throw new Error("there is an error");
};
