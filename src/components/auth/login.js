import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL, TOKEN_NAME, doApiRequest } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';
import { handleUserInfo } from '../../utill/authService';
import "../../css/main.css";
import translate from '../../utill/translator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();
  const language = useSelector((myStore) => myStore.languageSlice.language);

  useEffect(()=>{
    alert(
        "🎉 Welcome! You can log in and explore the app using these credentials:\n\n" +
        "✨ Username: gilad@gmail.com\n" +
        "✨ Password: Gilad1234\n\n" +
        "🌟 Note: Since we're using a free server, it might take a few minutes to wake up if it's been idle. Grab a coffee ☕, and we'll be ready in no time!"
      );          
  },[])

  const onSub = async (data) => {
    setIsSubmitted(true);
    setLoading(true); // Start loading
    try {
      const url = API_URL + '/auth/login';
      const responseData = await doApiRequest(url, "POST", data);

      // Decode the token to access its properties
      if (responseData.data.token) {
        localStorage.setItem(TOKEN_NAME, responseData.data.token);
        const decodedToken = responseData.data.token;
        verifyToken(decodedToken);
      }

      await handleUserInfo(dispatch);
      if (localStorage.getItem("ROLE") === "admin") {
        nav("/admin");
        window.location.reload();
      } else if (localStorage.getItem("ROLE") === "user") {
        nav("/user");
        window.location.reload();
      } else {
        nav("/");
      }
    } catch (err) {
      alert("Incorrect email or password");
      setIsSubmitted(false);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="page-wrapper bg-gra-02 p-b-100 font-poppins container-register">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <div className="row row-space">
              <form onSubmit={handleSubmit(onSub)}>
                <div className="col-12 my-1 text-center">
                  <h2 className="title label font-weight-bold">{translate('login.login', language)}</h2>
                </div>
                <div className="col-12 my-1 px-4">
                  <label className="label" htmlFor="email">
                    {translate('contact.email', language)}
                  </label>
                  <input
                    {...register("email", { required: true })}
                    className={`input--style-4 ${errors.email && "input-error"}`}
                    type="email"
                    id="email"
                  />
                  {errors.email && <p className="error-message text-danger">*Email is required</p>}
                </div>
                <div className="col-12 my-1 px-4">
                  <label className="label" htmlFor="password">
                    {translate('user.password', language)}
                  </label>
                  <div className="password-input-container">
                    <input
                      {...register("password", { required: true })}
                      className={`input--style-4 col-11 ${errors.password && "input-error"}`}
                      type={showPassword ? "text" : "password"}
                      id="password"
                    />
                    <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                      <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </span>
                  </div>
                  {errors.password && <p className="error-message text-danger">*Password is required</p>}
                </div>
                <div className="col-12 d-flex justify-content-center mt-5">
                  <button
                    type="submit"
                    className="btn btn-register"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : translate('login.login', language)} {/* Show loading */}
                  </button>
                </div>
                {loading && (
                  <div className="col-12 text-center mt-3">
                    <p>Loading, please wait...</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

