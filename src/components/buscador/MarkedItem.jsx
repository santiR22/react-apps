import { MDBBtn } from "mdb-react-ui-kit";
import React, { useMemo } from "react";

export const MarkedItem = ({ item, query, onClick }) => {
  const getPositions = (item, query) => {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const right = item.title.slice(index + query.length);
    const center = item.title.slice(index, index + query.length);

    return {
      left,
      center,
      right,
    };
  };

  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  const handleClick = (e) => {
    onClick(item);
  };

  return (
    <MDBBtn
      className="m-2"
      style={{ display: "block" }}
      onClick={handleClick}
      color="black"
    >
      {left}
      <span
        style={{
          color: "black",
          backgroundColor: "yellow",
          fontWeight: "bolder",
        }}
      >
        {center}
      </span>
      {right}
    </MDBBtn>
  );
};
