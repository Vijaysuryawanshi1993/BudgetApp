import bills from "../resources/bills.json";
import {
    APPLY_FILTER,
    RESET_FILTER,
    UPDATE_BUDGET
} from "../actions";
import {
    filterList
} from "../common"

const initialState = {
    expenseList: bills,
    filterList: [...new Set(bills.map(item => item.category))],//bills.filter((data, index) => { return bills.indexOf(bills[index].category == data.category) })
    appliedFilterTxt: "filter"
}

const PersistedReducer = function (state = initialState, action) {
    switch (action.type) {
        case APPLY_FILTER:
            let filteredList = filterList(action.payload, state.expenseList);
            return {
                ...state,
                expenseList: filteredList,
                appliedFilterTxt: action.payload
            }

        case RESET_FILTER:
            return {
                ...initialState
            }

        case UPDATE_BUDGET:
            return {
                ...state,
                expenseList: action.payload
            }

        default:
            return state;
    }
}

export default PersistedReducer;