import { IArticle } from './../../interfaces/article.interface';
import { PageConfig } from '../../typings/global';
import request from '../http';

class ArticleAPI {
  async getArticleList(params?: PageConfig): Promise<Array<IArticle>> {
    const result = await request('/blog_article', {
      method: 'GET',
      params,
    });
    const { data } = result;
    return data;
  }
}

export default new ArticleAPI();
