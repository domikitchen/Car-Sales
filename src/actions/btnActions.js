export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = id => {
    return { type: ADD_ITEM,  payload: id };
}

export const removeItem = id => {
    return { type: REMOVE_ITEM, payload: id };
}