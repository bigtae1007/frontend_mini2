const useDateHook = (date) => {
  let day = "";
  let time = "";
  if (date) {
    day = date.slice(0, 10);
    time = date.slice(11, 19);
  }

  return `${day} / ${time}`;
};

export default useDateHook;
