/**
 * Created by Administrator on 2018/10/8 0008.
 */
import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ON_ITEM_DELETE, ON_BTN_CLICK, INIT_LIST} from './actionTypes'
import axios from 'axios';
import jsonp from 'jsonp';

export const getChangeInputAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ON_BTN_CLICK,
});

export const getDeleteItemAction = (index) => ({
    type: ON_ITEM_DELETE,
    index
});
export const initList = (data) => ({
    type: INIT_LIST,
    data
});
export const getInitList = ()=> ({
   type: GET_INIT_LIST
});
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.post('/api/todoList.json').then(
//             (res) => {
//                 const data = res.data;
//                 const action = initList(data);
//                 dispatch(action);
//             }
//         ).catch(
//             (error) => {
//                 console.log(error);
//             }
//         );
//     };
// };
// export const getWeather = () => {
//     return () => {
//         jsonp('/data/sk/101190408.html', null, (err, data) => {
//             console.log(data);
//             // if (err) {
//             //     console.error(err.message);
//             // } else {
//             //     console.log(data);
//             // }
//         })
//     };
// };

