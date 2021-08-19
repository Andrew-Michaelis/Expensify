import { createStore } from "redux";

const incrementCount =({ incrementBy = 1 } = {})=> ({
    type: "INCREMENT",
    incrementBy
});
const decrementCount =({ decrementBy = 1} = {})=> ({
    type: "DECREMENT",
    decrementBy
})
const setCount =({ count } = {})=> ({
    type: "SET",
    count
})
const resetCount =()=> ({
    type: "RESET"
})

// Reducers
// 1. Reducers are pure functions (doesn't react outside scope)
// 2. Never change state or action 
const countReducer = createStore((state= {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + action.incrementBy};
        case "DECREMENT":
            return {count: state.count - action.decrementBy};
        case "SET":
            return {count: action.count};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 4
// });
store.dispatch(incrementCount({ incrementBy: 4 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 4 }));
store.dispatch(setCount({ count: 101 }));

unsubscribe();