import axios from "axios";


export const API_URL = "http://localhost:3001";
// export const API_URL = "https://monkeys.co.il";
export const TOKEN_NAME = "ADMIN_TOKEN";

export const doApiRequest = async (_url, _method = 'GET', _body = {}) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      ...(localStorage.getItem(TOKEN_NAME) && { 'x-api-key': localStorage[TOKEN_NAME] }),
    };

    let resp;

    if (_method.toUpperCase() === 'GET') {
      resp = await axios.get(_url, { headers });
    } else {
      resp = await axios({
        url: _url,
        method: _method,
        data: _body,
        headers,
      });
    }

    return resp;
  } catch (err) {
    if (err.status === 401) {
      alert("Need to navigate to blblb");
    }

    // Handle different types of errors
    if (err.response) {
      console.error("Server responded with an error:", err.response.data);
    } else if (err.request) {
      console.error("No response received:", err.request);
    } else {
      console.error("Error setting up the request:", err.message);
    }

    // Throw the error for further handling in the application
    throw err;
  }
};



export const verifyToken = async (token) => {
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
    if (data.data) {
      localStorage.setItem('USER_ID', data.data._id);
      localStorage.setItem('ROLE', data.data.role);
    }
    return data.data;
  } catch (error) {
    // Handle fetch or other errors
    console.error(error.message);
  }
}