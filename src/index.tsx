import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { List } from './components/List';

const task = '任务';
const describe = '描述';


ReactDOM.render(
    <List 
    task = {task}
    describe = {describe} 
    />,
    document.getElementById("example")
);