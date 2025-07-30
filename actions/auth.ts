"use server";

import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
interface loginType {
  username: string;
  password: string;
}

enum rolesEnum {
  USR = "User",
  ADM = "Admin",
}

interface registerType extends loginType {
  role: rolesEnum;
}

export const Login = async ({ username, password }: loginType) => {
  console.log(username, password);
  try {
    const response = await axios.post(
      "https://test-fe.mysellerpintar.com/api/auth/login",
      {
        username: username,
        password: password,
      }
    );

    if (response.status == 200) {
      return {
        status: response.status,
        result: response.data,
        message: "Successfully Login",
      };
    }
  } catch (error) {
    defaultError(error);
  }
};

export const Register = async ({ username, password, role }: registerType) => {
  console.log(username, password);

  try {
    const response = await axios.post(
      "https://test-fe.mysellerpintar.com/api/auth/register",
      {
        username: username,
        password: password,
        role: role,
      }
    );
    if (response.status == 200) {
      return response.status;
    }
  } catch (error) {
    defaultError(error);
  }
};

export const getUser = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  if (!cookie) return;

  try {
    const result = await axios.get(
      "https://test-fe.mysellerpintar.com/api/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      }
    );
    if (result.status == 200) {
      return result.data;
    }
  } catch (error) {
    defaultError(error);
  }
};

const defaultError = (error: any) => {
  let err = error as AxiosError;
  if (err) {
    throw new Error(`An error occur: ${err.message}`);
  }
  throw new Error("there is an error");
};
