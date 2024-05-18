import { createSlice } from "@reduxjs/toolkit";
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    status: null,
    city: "",
  },
  reducers: {
    setWeatherdata: (state, action) => {
      state.weatherData = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});
export const { setWeatherdata, setStatus, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
export function fetchData() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=punjab`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e4ca162camshac6b0bd49923f58p1ce03ejsn9ead718feac9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  return async function fetchDataThunk(dispatch) {
    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (res.status === 200) {
        dispatch(setStatus("success"));
        dispatch(setWeatherdata(data));
      } else {
        dispatch(setStatus("error"));
      }
    } catch (error) {
      console.log(error?.respne?.message);
      dispatch(setStatus("error"));
    }
  };
}
export function fetchSingleCityData(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e4ca162camshac6b0bd49923f58p1ce03ejsn9ead718feac9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  return async function fetchSingleCityDataThunk(dispatch) {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (res.status === 200) {
        dispatch(setStatus("success"));
        dispatch(setWeatherdata(data));
        dispatch(setCity(city));
      } else {
        dispatch(setStatus("error"));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus("error"));
    }
  };
}
