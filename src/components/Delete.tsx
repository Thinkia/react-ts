import * as React from 'react';
import { connect } from 'react-redux';

import { IItem } from '../index';
import { deleteItem } from '../redux/action';
import { IState } from '../redux/reducers/todos';

interface StateProps {}
interface OwnProps{
    item: IItem
}
interface DispatchProps{
    onClick: ()=>void;
}

type Props = DispatchProps & OwnProps
class Delete extends React.Component<Props> {
    render() {
        return (         
            <button onClick={this.props.onClick}>delete</button>
            )
    }
}

const mapStateToProps = (state:IState) =>{
    return state.objects
}

const mapDispatchToProps = (dispatch:Function,ownProps:OwnProps)=>{
        return {
            onClick: ()=>{
                dispatch(deleteItem(ownProps.item.task))
            }
        }
}

export default connect<StateProps,DispatchProps,OwnProps>(
    null,
    mapDispatchToProps
)(Delete)