import { Store } from './store';
import _ from 'lodash';
export class Dispatch {
  // *********************
  // reset
  // *********************

  /**
   * 重置state
   * @param direction  重置单个或者全部重置
   * @param path 属性的名, 为''表示重置全部
   */
  public static resetState(direction: 'RESET' | 'RESET_ALL', path?: string) {
    Store.dispatch({
      type: 'RESET_STATE',
      direction,
      path,
    });
  }

  /**
   * 设置state的方法
   * @param path 属性名称 , 为''表示全部替换
   * @param value 属性的值
   */
  public static setState(path: string, value: any) {
    Store.dispatch({
      type: 'SET_STATE',
      path,
      value,
    });
  }

  public static setStateTheme(path: string, value: any) {
    Store.dispatch({
      type: 'SET_STATE',
      path,
      value,
    });
  }

  

  // *********************
  // Get
  // *********************

  /**
   * 获取到state的数据
   * @param path  属性名
   */
  public static getState(path: string) {
    return _.get(Store.getState(), path);
  }
}
