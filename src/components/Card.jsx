import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/weatherSlice";

import { BsWind } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { CiCloud } from "react-icons/ci";
import Spinner from "./Spinner";

const Card = () => {
  const { weatherData, city } = useSelector((store) => store.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      {weatherData ? (
        <div className="container cardContainer">
          <div className="card weather-card">
            <div className="card-body">
              <h5 className="card-title">
                Weather Information of {city ? city.toUpperCase() : "punjab"}
              </h5>
              <p className="card-text">
                <strong>
                  <CiCloud />
                  Cloud Percentage:
                </strong>{" "}
                {weatherData.cloud_pct}%
              </p>
              <p className="card-text">
                <strong>
                  <FaTemperatureHigh />
                  Temperature:
                </strong>
                {weatherData.temp}°C`
              </p>

              <p className="card-text">
                <strong>
                  <WiHumidity />
                  Humidity:
                </strong>{" "}
                {weatherData.humidity}%
              </p>
              <p className="card-text">
                <strong>
                  <FaTemperatureArrowDown />
                  Min Temperature:
                </strong>{" "}
                {weatherData.min_temp}°C
              </p>
              <p className="card-text">
                <strong>
                  <FaTemperatureArrowUp />
                  Max Temperature:
                </strong>{" "}
                {weatherData.max_temp}°C
              </p>
              <p className="card-text">
                <strong>
                  <SlSpeedometer />
                  Wind Speed:
                </strong>{" "}
                {weatherData.wind_speed}
              </p>
              <p className="card-text">
                <strong>
                  <BsWind />
                  Wind Degrees:
                </strong>{" "}
                {weatherData.wind_degrees}deg
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Card;
