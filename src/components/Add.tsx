import * as React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../redux/action';

interface IStateProps {}
interface IDispatchProps {
    onClick: () => void;
}
interface IOwnProps {}

type Props = IStateProps & IDispatchProps & IOwnProps
class Add extends React.Component<Props> {

    render() {
        return (         
            <button onClick={this.props.onClick}> add </button>
            )
    }

}

const mapDispatchToPROPS = (dispatch:Function) =>{
    return {
        onClick : ()=>{ 
            dispatch(addItem())
        }
    }
}

export default connect(
    null,
    mapDispatchToPROPS
)(Add)