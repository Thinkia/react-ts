import * as React from 'react';

export interface ButtonProps {
    onClick_setDone:  (task:string,stage:string)=>void;
    task: string;
}

export class Done extends React.PureComponent<ButtonProps, { stage: string}> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
    
    }

    onClick_setDone = () => {
        this.props.onClick_setDone(this.props.task,'done');
    }

    render() {
        return (         
            <button onClick={this.onClick_setDone}> done </button>
            )
    }

}