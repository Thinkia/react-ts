import * as React from 'react';

export interface ButtonProps {
    onClick_doneAll:  ()=>void;
}

export class DoneAll extends React.PureComponent<ButtonProps, { stage: string}> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
        
    }

    onClick_DoneAll = () => {
        this.props.onClick_doneAll();
    }

    render() {
        return (         
            <button onClick={this.onClick_DoneAll}> done all </button>
            )
    }

}