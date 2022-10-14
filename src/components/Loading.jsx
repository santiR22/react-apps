import { MDBSpinner } from "mdb-react-ui-kit";
import React from "react";

export const Loading = () => {
  return (
    <div className="text-center">
      <div className="align-items-center mt-5">
        <MDBSpinner color="white">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    </div>
  );
};
