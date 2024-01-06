import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { API_URL,TOKEN_NAME,doApiRequest } from '../../services/apiService';
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
        window.location.reload();
      } else if (localStorage.getItem("ROLE") === "user") {
        nav("/user");
        window.location.reload();
      } else {
        nav("/");
      }
    } 
    catch (err) {
      console.log("err",err);
      setIsSubmitted(false);
      alert(err.response.data.msg);
    }
  }


  return (
    <div className='container mt-5'>
      <div className='d-flex align-items-center justify-content-center'>
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form onSubmit={(e) => onSub(e)} className='w-50'>
          <div className='row mb-3'>
            <label htmlFor='email' className='col-sm-2 col-form-label'>
              Email:
            </label>
            <div className='col-sm-10'>
              <input name='email' className='form-control' type='email' id='email' />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='password' className='col-sm-2 col-form-label ps-1'>
              Password:
            </label>
            <div className='col-sm-10'>
              <input name='password' className='form-control' type='password' id='password' />
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <button type='submit' className='btn btn-success col-4 mx-2'>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
