import { SHOW, HIDE } from '../types';

const handlers = {
    [SHOW]: (state, { payload }) => ({...payload, visible: true}),
    [HIDE]: (state) => (!state.visible),
    DEFAULT: state => state
};

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};