import React, { useState } from 'react';
import './less/layout-page.less';
import { Layout, Input, Button, Popover, Radio } from 'antd';
import LoginModal from '../../components/login/login.component';
import SetTheme from '../../utils/set_theme';
import { FormatPainterFilled } from '@ant-design/icons';
import ArticleAPI from '../../request/api/article';
import CategoryAPI from '../../request/api/category';
import TagAPI from '../../request/api/tag';
import { SC } from '../../store/SC/module';
import Category from '../../components/category/category.component';
import Tag from '../../components/tag/tagList.component';
import HotArticle from '../../components/Article/hotArticle.component';
import ArticleList from '../../components/Article/articleList.component';
import { ArticleData, CategoryData, Status, TagData } from '../../types/base';

const LayoutPage = () => {
  // state
  const { Header } = Layout;
  const [useLoginModal, setLoginModal] = useState(false);
  const [initialLoadStatus, setInitialLoadStatus] = React.useState<Status>(Status.blank);
  const [articleList, setArticleList] = React.useState<Array<ArticleData>>([]);
  const [categoryList, setCategoryList] = React.useState<Array<CategoryData>>([]);
  const [tagList, setTagList] = React.useState<Array<TagData>>([]);
  const { Search } = Input;
  // function
  const onChange = (e: any) => {
    console.log(e.target.value);
    SC.setState('themeMode', e.target.value);
    SetTheme.setThemeVariables(SC.getState('themeMode'));
  };
  const fetchData = async () => {
    try {
      setInitialLoadStatus(Status.inProgress);
      const [articleList, categoryList, tagList] = await Promise.all([ArticleAPI.get_articles(), CategoryAPI.get_category_list(), TagAPI.get_tag_list()]);
      setArticleList(articleList.data.data);
      setCategoryList(categoryList.data.data);
      setTagList(tagList.data.data);
      setInitialLoadStatus(Status.success);
    } catch (error) {
      setInitialLoadStatus(Status.failure);
    }
  };
  React.useEffect(() => {
    setInitialLoadStatus(Status.inProgress);
    setTimeout(() => fetchData(), 1000);
  }, []);
  // component
  const content = () => {
    return (
      <Radio.Group onChange={onChange} style={{ display: 'flex' }} defaultValue={'dark'}>
        <div style={{ padding: 15, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://file.makeit.vip/MIIT/M00/00/00/ajRkHWAJIqKARAkyAACmjWZTun0852.png" alt="" style={{ width: 80, height: 90 }} />
          <Radio value={'dark'} style={{ marginTop: 20 }}>
            深色
          </Radio>
        </div>
        <div style={{ padding: 15, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://file.makeit.vip/MIIT/M00/00/00/ajRkHWAKve-Ac7D8AAH4rA17tm0600.png" alt="" style={{ width: 80, height: 90 }} />
          <Radio value={'light'} style={{ marginTop: 20 }}>
            浅色
          </Radio>
        </div>
      </Radio.Group>
    );
  };
  const HeaderComponent = () => {
    return (
      <Header className="header">
        <div className="logo" />
        <div style={{ flex: 1 }}></div>
        {/* <span className="adage">心之所向,素履以往 生如逆旅,一苇以航</span> */}
        {/* <div className="search">
          <Search placeholder="搜索您喜欢的文章......" style={{ width: 200, marginLeft: 50 }} />
        </div> */}
        <div className="btn-group">
          {/* <Button shape="round" style={{ marginRight: 10 }}  */}
          <Popover content={content}>
            <FormatPainterFilled className="themeIcon" />
          </Popover>

          {/* </Button> */}
          <Button shape="round" onClick={() => setLoginModal(true)}>
            登陆
          </Button>
        </div>
        <LoginModal showLogin={useLoginModal} closeLogin={() => setLoginModal(false)} />
      </Header>
    );
  };

  const ContentComponent = () => {
    return (
      <div className="content">
        <div className="nav">
          <Category {...{ categoryList: categoryList, loading: initialLoadStatus }} />
        </div>
        <div className="main">
          <ArticleList />
        </div>
        <div className="aside">
          <HotArticle {...{ loading: initialLoadStatus }} />
          <Tag {...{ tagList: tagList, loading: initialLoadStatus }} />
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Layout className="layout-container">
        {HeaderComponent()}
        {ContentComponent()}
      </Layout>
    </React.Fragment>
  );
};

export default LayoutPage;
