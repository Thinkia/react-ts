import * as React from 'react';
import { connect } from 'react-redux';

import { IItem } from '../';
import { setDone } from '../redux/action';

interface StateProps {}

interface DispatchProps {
    onClick: () => void;
}

interface OwnProps {
    item: IItem;
}

type Props = StateProps & DispatchProps & OwnProps

class Done extends React.Component<Props> {
    render() {
        return (
            <button onClick={this.props.onClick}>done</button>
        )
    }

}


export default connect<StateProps, DispatchProps, OwnProps>(
    null,
    (
        dispatch,
        ownProps
    ) => {
        return {
            onClick: () => {
                dispatch(setDone(ownProps.item.task));
            }
        };
    }
)(Done)