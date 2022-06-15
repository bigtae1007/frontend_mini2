import React from "react";

const useSearchList = (list, searchType) => {
  return list.filter((v) => (v.title.includes(searchType) ? false : true));
};

export default useSearchList;
