"use server";

import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
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
  search?: string | undefined;
}) => {
  let url = `${baseURL}/categories`;
  try {
    const params = new URLSearchParams();

    if (page && page !== 1) params.set("page", page.toString());
    // if (search) params.set("search", search);

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

// Create Article

export const CreateArticle = async (data: {
  title: string;
  category: string;
  content: string;
  imageUrl: string;
}) => {
  const cookie = await getCookies();
  let url = `${baseURL}/articles`;

  if (!cookie) return;

  if (data.title && data.category && data.content && data.imageUrl) {
    try {
      const response = await axios.post(
        url,
        {
          title: data.title,
          categoryId: data.category,
          content: data.content,
          imageUrl: data.imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
        }
      );
      if (response.status == 200) {
        console.log(response);
        return response.data;
      }
    } catch (error) {
      let err = error as AxiosError;
      if (err) {
        if (err.status == 401) {
          return redirect("/articles");
        }
        throw Error(`An error occur: ${err.message}`);
      }
      throw new Error("there is an error");
    }
  }
};

export const updateArticle = async (data: {
  id: string;
  title: string;
  category: string;
  content: string;
  imageUrl: string;
}) => {
  const cookie = await getCookies();

  if (!cookie) return;

  if (data.title || data.category || data.content || data.imageUrl || data.id) {
    let url = `${baseURL}/articles/${data.id}`;
    try {
      const response = await axios.put(
        url,
        {
          title: data.title,
          categoryId: data.category,
          content: data.content,
          imageUrl: data.imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
        }
      );
      if (response.status == 200) {
        console.log(response);
        return response.data;
      }
    } catch (error) {
      let err = error as AxiosError;
      if (err) {
        if (err.status == 401) {
          return redirect("/articles");
        }
        throw Error(`An error occur: ${err.message}`);
      }
      throw new Error("there is an error");
    }
  }
};

export const DeleteArticle = async (id: string) => {
  const cookie = await getCookies();

  if (!cookie || !id) return;
  try {
    const response = await axios.delete(`${baseURL}/articles/${id}`, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    if (response.status == 200) {
      return 200;
    }
  } catch (error) {
    let err = error as AxiosError;
    if (err) {
      throw new Error(`An error occur: ${err.message}`);
    }
    throw new Error("there is an error");
  }
};

// Upload file image

export const UploadImageArticle = async (file: File) => {
  let url = `${baseURL}/upload`;
  const cookie = await getCookies();

  if (!cookie && !file) return;

  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    if (response.status == 200) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    let err = error as AxiosError;
    if (err) {
      if (err.status == 401 || err.status == 403) {
        return redirect("/articles");
      }
      throw new Error(`An error occur: ${err.message}`);
    }
    throw new Error("there is an error");
  }
};

const getCookies = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  return cookie;
};
