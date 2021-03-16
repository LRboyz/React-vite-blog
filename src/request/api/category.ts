import http, { httpError, HttpSuccessOrErrorType } from "../http";

class CategoryAPI {
    async get_category_list(): Promise<HttpSuccessOrErrorType> {
        return http.get("/blog/category/list/").catch((err) => httpError(err));
    }
}

export default new CategoryAPI();