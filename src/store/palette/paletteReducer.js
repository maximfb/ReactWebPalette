import { UPDATE, LOCK } from '../types';
import useColor from '../../hooks/useColor';

const handlers = {
    [UPDATE]: (state) => (state.map(i => {
        return i.lock ? i : { ...i, color: useColor.getRandomColor() };
    })),
    [LOCK]: (state, { payload }) => (state.map(i => i.id === payload ? { ...i, lock: !i.lock } : i)),
    DEFAULT: state => state
};

export const paletteReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};