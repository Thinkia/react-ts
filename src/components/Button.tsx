import * as React from 'react';

export interface ButtonProps {
    actionFunction:  (task?:string,stage?:string)=>void;
    name: string;
    task?: string;
    stage?: string;
}

export class ButtonComponents extends React.PureComponent<ButtonProps, { stage: string}> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
        
        this.actionFunction = this.actionFunction.bind(this);
    }

    actionFunction() {
        this.props.actionFunction(this.props.task,this.props.stage);
    }

    render() {
        return (         
            <button onClick={this.actionFunction}> {this.props.name} </button>
            )
    }

}