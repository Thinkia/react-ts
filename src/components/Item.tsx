import * as React from 'react';
import { connect } from 'react-redux';

import { IItem } from '../index';
import Delete from './Delete';
import Doing from './Doing';
import Done from './Done';
import Todo from './Todo';

export interface ItemProps {
    item: IItem;
}

 class Item extends React.Component<ItemProps> {
    render() {
        const { item } = this.props;
            return (
                <tr>
                    <td>{item.task}</td>
                    <td>{item.describe}</td>
                    <td>{item.stage}</td>
                    <td>
                        <Done
                           item={item}
                        />  
                    </td>
                     <td>
                        <Doing
                            item={item}
                        />
                    </td>
                    <td> 
                        <Todo
                            item={item}
                        />
                    </td>
                    <td>
                        <Delete
                            item={item}
                        />  
                    </td>               
                </tr>
            );
     
    }
}

export default Item