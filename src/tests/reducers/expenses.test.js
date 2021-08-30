import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", ()=> {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
})

test("should remove expense by ID", ()=> {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test("should fail to remove expense by ID", ()=> {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test("should add an expense", ()=> {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: 42,
            description: "Life, the universe",
            note: "and everything",
            amount: 42,
            createdAt: 42
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
})

test("should edit an expense", ()=> {
    const note = "abt natural"
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            note
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe("abt natural");
})

test("should fail to edit an expense (expense not found)", ()=> {
    const action = {
        type: "EDIT_EXPENSE",
        id: -1,
        updates: {
            amount: 1337
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})