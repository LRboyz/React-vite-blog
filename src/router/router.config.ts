import { RouteComponentProps } from 'react-router-dom';
import LayoutPage from '../pages/layout/layout.page';
import ArticleDetail from '../components/Article/articleList.component'

// $ 路由配置
const routerConfig: Array<RouterType> = [
    {
        path: '/',
        componentName: LayoutPage,
        name: '主页'
    },
    {
        path: '/article/:article_id',
        componentName: ArticleDetail,
        name:'文章详情'
    }
]

export default routerConfig;

// $ 类型定义
interface RouterType {
    path: string,
    componentName: React.ComponentType<any> | React.ComponentType<RouteComponentProps<any>>,
    name: string,
    exact?: boolean,
    childRoutes?: Array<RouterType>
}
