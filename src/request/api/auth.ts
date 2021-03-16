import http, { httpError, HttpSuccessOrErrorType } from "../http";
import { accountParams } from "../../interfaces/account.interface";

class AuthApi {
  async get_token(params: accountParams): Promise<HttpSuccessOrErrorType> {
    return await http
      .post(
        "/user/token",
        {
          ...params,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            Connection: "keep-alive",
            "authorization-type": "BASIC_AUTH",
          },
        }
      )
      .catch((err) => httpError(err));
  }
  async register_account(
    params: accountParams
  ): Promise<HttpSuccessOrErrorType>{
    return await http
      .post("/user/register", {
        ...params,
      })
      .catch((err) => httpError(err));
  }
}

export default new AuthApi();
