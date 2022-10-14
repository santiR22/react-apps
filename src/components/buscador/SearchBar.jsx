import { MDBCardBody, MDBCardFooter, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Results } from "./Results";

export const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  const handleCHange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleResults = (items) => {
    setResults(items);
  };

  return (
    <>
      <MDBCardBody>
        {results && (
          <h5 style={{ color: "black" }}>{results.length} results</h5>
        )}
        <MDBInput type="text" onChange={handleCHange} value={query} />
      </MDBCardBody>
      <MDBCardFooter border="black" className="d-flex justify-content-center">
        <Results
          items={items}
          onItemSelected={onItemSelected}
          query={query}
          onResultsCalculated={handleResults}
        />
      </MDBCardFooter>
    </>
  );
};
