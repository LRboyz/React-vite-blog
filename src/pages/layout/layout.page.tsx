import React, { useState } from 'react';
import './less/layout-page.less';
import { Layout, Input, Button, Popover, Radio } from 'antd';
import TagList from '../../components/tag/tagList.component';
import LoginModal from '../../components/login/login.component';
import { FormatPainterFilled } from '@ant-design/icons';
import Category from '../../components/category/category.component';
import ArticleList from '../../components/Article/articleList.component';
import HotArticleList from '../../components/Article/hotArticle.component';
import Advertisement from '../../components/advert/advert.component';
import { Dispatch } from '../../redux/module';
import { useTheme } from '../../hooks/useTheme';
import { Store } from '../../redux/store';
// import { ArticleData, CategoryData, Status, TagData } from '../../types/base';

const LayoutPage: React.FC<any> = () => {
  // state
  const { Header } = Layout;
  const [useLoginModal, setLoginModal] = useState(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { theme, setGlobalTheme } = useTheme();

  // function
  const onChange = (e: any) => {
    console.log(e.target.value);
    Dispatch.setState('themeMode', e.target.value);
    console.log(Store.getState().themeMode, 'store');
    setGlobalTheme(e.target.value);
    // SetTheme.setThemeVariables(Dispatch.getState('themeMode'));
  };
  const fetchData = async () => {
    try {
      setLoading(true);
    } catch (error) {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => fetchData(), 1000);
  }, []);
  // 主题面板
  const themePanel = () => {
    return (
      <Radio.Group onChange={onChange} style={{ display: 'flex' }} defaultValue={theme}>
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
          {/* 主题面板 */}
          <Popover content={themePanel}>
            <FormatPainterFilled className="themeIcon" />
          </Popover>
          {/* 登录按钮 */}
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
          <Category />
        </div>
        <div className="main">
          <ArticleList />
        </div>
        <div className="aside">
          <HotArticleList />
          <Advertisement />
          <TagList />
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
