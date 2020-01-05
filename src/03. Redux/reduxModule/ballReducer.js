const CHANGE_OWNER = 'BALL/CHAGNE/OWNER';

export const getActionChangeOwner = (owner) => ({
    type: CHANGE_OWNER,
    owner : owner
});

const initialState = {
    owner: 'parent',
};

export default function ballReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_OWNER:
            return {
                ...state,
                owner: action.owner,
            };
        default:
            return state;
    }
}