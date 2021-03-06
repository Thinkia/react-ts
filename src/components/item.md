import * as React from 'react';
import { connect } from 'react-redux';

import Delete from './Delete';
import Doing from './Doing';
import Done from './Done';
import Todo from './Todo';

export interface ItemProps {
    object: {task: string, describe: string,stage : string};
    delObject:  (task: string)=>void;
    setStage: (task: string, stage: string) =>void
}

/**
 * ts 中 一定要指定 state 类型     --- 浪费 1h  参考文章： https://juejin.im/post/5bed5f03e51d453c9515e69b
 * 
 * webpack  react & typescript  打包  6h  
 * 
 * webpack :  https://www.webpackjs.com/guides/typescript/
   react & typescript : https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
 * 
 */
/**
 * 关于 React.PureComponent  2020.1.7
 * React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。
 * 如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。
 * 仅在props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。
 * 也可以考虑使用 immutable 对象加速嵌套数据的比较。
 * 此外，React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。
 * 因此，请确保所有子组件也都是“纯”的组件。   -- https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent

 * 
 */
 class Item extends React.Component<ItemProps, { stage: string}> {
    constructor(props: Readonly<ItemProps>) {
        super(props);
        /**
         *  创建阶段  
         *  使用 this.state 来初始化 state
            给事件处理函数绑定 this
         *  */
        this.state = { stage: this.props.object.stage};
        this.handleChange = this.handleChange.bind(this);
        this.setStage = this.setStage.bind(this);
    }

    // 生命周期理解测试 3h  ：  https://segmentfault.com/a/1190000020348448

    //挂载 -- 大部分情况下都推荐把异步数据请求放在 componentDidMount() 中
    componentDidMount() {

        console.log('DidMount: 挂载 ');
    }

    //更新阶段  从 props 中获取 state  
    static getDerivedStateFromProps(_nextProps: ItemProps, prevState: { value: string }) {
        console.log('getDerivedStateFromProps: 从 props 中获取 state ')
        return true
    }


    // todo 更新阶段 -- 判断是否需要重绘  ？ 类型
    // shouldComponentUpdate(_prevProps: ListProps, _prevState: { value: string }): any {
    //     console.log('shouldComponentUpdate: 判断是否需要重绘')

    //     return true
    // }

    // todo 更新阶段 -- 获取快照？
    /**
     * 这个方法在 render() 之后，componentDidUpdate() 之前调用。
     * 返回值称为一个快照（snapshot），如果不需要 snapshot，则必须显示的返回 null 
     * —— 因为返回值将作为 componentDidUpdate() 的第三个参数使用。所以这个函数必须要配合 componentDidUpdate() 一起使用。
     */
    getSnapshotBeforeUpdate(_prevProps: ItemProps, _prevState: {}) {
        console.log('getSnapshotBeforeUpdate : 获取快照？ ')
        return true
    }

    // 更新完成
    componentDidUpdate(_prevProps: ItemProps, _prevState: {}, _snapshot: any) {
        console.log('componentDidUpdate:  更新完成')
    }

    //卸载阶段 即将卸载
    componentWillUnmount() {
        console.log('WillUnmount: 即将卸载');
    }

    // 错误处理： 从错误中获取 state
    static getDerivedStateFromError() {
        console.log('getDerivedStateFromErrort: 从错误中获取 state');
    }
    // 错误处理： 捕获错误并进行处理
    componentDidCatch() {
        console.log('componentDidCatch: 捕获错误并进行处理')
    }

    //  删除  当前item  object
    handleChange(event: any) {
        this.props.delObject(this.props.object.task)
    }


    // 
    setStage(event: any) {
        this.props.setStage(this.props.object.task,event.target.value)    
        // this.props.object.stage = event.target.value
        // this.setState({stage: event.target.value}) 
        event.preventDefault();
    }


    /**
     *  可返回类型
     *  React 元素（React elements）
        数组（Arrays）
        片段（fragments）
        插槽（Portals）
        字符串或数字（String and numbers）
        布尔值或 null（Booleans or null）
     * 
     */
    render() {

        const {object, delObject,setStage} = this.props;
        const {task} = object
     
            return (
                <tr>
                    <td>{this.props.object.task}</td>
                    <td>{this.props.object.describe}</td>
                    <td>{this.props.object.stage}</td>
                    {/* <td>
                        <button onClick={this.setStage} value="done" >done</button>
                        <button onClick={this.setStage} value="doing" >doing</button>
                        <button onClick={this.setStage} value="todo" >todo</button>
                        <button onClick={this.handleChange} >delete</button>
                    </td> */}
                    <td>
                        <Done
                            onClick_setDone={setStage}
                            task={task}
                        />       
                    </td>
                    <td>
                        <Doing
                            onClick_setDoing={setStage}
                            task={task}
                        />
                    </td>
                    <td>
                        <Todo
                            onClick_setTodo={setStage}
                            task={task}
                        />
                    </td>
                    <td>
                        <Delete
                            onClick_delete={delObject}
                            task={task}
                        />  
                    </td>               
                </tr>
            );
     
    }
}

