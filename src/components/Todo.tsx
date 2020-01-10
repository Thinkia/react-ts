import * as React from 'react';
import { connect } from 'react-redux';

import { IItem } from '../';
import { setTodo } from '../redux/action';

interface StateProps {}

interface DispatchProps{
    onClick: ()=> void;
}

interface OwnProps {
    item: IItem
}

type Props = StateProps & DispatchProps & OwnProps;
class Todo extends React.Component<Props, { stage: string}> {
    render() {
        return (         
            <button onClick={this.props.onClick}>todo</button>
            )
    }

}

const mapDispatchProps = (dispatch:Function,ownProps : OwnProps)=>{
    return {
        onClick: () =>{
            dispatch(setTodo(ownProps.item.task))
        }
    }
}

export default connect<StateProps,DispatchProps,OwnProps>(
    null,
    mapDispatchProps
)(Todo)