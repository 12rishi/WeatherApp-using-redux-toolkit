import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleCityData } from "../store/weatherSlice";

const Navbar = () => {
  const inputval = useRef();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const city = inputval.current.value;
    dispatch(fetchSingleCityData(city));
    inputval.current.value = "";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container d-flex">
        <a className="navbar-brand" href="#">
          MeteoMaster
        </a>
        <form className="form-inline" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={inputval}
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
