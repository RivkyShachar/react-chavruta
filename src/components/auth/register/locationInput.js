import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/featchers/userSlice";
import "../../../css/main.css";
import { useSelector } from "react-redux";


const LocationInput = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.userSlice.location);

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
    dispatch(setLocation({ location: selectedOption.label }));
  };

  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <div className="row row-space">
              <div className="col">
                <h2 className="title label ">
                  We would like to know where do you live
                </h2>
                <form>
                  <div className="row mb-3 input-group">
                    <label htmlFor="state" className="lable">
                      Country:
                    </label>
                    <Select
                      className="input--style-4 location-select"
                      options={options}
                      value={value}
                      onChange={changeHandler}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
