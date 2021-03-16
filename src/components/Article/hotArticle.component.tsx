import React from 'react';
import { Avatar, Empty, Skeleton } from 'antd';
import { LikeTwoTone, MessageTwoTone, FireOutlined } from '@ant-design/icons';
import './less/hotArticle.less';
import { Status } from '../../types/base';

function HotArticle(props: Props) {
  const loading = props.loading === Status.inProgress ? true : false;
  return (
    <div className="hot-container">
      <div className="hot-header">
        <FireOutlined style={{ color: 'red' }} />
        <span className="hot-title fs-xs">热门文章列表</span>
      </div>
      <div className="hot-group">
        {/* <div className="article-item">
          <div className="item-left">
            <Avatar src="https://www.xcnte.com/usr/themes/handsome/assets/img/sj2/6.jpg" />
          </div>
          <div className="item-right">
            <span className="article-title">MySQL千万级数据优化分析</span>
            <div className="comment">
              <div style={{ marginRight: 10 }}>
                <MessageTwoTone style={{ fontSize: 12 }} />
                <span>12</span>
              </div>
              <div>
                <LikeTwoTone style={{ fontSize: 12 }} />
                <span>34</span>
              </div>
            </div>
          </div>
        </div>
        <div className="article-item">
          <div className="item-left">
            <Avatar src="https://www.xcnte.com/usr/themes/handsome/assets/img/sj2/6.jpg" />
          </div>
          <div className="item-right">
            <span className="article-title">
              Python + MongoDB 开发疫情监控系统
            </span>
            <div className="comment">
              <div style={{ marginRight: 10 }}>
                <MessageTwoTone style={{ fontSize: 12 }} />
                <span>12</span>
              </div>
              <div>
                <LikeTwoTone style={{ fontSize: 12 }} />
                <span>34</span>
              </div>
            </div>
          </div>
        </div>
        <div className="article-item">
          <div className="item-left">
            <Avatar src="https://www.xcnte.com/usr/themes/handsome/assets/img/sj2/6.jpg" />
          </div>
          <div className="item-right">
            <span className="article-title">
              React + TypeScript + Flask 全栈开发个人博客
            </span>
            <div className="comment">
              <div style={{ marginRight: 10 }}>
                <MessageTwoTone style={{ fontSize: 12 }} />
                <span>12</span>
              </div>
              <div>
                <LikeTwoTone style={{ fontSize: 12 }} />
                <span>34</span>
              </div>
            </div>
          </div>
        </div> */}
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
          {props.loading !== Status.inProgress && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="fs-xs empty" >暂无热门文章......(～￣▽￣)～</span>} />}
        </div>
      </div>
    </div>
  );
}

type Props = {
  loading: Status;
};
export default React.memo(HotArticle);
