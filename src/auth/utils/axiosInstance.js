import { useState, useEffect } from "react";
import axios from "axios";
import { rootUrl } from "./rootUrl";
const baseURL = `${rootUrl}/api/accounts/`;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 30 * 1000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});


export const useFetchHook = (relativeUrl) => {
  const [results, setResults] = useState(null);
  const url = `${rootUrl}/api/${relativeUrl}`;
  useEffect(() => {
    axiosInstance
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log("Got error in fetching...", err);
      });
  }, [relativeUrl,url]);

  return results;
};