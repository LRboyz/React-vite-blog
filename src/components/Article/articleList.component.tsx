import React from 'react';
import './less/articleList.less';
import { ArticleData, Status } from '../../types/base';

function ArticleList() {
  return (
    <div className="main-container">
      文章内容区域
      {/* <div className="banner">
        <img src="https://pic4.zhimg.com/v2-fa4452d7471328225376713d497cee16.png" alt="banner" />
      </div>
      <div className="middle-header">
        <div className="meta">热门</div>
        <div className="meta">最新</div>
      </div>
      <div className="middle-body"></div> */}
    </div>
  );
}

type Props = {
  loading: Status;
  articleList: ArticleData;
};

export default React.memo(ArticleList);
