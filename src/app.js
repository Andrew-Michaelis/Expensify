import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
//-------------------------Redux Imports
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }))
store.dispatch(addExpense({ description: "Gas Bill" }));
store.dispatch(addExpense({ description: "Apple Bushel", amount: 5000 }))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));