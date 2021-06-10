import { ICategory } from './category.interface';
import { ITag } from './tag.interface';

export interface IArticle {
  _id: string;
  title: string;
  content: string;
  description: string;
  keyword: string;
  thumb: string;
  origin: Origin; // 转载状态
  state: State; // 发布状态
  _createTime: number;
  _updateTime: number;
  article_category?: ICategory;
  article_tag?: Array<ITag>;
}

export enum Origin {
  Hybrid = '',
  Original = '',
  Reprint = '',
}

export enum State {
  Draft = '',
  Published = '',
  Recycle = '',
}
