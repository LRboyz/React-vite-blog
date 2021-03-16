import _ from 'lodash';
import { createStore, Store as ReduxStore } from 'redux';
import { Actions } from './action';
import { Reducer } from './reducer';

// *********************
// INIT_STATE
// *********************

/**
 * $ 分开只是为了直观的看清楚，存储于哪里，最终使用还是INIT_DATA 两者的合集
 * 1.公共的数据，无论是store还是caching
 * 2.store特有的
 * 3.caching特有的
 */

// $ store特有的
export const INIT_STATE: LocalState = {
    // 全局loading控制，0关闭 1 开始
    globalLoading: 0
};

// $ caching特有的
export const INIT_CACHING: LocalCaching = {
    // 服务器地址
    httpUrl: 'http://192.168.3.131:4500',
    // 国际化语言
    language: 'EN',
    // 登陆信息
    loginInfo: {},
}

// $ 默认数据 (全局)
export const INIT_DATA: LocalData = {
    // 用户登陆返回数据
    token: {},
    // 主题模式
    themeMode: 'dark',
    prefix: 'mi-',
    ...INIT_STATE,
    ...INIT_CACHING
}


// *********************
// Store
// *********************


export const Store: ReduxStore<LocalState, Actions> = createStore(Reducer);

// *********************
// Store Type
// *********************

export declare type LocalState = {
    globalLoading: number;
};

// $ cache类型定义
export declare type LocalCaching = {
    httpUrl: string;
    language: string;
    loginInfo: { username?: string; password?: string }
};

// $ cache\store类型定义
export declare type LocalData = {
    token: Token,
    themeMode: 'light' | 'dark',
    prefix: string
} & LocalState & LocalCaching;

export type Token = {
    accessToken?: string;
    refreshToken?: null | string;
}




