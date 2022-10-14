import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

export const WeatherMainInfo = ({ weather }) => {
  return (
    <div className="text-center mt-2" style={{ color: "white", backgroundColor:"#400036" }}>
      <h2>
        {weather?.location.name}, {weather?.location.country}
      </h2>
      <div>
        <MDBRow className="align-items-center">
          <MDBCol size="6">
            <img
              src={`http:${weather?.current.condition.icon}`}
              alt={weather?.current.condition.text}
              width="100"
            />
          </MDBCol>
          <MDBCol size="6">
            <h5>{weather?.current.condition.text}</h5>
            <h3>
              <b>{weather?.current.temp_c}°C</b>
            </h3>
          </MDBCol>
        </MDBRow>

        <div>
          <iframe
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d114587.41597154195!2d${weather?.location.lon}4!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1658785767337!5m2!1ses-419!2sar`}
            width="400"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
