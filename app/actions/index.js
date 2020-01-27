export const APPLY_FILTER = 'action/APPLY_FILTER';
export const RESET_FILTER = "action/RESET_FILTER";
export const UPDATE_BUDGET = "action/UPDATE_BUDGET";

export function applyFilter(payload) {
    return {
        type: APPLY_FILTER,
        payload
    }
}

export function resetFilter() {
    return {
        type: RESET_FILTER
    }
}

export function updateBudget() {
    return {
        type: UPDATE_BUDGET
    }
}