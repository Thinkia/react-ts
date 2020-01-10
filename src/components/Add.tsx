import * as React from 'react';
import { connect } from 'react-redux';

import { addDoneAsync, addItem, doneAll } from '../redux/action';

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

// 异步测试
const mapDispatchToPROPS = (dispatch:Function) =>{
    return {
        onClick : ()=>{ 
           setTimeout(()=>{ 
                dispatch(addItem())
                dispatch(doneAll())
            },2000)
        }
    }
}

export default connect(
    null,
    mapDispatchToPROPS
)(Add)