import { Store } from './store';
import _ from 'lodash';
import { Caching } from './caching';
export class SC {

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
            path
        });
    }

    /**
     * 重置state
     * @param direction  RESET 重置单个  | RESET_ALL重置全部
     * @param path 属性的名, 重置单个必须传, 重置全部不需要
     */
    public static resetCaching(direction: 'RESET' | 'RESET_ALL', path?: string) {
        Caching.resetCaching(direction, path);
    }

    /**
     * 同时重置state和cache
     * @param direction  RESET 重置单个  | RESET_ALL重置全部
     * @param path 属性的名, 重置单个必须传, 重置全部不需要
     */
    public static resetStateAndCaching(direction: 'RESET' | 'RESET_ALL', path?: string) {
        Caching.resetCaching(direction, path);
        SC.resetState(direction, path);
    }

    // *********************
    // Set
    // *********************

    /**
     * 设置state的方法
     * @param path 属性名称 , 为''表示全部替换
     * @param value 属性的值
     */
    public static setState(path: string, value: any) {
        Store.dispatch({
            type: 'SET_STATE',
            path,
            value
        });
    }

    /**
     * 设置cache的方法
     * @param path  属性名,为''时  设置整体替换, 不为''设置单个属性值
     * @param value 属性的值
     */
    public static setCaching(path: string, value: any) {
        Caching.setCaching(path, value);
    }

    /**
     * 设置cache和state的方法
     * @param path  属性名,为''时  设置整体替换, 不为''设置单个属性值
     * @param value 属性的值
     */
    public static setStateAndCaching(path: string, value: any) {
        Caching.setCaching(path, value);
        SC.setState(path, value);
    }

    public static setStateTheme(path: string, value: any) {
        Store.dispatch({
            type: 'SET_THEME',
            path,
            value
        })
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


    /**
     * 获取到cache的数据
     * @param path  属性名,为''拿到全部缓存,不为''拿到单个
     */
    public static getCaching(path: string) {
        return Caching.getCaching(path);
    }


}