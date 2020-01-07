import * as React from 'react';

export interface ButtonProps {
    onClick_setTodo:  (task:string,stage:string)=>void;
    task: string;
}

export class Todo extends React.PureComponent<ButtonProps, { stage: string}> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
        
    }

    onClick_setTodo = () => {
        this.props.onClick_setTodo(this.props.task,'todo');
    }

    render() {
        return (         
            <button onClick={this.onClick_setTodo}> todo </button>
            )
    }

}