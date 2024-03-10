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
    const res = await fetch(
      "https://sohs-web-app.vercel.app/api/auth/register",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(FormData),
      }
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Error Coming in register  (Services )  => " + error);
  }
};

export const fetchWorkers = async () => {
  try {
    const apiUrl = config.apiUrl + "/workers"; // Replace this with your actual API route URL
    const response = await axios.get(apiUrl);
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
