import moment from "moment";

export default [{
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