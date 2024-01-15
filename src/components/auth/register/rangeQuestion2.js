import React from 'react';
import SingleRangeQ from './singleRangeQ';
import "../../../css/main.css";
import translate from "../../../utill/translator";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { handleUserInfo } from '../../../utill/authService';
import { API_URL, doApiRequest, TOKEN_NAME } from '../../../services/apiService';
import { verifyToken } from '../../../services/apiService';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

const RangeQuestion = () => {
  const language = useSelector((myStore) => myStore.languageSlice.language);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  const user = useSelector((myStore) => myStore.userSlice.user);
  const userWithoutVerifyPassword = { ...user };
  delete userWithoutVerifyPassword.verifyPassword;
  const handleBackClick = () => {
    nav("/signUp/rangeQ1")
  }
  const handleSubmitButtonClick = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit = async () => {
    try {
      const token = localStorage.getItem(TOKEN_NAME);
      const url = token
        ? API_URL + `/users/${localStorage.getItem("USER_ID")}`
        : API_URL + "/auth/register";

      const method = token ? 'PUT' : 'POST';
      let data;

      if (token) {
        delete userWithoutVerifyPassword._id;
        delete userWithoutVerifyPassword.dateCreated;
        delete userWithoutVerifyPassword.role;
        delete userWithoutVerifyPassword.__v;
        data = await doApiRequest(url, method, userWithoutVerifyPassword);
      } else {
        data = await doApiRequest(url, method, userWithoutVerifyPassword);
      }

      if (data.status === 201) {
        nav("/user");
        window.location.reload();
      } else if (data.status === 400) {
        console.log("status 400");
      }

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
    } catch (error) {
    }
  };
  return (
    <div className="d-flex justify-content-evenly mt-4 position-relative">
      <div className="page-wrapper p-t-130 p-b-100 font-poppins container-register">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <div className="row row-space">
                <div className="col m-2">
                  <h2 className="title label">{translate('register.topicsQuestion', language)}</h2>
                  <SingleRangeQ
                    title={translate('register.educationRangeQuestion', language)}
                    questionNumber="3"

                  />
                  <SingleRangeQ
                    title={translate('register.friendListRangeQuestion', language)}
                    questionNumber="4"

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-50 start-0 translate-middle me-5 z-1">
        <button
          type="button"
          className=" btn-back"
          onClick={handleBackClick}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn-continue "
            onClick={handleSubmitButtonClick}
          >
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeQuestion;
