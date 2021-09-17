import { ACCOUNT_ACTION } from "../actions/account"
import { ACTION_TYPES } from "../actions/shared"


const initialState = {
        list: [],
        subList: [],
        // masterAccounts: [],
        // item: {}
}

export const AppReducer = (state = initialState, action) => {
        switch (action.type) {
                case ACTION_TYPES.GET_ALL:
                        return {
                                ...state,
                                list: [...action.payload],
                                // item: action.payload[0]
                        }

                case ACCOUNT_ACTION.GET_ALL_SUB:
                        return {
                                ...state,
                                list: [...action.payload],
                                // item: action.payload[0]
                        }
                case ACCOUNT_ACTION.GET_ALL_MASTER:
                        return {
                                ...state,
                                list: [...action.payload],
                                // item: action.payload[0]
                        }

                case ACTION_TYPES.GET_SUB_LIST:
                        return {
                                ...state,
                                subList: [...action.payload],
                                // item: action.payload[0]
                        }

                case ACTION_TYPES.ADD:
                        return {
                                ...state,
                                list: [...state.list, action.payload],
                        }
                case ACTION_TYPES.EDIT:
                        return {
                                ...state,
                                list: state.list.map(x => x.Id == action.payload.Id ? action.payload : x)
                        }
                case ACTION_TYPES.DELETE:
                        return {
                                ...state,
                                list: state.list.filter(x => x.Id != action.payload),
                        }
                default:
                        return state
        }
}