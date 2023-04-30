import { SET_ALERT, REMOVE_ALERT } from '../constants';
import { AnyAction } from 'redux'

const initialState : any[] = [];

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload];

        case REMOVE_ALERT:
            return state.filter((alert) => alert.id !== action.payload);

        default:
            return state;
    }
};
