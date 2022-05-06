// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action: { type: string; }) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
};

// const store = configureStore(counterReducer);
const store = createStore(counterReducer);

export default store;