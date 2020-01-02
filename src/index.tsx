import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { List } from './components/List';

const task = ['001','002','003'];
const describe = ['任务一', '任务二','任务三'];


ReactDOM.render(
    <List 
    task = {task}
    describe = {describe} 
    />,
    document.getElementById("example")
);