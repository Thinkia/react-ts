import * as React from 'react';
import { connect } from 'react-redux';

import { IItem } from '../index';
import { setDoing } from '../redux/action';

interface StateProps {}
interface DispatchProps {
    onClick: () => void;
}
interface OwnProps {
    item: IItem;
}

type Props = StateProps & DispatchProps & OwnProps
 
class Doing extends React.Component<Props> {
 
    render() {
        return (         
            <button onClick={this.props.onClick}>doing</button>
            )
    }
 
}

const mapDispatchToPROPS = (dispatch:Function,ownProps:OwnProps) =>{
        return {
            onClick : ()=>{
                dispatch(setDoing(ownProps.item.task)) 
            }
        }
}

export default connect<StateProps,DispatchProps>(
    null,
    mapDispatchToPROPS
)(Doing)