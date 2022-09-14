const getToken = () => {
  if (JSON.parse(localStorage.getItem("meta-data"))) {
    return JSON.parse(localStorage.getItem("meta-data")) || "";
  }
  return "";
};

export default getToken;
