import jwtDecode from "jwt-decode";
import getToken from "./getToken";

const getUser = () => {
  try {
    const token = getToken();
    const decode = jwtDecode(token);
    return decode;
  } catch (err) {
    return err.message;
  }
};

export default getUser;
