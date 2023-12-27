import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = "http://localhost:3000";
// export const API_URL = "https://monkeys.co.il";
export const TOKEN_NAME = "ADMIN_TOKEN";

export const doApiGet = async (_url) => {
  try {
    let resp = await axios.get(_url, {
      headers: {
        "x-api-key": Cookies.get(TOKEN_NAME),
      },
    });
    return resp;
  } catch (err) {
    // Handle different types of errors
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with an error:", err.response.data);
    } else if (err.request) {
      // The request was made but no response was received
      console.error("No response received:", err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", err.message);
    }
    // Throw the error for further handling in the application
    throw err;
  }
};

// For Post, delete, put, patch
export const doApiMethod = async (_url, _method, _body = {}) => {
  try {
    console.log(_body);
    let resp = await axios({
      url: _url,
      method: _method,
      data: _body,
      headers: {
        "x-api-key": Cookies.get(TOKEN_NAME),
      },
    });
    return resp;
  } catch (err) {
    // Handle different types of errors
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with an error:", err.response.data);
    } else if (err.request) {
      // The request was made but no response was received
      console.error("No response received:", err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", err.message);
    }
    // Throw the error for further handling in the application
    throw err;
  }
};