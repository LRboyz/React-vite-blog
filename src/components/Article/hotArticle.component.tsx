import React from 'react';
import { Avatar, Badge, Empty, Skeleton } from 'antd';
import { FireOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
import './less/hotArticle.less';
import ArticleAPI from '../../request/api/article';
import { useRequest } from 'ahooks';
import { IArticle } from '../../interfaces/article.interface';

const HotArticleList: React.FC = () => {
  // const loading = props.loading === Status.inProgress ? true : false;
  const { data, error, loading } = useRequest(() => {
    return ArticleAPI.getArticleList();
  });
  return (
    <div className="hot-container">
      <div className="hot-header">
        <FireOutlined style={{ color: 'red' }} />
        <span className="hot-title fs-xs">热门文章列表</span>
      </div>
      <div className="hot-group">
        {data?.map((item: IArticle, index: number) => {
          return (
            <div key={index} className="article-item">
              <div className="item-left">
                <Avatar src={item.thumb} />
              </div>
              <div className="item-right">
                <span className="article-title">{item.title}</span>
                <div className="comment">
                  <div style={{ marginRight: 15 }}>
                    <EyeOutlined style={{ fontSize: 12 }} />
                    <span>12</span>
                  </div>
                  <div>
                    <LikeOutlined style={{ fontSize: 12 }} />
                    <span>34</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ width: '100%', paddingTop: '10px' }}>
          {loading && (
            <div>
              {[1, 2, 3].map((item, key) => {
                return (
                  <Skeleton
                    key={key}
                    className="mb-md"
                    loading={loading}
                    active
                    avatar={{ size: 'small', shape: 'square' }}
                    title={false}
                    // paragraph={{ rows: 1 }}
                  />
                );
              })}
            </div>
          )}
          {/* 空数据 */}
          {data?.length === 0 && !loading && (
            <Empty description={<span className="fs-xs empty">暂无文章......(～￣▽￣)～</span>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HotArticleList);
