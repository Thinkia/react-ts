import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { List } from './components/List';

interface itemData {
    obj: {
        task: string,
        describe: string;
        plan: string
    }[];
    number: number;
    done: boolean;
}


class Render extends React.Component<{}, itemData> {
    constructor(props: {}) {
        super(props);
        this.state = { obj: [{ task: 'test', describe: 'test', plan: 'todo' }], number: 0, done: false }
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

    // 更新完成
    componentDidUpdate(_prevProps: {}, _prevState: {}, _snapshot: any) {
        console.log('componentDidUpdate:  更新完成')
    }

    addElement() {

        let obj = this.state.obj;
        obj.push({ task: '任务' + this.state.number, describe: '描述' + this.state.number, plan: 'todo' })

        this.setState({
            obj: obj,
            number: this.state.number + 1,
        })
    }

    // 
    doneAll() {
        this.setState({ done: true })
    }


    changeObj = (cObj?: [], cDone?: boolean) => {
        if (cObj !== undefined) this.setState({ obj: cObj })
        if (cDone !== undefined) this.setState({ done: cDone })
    }

    render() {
        const list = this.state.obj;
        const {obj} = this.state;

        return (
            <div>
                <button onClick={this.addElement}> add </button>
                <button onClick={this.doneAll}> done all </button>

                <table>
                    <tbody>
                        {
                            list.map((item) => {
                                return (
                                    <List
                                        key={item.task}
                                        obj={item}
                                        allObj={obj}
                                        changeObj={this.changeObj}
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
    <Render />,
    document.getElementById("example")
);