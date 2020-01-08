import * as React from 'react';
import { connect } from 'react-redux';

import { doneAll } from '../redux/action';

interface DispatchProps {
    onClick: () => void;
}


type Props =  DispatchProps 
class DoneAll extends React.PureComponent<Props> {
    render() {
        return (         
            <button onClick={this.props.onClick}> done all </button>
            )
    }

}

const mapDispatchToProps = (dispatch:Function) =>{
    return {
        onClick:() =>{
            dispatch(doneAll())
        }
    }
}

export default connect<null,DispatchProps>(
    null,
    mapDispatchToProps
)(DoneAll)