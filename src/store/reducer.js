import { CHANGE_INPUT_VALUE, CHANGE_LIST, DELETE_ITEM , INIT_LIST} from './actionTypes';


const defaultState = {
    inputValue : '',
    list : []
}

export default (state = defaultState, action) =>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    else if(action.type === CHANGE_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    else if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }
    else if(action.type === INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState;
    }
    return state;
}