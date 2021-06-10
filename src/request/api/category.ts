import { ICategory } from '../../interfaces/category.interface';
import request from '../http';
class CategoryAPI {
  async getCategoryList(params?: any): Promise<Array<ICategory>> {
    const result = await request('/blog_category', {
      method: 'GET',
    });
    const { data } = result;
    return data;
  }
}

export default new CategoryAPI();
