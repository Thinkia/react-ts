import * as React from 'react';

export interface ListProps { 
    task: string [];
    describe: string []; 
}

export class List extends React.Component<ListProps, {}> {
    constructor(props : any) {
        super(props);
        this.state = { value: '123'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event : any) {
        console.log('change:'+ event.target.value);
    }
    handleSubmit(event : any) {
        console.log('submit');
        event.preventDefault();
    }

    render() {

        return (
            <ul >
    <label>ID:{this.props.task}</label>
           </ul>
        );
    }
}