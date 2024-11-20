import { LOGIN, PASSWORD } from "../constants/constants.js";

export default function verification(login, pass) {
  return login === LOGIN && pass === PASSWORD;
}
