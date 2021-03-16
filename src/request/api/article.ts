import { PaginationConfig } from "../../interfaces/setting.interface";
import http, { httpError, HttpSuccessOrErrorType } from "../http";

class ArticleAPI {
  async get_articles(params?: PaginationConfig): Promise<HttpSuccessOrErrorType> {
    return http.get("/blog/articles/", {
        params:{
            ...params
        }
    }).catch((err) => httpError(err));
  }
}

export default new ArticleAPI();

