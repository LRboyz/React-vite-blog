import _ from 'lodash';
import { CACHING_EMPTY_STRING, CACHING_KEY } from './action';
import { INIT_DATA } from './store';

export class Caching {

    /**
     * 重置cache
     * @param direction  RESET 重置单个  | RESET_ALL重置全部
     * @param path 属性的名, 重置单个必须传, 重置全部不需要
     */
    public static resetCaching(direction: 'RESET' | 'RESET_ALL', path?: string) {
        if (direction === 'RESET' && path) {
            let originState = localStorage.getItem(CACHING_KEY);
            let state = JSON.parse(originState || CACHING_EMPTY_STRING);
            _.set(state, path, _.get(INIT_DATA, path));
            localStorage.setItem(CACHING_KEY, JSON.stringify(state));

        } else if (direction === 'RESET_ALL') {
            localStorage.setItem(CACHING_KEY, JSON.stringify(INIT_DATA));
        }
    }

    /**
     * 设置cache
     * @param path 属性的名, 重置单个必须传, 重置全部不需要
     * @param value  属性值
     */
    public static setCaching(path: string, value: any) {
        let originState = localStorage.getItem(CACHING_KEY);
        let state = JSON.parse(originState || CACHING_EMPTY_STRING);
        if (path === '') {
            state = value;
        } else {
            _.set(state, path, value);
        }
        localStorage.setItem(CACHING_KEY, JSON.stringify(state));
    }

    /**
     * 获取cache
     * @param path 属性的名, 为''获取全部,不为''获取到对应的值
     */
    public static  getCaching(path: string) {
        let originState = localStorage.getItem(CACHING_KEY);
        let state = JSON.parse(originState || CACHING_EMPTY_STRING);
        if (path !== '') {
            state = _.get(state, path);
        }
        return state;
    }
}