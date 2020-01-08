import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

// import { ButtonComponents } from './components/Button';
import Add from './components/Add';
import DoneAll from './components/DoneAll';
import Item from './components/Item';
import { IState } from './redux/reducers/todos';
import store from './redux/store';

export interface IItem {
    task: string,
    describe: string,
    stage: string,
};
interface StateProps {objects: IItem[];}

class List extends React.Component<StateProps> {
    render() {
        const {objects} = this.props;
        return (
            <div >
                <Add />
                <DoneAll />
                <table style={{ border: '1px solid black' }}>
                    <tbody>
                        {
                            objects.map((item) => {
                                return (
                                    <Item key={item.task} item={item}/>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        objects: state.objects.slice()
    }
}

const ConnectedList = connect<StateProps>(
    mapStateToProps
)(List)


ReactDOM.render(
    <Provider store={store}>
        <ConnectedList />
    </Provider>,
    document.getElementById("example")
);