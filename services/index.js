import config from "@/utils/config";
import axios from "axios";
import { signIn } from "next-auth/react";
import { Router } from "next/router";

export const logged_in = async (FormData) => {
  console.log(FormData);
  const { email, password } = FormData;
  const status = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  });
  return status;
};

export const register_now = async (FormData) => {
  try {
    const res = await fetch(config.apiUrl + "/auth/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(FormData),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Error Coming in register  (Services )  => " + error);
  }
};

export const fetchWorkers = async (id, searchParams) => {
  try {
    let apiUrl = config.apiUrl + "/workers";
    if (id) apiUrl += "?fin=" + id;
    const response = await axios.get(apiUrl, { params: searchParams });
    if (response.data.success) {
      const data = response.data.data;
      return data;
    } else {
      console.error("Error:", response.data.error);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const fetchTests = async (searchParams) => {
  try {
    const apiUrl = config.apiUrl + "/tests";
    const response = await axios.get(apiUrl, { params: searchParams });
    if (response.data.success) {
      const data = response.data.data;
      return data;
    } else {
      console.error("Error:", response.data.error);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
