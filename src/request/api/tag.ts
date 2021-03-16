import http, { httpError, HttpSuccessOrErrorType } from "../http";

class TagAPI {
    async get_tag_list(): Promise<HttpSuccessOrErrorType>{
        return http.get("/blog/tag/list/").catch((err) => httpError(err));
    }
}


export default new TagAPI();