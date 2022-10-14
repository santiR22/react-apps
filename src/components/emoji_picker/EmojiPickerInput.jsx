import React, { useRef } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import EmojiPicker from "./EmojiPicker";

export const EmojiPickerInput = () => {
  const refInput = useRef(null);
  return (
      <div className="container justify-content-center">
        <MDBRow className="mt-5 ">
          <MDBCol className="text-center">
            <input
              style={{ color: "black" }}
              className="bg-white form-control"
              ref={refInput}
            />
          </MDBCol>
          <MDBCol className="text-center mx-5">
            <EmojiPicker ref={refInput} />
          </MDBCol>
        </MDBRow>
      </div>
  );
};
