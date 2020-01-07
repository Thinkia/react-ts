import * as React from 'react';

export interface ButtonProps {
    onClick_delete:  (task:string)=>void;
    task: string;
}

export class Delete extends React.PureComponent<ButtonProps, { stage: string}> {
    constructor(props: Readonly<ButtonProps>) {
        super(props);
        
    }

    onClick_delete = () => {
        this.props.onClick_delete(this.props.task);
    }

    render() {
        return (         
            <button onClick={this.onClick_delete}> delete </button>
            )
    }

}