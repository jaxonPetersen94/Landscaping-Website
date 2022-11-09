import axios from "axios";

export function RegisterUser(user) {
  console.log("attempting post to /user/register");
  axios.post("https://localhost:5000/user/register", user);
}
