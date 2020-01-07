import * as React from 'react';

export interface ButtonProps {
    onClick_setDoing:  (task:string,stage:string)=>void;
    task: string;
}

export class Doing extends React.PureComponent<ButtonProps, { stage: string}> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
    }

    onClick_setDoing =() => {
        this.props.onClick_setDoing(this.props.task,'doing');
    }

    render() {
        return (         
            <button onClick={this.onClick_setDoing}> doing </button>
            )
    }

}