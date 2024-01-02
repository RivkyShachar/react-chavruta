import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = "http://localhost:3001";
// export const API_URL = "https://monkeys.co.il";
export const TOKEN_NAME = "ADMIN_TOKEN";

export const doApiGet = async (_url) => {
  try {
    let resp = await axios.get(_url, {
      headers: {
        // "x-api-key": Cookies.get(TOKEN_NAME),
        "x-api-key": localStorage.getItem(TOKEN_NAME),
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

export const doApiPost = async (_url, _body) => {
  try {
    let resp = await axios.post(_url, _body, {
      headers: {
        "x-api-key": localStorage.getItem(TOKEN_NAME),
        'Content-Type': 'application/json', // Set content type as JSON for POST requests
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
                         "x-api-key":localStorage[TOKEN_NAME]

        // "x-api-key": Cookies.get(TOKEN_NAME),
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
export const doApiMethodSignUpLogin = async (_url, _method, _body = {}) => {
    try {
      console.log(_body);
        let resp = await axios({
            method: _method,
            url: _url,
            data: _body,  // Send the body directly without stringifying
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers required for authentication
                // For example, if using a token: 'Authorization': `Bearer ${yourToken}`
            }
        });
        console.log(resp);
        return resp;
    } catch (err) {       
        throw err;
    }
};


                // "x-api-key":localStorage[TOKEN_NAME]

// export const doApiTukenGet = async (_url) => {
//     try {
//         let resp = await axios.get(_url, {
//             headers: {
//                 // 'Content-Type': 'application/json',
//                 "x-api-key": localStorage.getItem(TOKEN_NAME)
//             }
//         })
//         return resp;
//     } catch (err) {
//         throw err;
//     }
// }




export const verifyToken= async(token) => {
  try {
    const response = await fetch(`${API_URL}/api/verifyToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    // Handle the data returned from the server, e.g., update state or perform other actions.
    console.log(data);
    return data.data;
  } catch (error) {
    // Handle fetch or other errors
    console.error(error.message);
  }
}