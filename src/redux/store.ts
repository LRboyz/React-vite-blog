import { IArticle } from './../interfaces/article.interface';
import _ from 'lodash';
import { createStore, Store as ReduxStore } from 'redux';
import { GlobalTheme } from '../typings/global';
import { Actions } from './action';
import { Reducer } from './reducer';

// *********************
// INIT_STATE
// *********************

// $ 默认数据 (全局)
export const INIT_DATA: InitData = {
  // 主题模式
  themeMode: 'light',
};

// *********************
// Store
// *********************

export const Store: ReduxStore<InitData, Actions> = createStore(Reducer);

// *********************
// Store Type
// *********************

// $ cache\store类型定义
export declare type InitData = {
  themeMode: GlobalTheme;
};
