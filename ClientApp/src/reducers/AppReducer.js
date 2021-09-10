import { ACTION_TYPES } from "../actions/account"


const initialState = {
        list: [],
        item:{}
}

export const AppReducer = (state = initialState, action) => {
        switch (action.type) {
                case ACTION_TYPES.GET_ALL_SUB:
                        return {
                                state,
                                list: action.payload,
                                item:action.payload[0]
                        }
                case 'addAccount':
                        return {

                        }
                default:
                        return state
        }
}