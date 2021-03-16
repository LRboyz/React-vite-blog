export enum Status {
  blank,
  requested,
  inProgress,
  success,
  failure,
  noContent,
}

export type ArticleData = {
  _id: string; 
  title: string; // 文章标题
  banner: string; // 文章banner图
  pub_time: string; // 发布时间
  update_time: string; // 更新时间
  introduction: string; // 文章摘要
  views: number; // 文章浏览量
  likes: number; // 点赞数量
  recommend: number; //  是否推荐
  keyword: string; // 关键词
  source: string; //  文章来源
  comments: any;
  commentsCount: number; //  评论数量
  content: string;
  author: any;
  category: CategoryData;
  is_audit: boolean;
  tags: TagData[];
  user_info: object;
  article_type: number; //文章类型
};

export type CategoryData = {
  category_name: string;
  thumbnail: string;
  pub_time: string;
  update_time: string;
  status: boolean;
  is_public: boolean;
};

export type TagData = {
  tag_name: string;
  view_hits: number; //  查看点击
  subscriber: Array<any>; // 关注者
  thumbnail: string;
  status: boolean;
  pub_time: string;
  update_time: string;
};

export declare type PropType<T, P extends keyof T> = T[P];