import { ITag } from '../../interfaces/tag.interface';
import request from '../http';
class TagAPI {
  async getTagList(params?: any): Promise<Array<ITag>> {
    const result = await request('/blog_tags', {
      method: 'GET',
    });
    const { data } = result;
    return data;
  }
}

export default new TagAPI();
