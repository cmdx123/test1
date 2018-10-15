/**
 * Created by Administrator on 2018/10/7 0007.
 */
import React, {Component} from 'react';
import TodoListUI from './todoListUI'
import store from './store';
import { getInitList, getWeather, getTodoList, getAddItemAction, getChangeInputAction, getDeleteItemAction } from './store/actionCreaters';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInput = this.handleInput.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStateChange);
    }

    handleInput(e) {
        const action = getChangeInputAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }


    handleStateChange() {
        this.setState(store.getState());
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInput={this.handleInput}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        );
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);
        // const weatherAction = getWeather();
        // store.dispatch(weatherAction);
    }
}

export default TodoList;