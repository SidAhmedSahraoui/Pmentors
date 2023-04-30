import { SET_ALERT, REMOVE_ALERT } from '../constants';
import { v4 as uuid } from 'uuid';
import { Dispatch } from 'redux';

// Set Alert
export const setAlert = (msg: string, timeout = 5000) => async (dispatch: Dispatch) => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { msg, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
