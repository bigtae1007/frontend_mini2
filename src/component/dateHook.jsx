import React from "react";

const useDateHook = (date) => {
  const day = date.slice(0, 10);
  const time = date.slice(11, 19);
  return `${day} - ${time}`;
};

export default useDateHook;
