import _ from "lodash";
import { Actions } from "./action";
import { INIT_DATA, LocalData } from "./store";
import SetTheme from '../../utils/set_theme'
import { SC } from "./module";

export const Reducer = (localState: LocalData = INIT_DATA, action: Actions) => {
    // init
    let newState = _.cloneDeep([localState])[0];
    // switch actions
    switch (action.type) {
        case 'RESET_STATE': {
            if (action.direction === 'RESET' && action.path) {
                _.set(newState, action.path, _.get(INIT_DATA, action.path));
            } else if (action.direction === 'RESET_ALL') {
                newState = INIT_DATA;
            }
            break;
        }
        case 'SET_STATE': {
            if (action.path === '') {
                newState = _.get(action, 'value')
            } else {
                _.set(newState, action.path, _.get(action, 'value'));
            }
            break;
        }
        case 'GET_STATE': {
            return _.get(newState, action.path);
        }
        default: { break; }
    }
    // return
    return newState;
};