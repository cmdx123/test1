/**
 * Created by Administrator on 2018/10/7 0007.
 */
import { CHANGE_INPUT_VALUE, ON_BTN_CLICK, ON_ITEM_DELETE, INIT_LIST } from './actionTypes';
const defaultState = {
    inputValue: '',
    list: []
};
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ON_BTN_CLICK) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = [...newState.list, newState.inputValue];
        newState.inputValue = '';
        return newState;
    }
    if (action.type === ON_ITEM_DELETE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}