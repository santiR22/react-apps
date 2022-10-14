import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  const loadInfo = async (city = "Formosa") => {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${
          import.meta.env.VITE_APP_API_KEY
        }&q=${city}&aqi=no`
      );

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
      }, 1000);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  useEffect(() => {
    loadInfo();
  }, []);

  return (
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center mt-5">
          <MDBCol md="5">
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
