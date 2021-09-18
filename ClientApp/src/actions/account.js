import api from "./api"
import { ACTION_TYPES, reload } from "./shared";


export const ACCOUNT_ACTION = {
        // GET_ALL:'GET_ALL',
        GET_ALL_SUB: 'GET_ALL_SUB',
        GET_ALL_MASTER: 'GET_ALL_MASTER',
        // ADD: 'ADD',
        // EDIT: 'EDIT',
        // DELETE: 'DELETE',
}


export const getAll = () => dispatch => {
        api.account().getAll()
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.GET_ALL,
                                payload: res.data
                        })
                        reload()
                        // console.log("reloaded");
                })
                .catch(err => console.log(err))

}
export const getAllMaster = () => dispatch => {
        api.account().getAllMaster()
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.GET_SUB_LIST,
                                payload: res.data
                        })
                        // reload()
                        // console.log(res);
                })
                .catch(err => console.log(err))

}

export const getAllSub = () => dispatch => {
        api.account().getAllSub()
                .then(res => {
                        dispatch({
                                type: ACCOUNT_ACTION.GET_ALL_SUB,
                                payload: res.data
                        })
                        reload()
                        // console.log("reloaded");
                })
                .catch(err => console.log(err))

}

export const getAllMasterAndReload = () => dispatch => {
        api.account().getAllMaster()
                .then(res => {
                        dispatch({
                                type: ACCOUNT_ACTION.GET_ALL_MASTER,
                                payload: res.data
                        })
                        reload()
                        // console.log(res);
                })
                .catch(err => console.log(err))

}



export const addAccount = (account, onSuccess) => dispatch => {
        console.log(account);
        api.account().addAccount(account)
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.ADD,
                                payload: res.data
                        })
                        onSuccess()

                        // console.log(res);
                })
                .then(res => {
                        reload()
                })

                .catch(err => console.log(err))



}


export const editAccount = (id, account, onSuccess) => dispatch => {
        api.account().editAccount(id, account)
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.EDIT,
                                payload: res.data
                        })
                        // reload()
                        onSuccess()
                        // console.log(res);
                })
                .catch(err => console.log(err))

}


export const deleteAccount = (id, onSuccess) => dispatch => {
        console.log(id);
        api.account().deleteAccount(id)
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.DELETE,
                                payload: id
                        })
                        onSuccess()
                        // reload()
                        // console.log(res);
                })
                .catch(err => console.log(err))

}