import { localStorageUtils } from "../../utilities/localStorage";
import { Auth } from "../config";
import { instance } from "../instance";
import { authDto } from "./auth.dto";

export const login = async (loginData) => {
  // const { setItemToLocalStorage } = localStorageUtils();
  // const response = await instance.post(Auth.login(), loginData);
  // const { userInfo, authTokens } = authDto(response.data);
  // setItemToLocalStorage("authkey", authTokens);
  // return userInfo;
  return {
    username: "test",
    email: "test@test.com",
    id: 1,
  };
};

export const logout = async () => {
  const { setItemToLocalStorage } = localStorageUtils();
  await instance.post(Auth.logout());
  setItemToLocalStorage("authkey", "");
};
