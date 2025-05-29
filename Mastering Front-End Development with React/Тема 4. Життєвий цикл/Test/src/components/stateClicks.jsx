const stateClicks = () => {
  const savedClicks = window.localStorage.getItem("saved-clicks");
  if (savedClicks !== null) {
    return JSON.parse(savedClicks);
    // return Number(savedClicks);
  }
  return 0;
};

export default stateClicks;
