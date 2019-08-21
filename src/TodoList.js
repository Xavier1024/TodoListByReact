import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInputValue, changeList, deleteItems,getListItem } from './store/actionCreators';

class TodoList extends Component {
    render(){
        const {inputValue, changeInputValue, changeList,list,deleteItems} = this.props;
        return(
            <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={changeList}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={()=>{
                            deleteItems(index)
                        }}>{item}</li>
                    })
                }
            </ul>
        </div>
        )
    }

    componentDidMount(){
        const {getListItem} = this.props;
        getListItem();
    }
}

//讲store中的state映射到组件的props中
const mapStateToProps = (state)=> {
    return{
        inputValue: state.inputValue,
        list: state.list
    }
}

//store.dispatch
const mapDispatchToProps = (dispatch)=>{
    return{
        changeInputValue(e){
            const action = changeInputValue(e.target.value);
            dispatch(action);
        },
        changeList(){
            const action = changeList();
            dispatch(action);
        },
        deleteItems(index){
            const action = deleteItems(index);
            dispatch(action);
        },
        getListItem(){
            const action = getListItem();
            dispatch(action);
        }
    }
}
//将todolist组件与store连接，连接规则为两个参数，参数为函数
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);