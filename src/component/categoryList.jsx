import React from "react";

const useCategoryList = (list, type) => {
  return list.filter((v) => v.img === type);
};

export default useCategoryList;
