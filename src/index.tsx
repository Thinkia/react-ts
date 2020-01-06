import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Item } from './components/Item';

interface itemData {
    objects: {
        task: string,
        describe: string,
        stage: string,
    }[];
    number: number;
}


class List extends React.Component<{}, itemData> {
    constructor(props: {}) {
        super(props);
        this.state = { objects: [{ task: 'task0', describe: 'describe0', stage: 'todo' }], number: 1 }
        this.addElement = this.addElement.bind(this)
        this.doneAll = this.doneAll.bind(this)
    }

    // 挂载完成
    componentDidMount() {
        // 启服务
        // let url = './test.json'
        // fetch(url)
        // .then(res => res.json())
        // .then(
        //     result =>{
        //         console.log(result);
        //     },
        //     error => {
        //         console.log(error)
        //     }
        // )
    }

    // 克隆当前 objects
    objectsClone() {
        const allObj = this.state.objects
        let changeObj:{task: string, describe: string,stage:string}[] = [];
        for (let i=0; i< allObj.length; i++){
            changeObj[i] ={
                task: allObj[i].task, 
                describe:allObj[i].describe,
                stage: allObj[i].stage}
        }
        return changeObj;
    }

    // 更新完成
    componentDidUpdate(_prevProps: {}, _prevState: {}, _snapshot: any) {
        console.log('componentDidUpdate:  更新完成')
    }

    // 增加一个object
    addElement() {

        let objects = this.state.objects;
        objects.push({ 
            task: 'task' + this.state.number,
            describe: 'describe' + this.state.number,
            stage: 'todo' })

        this.setState({
            objects: objects,
            number: this.state.number + 1,
        })
    }


    // 设置为done
    doneAll() {
       this.setAllStage('done')
    }

    // 设置所有 objects.stage  ：  all done , all todo , all doing ;
    setAllStage(changeStage : string) {
        let objects = this.objectsClone()
        objects.map(p=>{
            p.stage = changeStage
        })
        this.setState({objects:objects})
    }

    // 修改 某个 task 的 stage值
    setStage = (task: string,  changeStage: string) => {
        let objects = this.objectsClone();
        objects.map(p=>{
            if(p.task === task) p.stage = changeStage
        })
        this.setState({objects:objects})
    }

    // delete all objects 删除所有对象
    delAllObjects() {
        this.setState({objects:[]});
    }

    // delete task  object  删除某个 task 对象
    delObject = (task: string) => {
        let objects = this.objectsClone();
        let changeObjects : {
            task: string,
            describe: string,
            stage: string
        }[] = []
        objects.map(p=>{
            if(p.task !== task)changeObjects.push(p)
        })
        this.setState({objects:changeObjects })
    }

    /**
     * important  setState 方法对比的是 当前state  和参数的值;  如果将 state 赋值 则会影响更新  可以把 state  clone()一次 ;
     * 
     */

    changeObj = (changeObjects: []) => {
      this.setState({ objects: changeObjects })
    }


    render() {
        const item = this.state.objects;
        const {objects} = this.state;

        return (
            <div>
                <button onClick={this.addElement}> add </button>
                <button onClick={this.doneAll}> done all </button>
                <table>
                    <tbody>
                        {
                            item.map((item) => {
                                return (
                                    <Item
                                        key={item.task}
                                        object={item}
                                        delObject={this.delObject}
                                        setStage={this.setStage}
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}



ReactDOM.render(
    <List />,
    document.getElementById("example")
);