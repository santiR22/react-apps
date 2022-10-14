import React, { useEffect, useMemo, useState } from "react";
import { MarkedItem } from "./MarkedItem";

export const Results = ({
  items,
  onItemSelected,
  query,
  onResultsCalculated,
}) => {
  const [results, setResults] = useState([]);

  const findMatch = (items, query) => {
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });
    setResults(res);
    return res;
  };

  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);

  return (
    <div>
      {query !== ""
        ? filteredItems.map((item) => (
            <MarkedItem
              key={item.id}
              item={item}
              query={query}
              onClick={onItemSelected}
            />
          ))
        : ""}
    </div>
  );
};
