import moment from "moment";
import selectExpenses from "../../selectors/expenses";

const expenses =[{
    id: "1",
    description: "The Gub",
    note: "Whyyyyy",
    amount: 195,
    createdAt: 0
},{
    id: "2",
    description: "Skullmasher",
    note: "A real head turner... turned to mush... ahahahaha!",
    amount: 195000,
    createdAt: moment(0).subtract(4, "days").valueOf()
},{
    id: "3",
    description: "Double Penetrating Unkempt Herald",
    note: "Did I fire six shots, or only five? Three? Seven. Whatever.",
    amount: 395,
    createdAt: moment(0).add(4, "days").valueOf()
}]

test("should filter by text value", ()=> {
    const filters = {
        text: "a",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1] ])
})

test("should filter by startDate", ()=> {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0] ])
})

test("should filter by endDate", ()=> {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ])
})

test("should sort by date", ()=> {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test("should sory by amount", ()=> {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])
})