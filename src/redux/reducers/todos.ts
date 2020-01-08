import { ADD_ITEM, DELETE_ITEM, DONE_ALL, SET_DOING, SET_DONE, SET_TODO } from '../actionTypes';

export  interface IState{

    objects: {task:string,describe:string,stage:string}[];
    number: number;
}

const initialState: IState = {
    objects: [{task:'task0',describe:'describe0',stage:'todo'}],
    number: 1
}


export default function(state = initialState , action:{type:string,task:string}) {
    state = {...state};
    switch(action.type) {
        // 删除 指定task item
        case DELETE_ITEM: {
            state.objects = state.objects.filter(p =>{
                return p.task !== action.task;
            })

            return state
        }
        
        //设置指定task  object的 stage 为 todo
        case SET_TODO: {
            state.objects.forEach(p =>{
                if(p.task === action.task) p.stage = 'todo';
                return p;
            })
            return state
    
        }

        //设置指定task  object的 stage 为 doing
        case SET_DOING: {
            state.objects.forEach(p =>{
                if(p.task === action.task) {
                    p.stage = 'doing';
                }
                return p;
            })
            return state
        }

        //设置指定task  object的 stage 为 done
        case SET_DONE: {
            state.objects.forEach(p =>{
                if(p.task === action.task) {
                    p.stage = 'done';
                }
                return p;
            })
            return state
        }

        // 增加一个item
        case ADD_ITEM: {
            let {objects,number} = state
            ++state.number 
            objects.push({task:`task${number}`,describe:`describe${number}`,stage:'todo'})
            return state;
        }
        
        // 把所有objects 的stage 设置为 done
        case DONE_ALL: {
            state.objects = state.objects.map(p =>{
                p.stage = 'done';
                return p;
            });
            return state
        }

        default : 
            return state
    }
}