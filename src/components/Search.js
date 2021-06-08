import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherData } from "../redux/actions";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getWeatherData(value));
    setValue("");
  };

  return (
    <form className="form-inline mt-3 mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Enter city name and press search button"
        value={value}
        onChange={handleChange}
      ></input>
      <button type="submit" className="btn btn-primary mb-2">
        Search
      </button>
    </form>
  );
};

export default Search;
