import * as React from 'react';

export interface ListProps { 
    task: string;
    describe: string; 
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
export class List extends React.Component<ListProps, {value: string }> {
    constructor(props : Readonly<ListProps>) {
        super(props);
        /**
         *  创建阶段  
         *  使用 this.state 来初始化 state
            给事件处理函数绑定 this
         *  */ 
        this.state = {value: '123'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 生命周期理解测试 3h  ：  https://segmentfault.com/a/1190000020348448

    //挂载 -- 大部分情况下都推荐把异步数据请求放在 componentDidMount() 中
    componentDidMount() {
 
        console.log('DidMount: 挂载 ');
    }

    //更新阶段  从 props 中获取 state  
    static getDerivedStateFromProps(nextProps : ListProps, prevState : {value: string}) {
        console.log('getDerivedStateFromProps: 从 props 中获取 state ')
        console.log(prevState.value) ;
        return true
    }
    

    // todo 更新阶段 -- 判断是否需要重绘  ？ 类型
    shouldComponentUpdate():any{
        console.log('shouldComponentUpdate: 判断是否需要重绘')
        return true
    }

    // todo 更新阶段 -- 获取快照？
    /**
     * 这个方法在 render() 之后，componentDidUpdate() 之前调用。
     * 返回值称为一个快照（snapshot），如果不需要 snapshot，则必须显示的返回 null 
     * —— 因为返回值将作为 componentDidUpdate() 的第三个参数使用。所以这个函数必须要配合 componentDidUpdate() 一起使用。
     */
    getSnapshotBeforeUpdate(prevProps:ListProps, prevState : {}) {
        console.log('getSnapshotBeforeUpdate : 获取快照？ ')
        return true
    }

    // 更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate:  更新完成')
        console.log(this.state.value) ;
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

    // todo  event 类型是什么？
    handleChange(event: any ) {
        this.setState({value: event.target.value});
        console.log(this.state.value) ;
    }
    handleSubmit(event : any) {
        console.log('submit');
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

        return (
            <ul >
            <label>{this.props.task}</label>
            <input value={this.state.value} onChange = {this.handleChange}></input>
           </ul>
        );
    }
}