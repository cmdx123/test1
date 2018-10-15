/**
 * Created by Administrator on 2018/10/9 0009.
 */
import React, { Component } from 'react'
import {Input, Button, List} from 'antd';
import "antd/dist/antd.css"
class TodoListUI extends Component {
    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input value={this.props.inputValue}
                       placeholder='todo info'
                       style={{width: '500px', marginRight: '10px'}}
                       onChange={this.props.handleInput}
                />
                <Button type="primary" onClick={this.props.handleBtnClick}>Primary</Button>
                <List
                    style={{width: '500px', marginTop: '10px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={
                            () => {
                                this.props.handleItemDelete(index)
                            }
                        }>{item}</List.Item>)}
                />
            </div>
        );
    }
}

export default TodoListUI;