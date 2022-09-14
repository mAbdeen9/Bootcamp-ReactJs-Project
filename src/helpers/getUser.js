import jwtDecode from "jwt-decode";
import getToken from "./getToken";

const getUser = () => {
  const decode = jwtDecode(getToken());
  return decode;
};

export default getUser;
