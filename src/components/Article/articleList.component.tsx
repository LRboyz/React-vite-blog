import React, { useState } from 'react';
import { Tabs, List, Tag, Space, Button } from 'antd';
import './less/articleList.less';
import ArticleAPI from '../../request/api/article';
import { useRequest } from 'ahooks';
import { CommentOutlined, EyeOutlined, HistoryOutlined, LikeOutlined, NumberOutlined } from '@ant-design/icons';
import { IArticle } from '../../interfaces/article.interface';
import formatTime from '../../utils/formatTime';
import { PageConfig } from '../../typings/global';

const ArticleList: React.FC = () => {
  /*************************/
  /*******   State   *******/
  /*************************/
  const [articleList, setArticleList] = useState<Array<IArticle>>([]);
  const [pageConfig, setPageConfig] = useState<PageConfig>({
    limit: 5,
    skip: 0,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMaxData, setMaxData] = useState<boolean>(false);
  const { TabPane } = Tabs;
  const { data, error, loading } = useRequest(() => fetchArticleData(false, pageConfig));
  /*************************/
  /*******  Function  ******/
  /*************************/
  // 获取文章列表
  const fetchArticleData = async (isonLoadMore: boolean, params?: PageConfig) => {
    let data = [] as Array<IArticle>;
    if (isonLoadMore) {
      setCurrentPage(currentPage + 1);
      data = await ArticleAPI.getArticleList({
        limit: 5,
        skip: currentPage * 5,
      });
      data.length === 0 ? setMaxData(true) : null;
      const newData = articleList.concat(data);
      setArticleList(newData);
    } else {
      data = await ArticleAPI.getArticleList(params);
      setArticleList(data);
    }
    return data;
  };
  const changeTabs = () => {};
  /*************************/
  /*******   render  *******/
  /*************************/

  const renderArticleList = () => {
    const IconText = ({ icon, text }: any) => (
      <Space>
        <span className="desc">{React.createElement(icon)}</span>
        {text}
      </Space>
    );
    const loadMore = !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        {!isMaxData ? (
          <Button ghost loading={loading} shape="round" onClick={() => fetchArticleData(true, pageConfig)}>
            <span className="tips">加载更多</span>
          </Button>
        ) : (
          <span className="tips">我也是有底线的！</span>
        )}
      </div>
    ) : null;
    return (
      <List
        itemLayout="vertical"
        size="large"
        loading={loading}
        loadMore={loadMore}
        // pagination={{
        //   onChange: (page) => {
        //     console.log(page);
        //   },
        //   pageSize: 5,
        // }}
        dataSource={articleList}
        renderItem={(item: IArticle) => (
          <div style={{ marginBottom: 10 }}>
            <List.Item
              className="item"
              style={{ padding: '10px 10px' }}
              key={item._id}
              actions={[
                <IconText icon={HistoryOutlined} text={<span className="desc">{formatTime(item._createTime)}</span>} key="list-vertical-message" />,
                <IconText icon={EyeOutlined} text={<span className="desc">12</span>} key="list-vertical-star-o" />,
                <IconText icon={CommentOutlined} text={<span className="desc">1</span>} key="list-vertical-message" />,
                <IconText icon={LikeOutlined} text={<span className="desc">99</span>} key="list-vertical-like-o" />,
                // formatTime
              ]}
              extra={<img width={180} alt="logo" src={item.thumb} />}
            >
              <List.Item.Meta
                title={
                  <div className="title">
                    {item.title}
                    <IconText icon={NumberOutlined} text={<span className="desc">{item.article_category?.category_name}</span>} key="list-vertical-message" />
                  </div>
                }
                description={<span className="desc">{item.description}</span>}
              />
            </List.Item>
          </div>
        )}
      ></List>
    );
  };
  return (
    <div className="article-container">
      {/* 文章内容区域 */}
      <Tabs defaultActiveKey="1" onChange={changeTabs}>
        <TabPane tab={<span>最新</span>} key="1" />
        <TabPane tab={<span>热门</span>} key="2" />
      </Tabs>
      <div className="middle-body">{renderArticleList()}</div>
    </div>
  );
};

export default React.memo(ArticleList);
