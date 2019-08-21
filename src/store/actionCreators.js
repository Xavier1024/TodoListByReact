import { CHANGE_INPUT_VALUE, CHANGE_LIST, DELETE_ITEM, INIT_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputValue = (value)=> ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const changeList = () => ({
    type: CHANGE_LIST
});

export const deleteItems = (index) => ({
    type: DELETE_ITEM,
    value: index
});

export const initList = (data) => ({
    type: INIT_LIST,
    value: data
});

export const getListItem = () => {
    return (dispatch) => {
        axios.get('http://www.mocky.io/v2/5ba773293200006900e2e95e/text/json').then((res)=>{
            console.log("actionCreators",res.data);
            const data = res.data;
            const action = initList(data);
            dispatch(action);
        }).catch((e)=>{
            console.log(e);
        })
    }
}
