import moment from "moment";

const filters = {
    test: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: "a",
    sortBy: "amount",
    startDate: moment(0),
    endDate: moment(3).add(3, "days")
};

export { filters, altFilters };