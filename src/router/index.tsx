import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import routerConfig from './router.config';

// $ 路由组件
const AppRouter = () => {
    return (
        <HashRouter>
            <Switch>
                {
                    routerConfig.map(({ path, componentName, exact = true }, index) => {
                        return (
                            <Route
                                {...{
                                    key: index,
                                    exact,
                                    path,
                                    component: componentName
                                }} >
                            </Route>
                        )
                    })
                }
                <Redirect from='/*' to='/' />
            </Switch>
        </HashRouter>
    );
};

export default AppRouter;