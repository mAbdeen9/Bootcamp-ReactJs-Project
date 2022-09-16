import { toast } from "react-toastify";

const wait = (seconds) => {
  return new Promise((resolve) => {
    toast("Successfully logged in 👋🏻 ");
    setTimeout(() => {
      resolve("blocking ...");
    }, seconds);
  });
};

export default wait;
