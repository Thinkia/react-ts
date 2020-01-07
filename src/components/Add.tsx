import * as React from 'react';

export interface ButtonProps {
    onClick_add:  ()=>void;
}

export class Add extends React.PureComponent<ButtonProps, { stage: string}> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
        
        // this.actionFunction = this.actionFunction.bind(this);
    }

    onClick_Add= () => {
        this.props.onClick_add();
    }

    render() {
        return (         
            <button onClick={this.onClick_Add}> add </button>
            )
    }

}