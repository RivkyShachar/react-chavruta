import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { API_URL, TOKEN_NAME, doApiRequest } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';
import { handleUserInfo } from '../../utill/authService';


const Login = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nav = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSub = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    doApi(data);
  }

  const doApi = async (_data) => {
    try {
      const url = API_URL + '/auth/login';
      const data = await doApiRequest(url, "POST", _data);

      // Decode the token to access its properties
      if (data.data.token) {
        localStorage.setItem(TOKEN_NAME, data.data.token);
        const decodedToken = data.data.token;
        verifyToken(decodedToken);
      }

      await handleUserInfo(dispatch);
      if (localStorage.getItem("ROLE") === "admin") {
        nav("/admin");
      } else if (localStorage.getItem("ROLE") === "user") {
        nav("/user");
      } else {
        nav("/");
      }
    }
    catch (err) {
      console.log("err", err);
      setIsSubmitted(false);
      alert(err.response.data.msg);
    }
  }


  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <div className="row row-space">
              <div className="col-2">
                <div className="input-group">
                  <h2 className="title label ">Log in</h2>
                </div>
              </div>

              <form onSubmit={(e) => onSub(e)}>
                <div className="row row-space">
                  <div className="col-2">
                    <label className="label" htmlFor="email">
                      Email
                    </label>

                    <input
                      name="email"
                      className="input--style-4"
                      type="email"
                      id="email"
                    />

                  </div>
                  <div className="col-2">
                    <label className="label" htmlFor="password">
                      Password
                    </label>

                    <input
                      name="password"
                      className="input--style-4"
                      type="password"
                      id="password"
                    />
                  </div>

                  <div className="d-flex justify-content-center mt-5">
                    <button
                      type="submit"
                      className="btn btn-success col-4 mx-2"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
