// import { reload } from "./account"
import api from "./api"
import { ACTION_TYPES,reload } from "./shared";

export const VOUCHER_ACTION = {
        // GET_ALL: 'GET_ALL',
        GET_ALL_DEBIT: 'GET_ALL_DEBIT',
        GET_ALL_CREDIT: 'GET_ALL_CREDIT',
        // ADD: 'ADD',
        // EDIT: 'EDIT',
        // DELETE: 'DELETE',
}

export const getAll = () => dispatch => {
        api.vouchers().getAll()
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

export const getAllAccount = () => dispatch => {
        api.account().getAllSub()
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.GET_SUB_LIST,
                                payload: res.data
                        })
                        // reload()
                        // console.log("reloaded");
                })
                .catch(err => console.log(err))

}

export const getAllDebit = () => dispatch => {
        api.vouchers().getAllDebit()
                .then(res => {
                        dispatch({
                                type: VOUCHER_ACTION.GET_ALL_DEBIT,
                                payload: res.data
                        })
                        reload()
                        // console.log("reloaded");
                })
                .catch(err => console.log(err))

}

export const getAllCredit = () => dispatch => {
        api.vouchers().getAllCredit()
                .then(res => {
                        dispatch({
                                type: VOUCHER_ACTION.GET_ALL_CREDIT,
                                payload: res.data
                        })
                        // reload()
                        // console.log(res);
                })
                .catch(err => console.log(err))

}
// export const getAllMasterAndReload = () => dispatch => {
//         api.vouchers().getAllMaster()
//                 .then(res => {
//                         dispatch({
//                                 type: ACTION_TYPES.GET_ALL_MASTER,
//                                 payload: res.data
//                         })
//                         reload()
//                         // console.log(res);
//                 })
//                 .catch(err => console.log(err))

// }



export const addVoucher = (voucher, onSuccess) => dispatch => {
        console.log(voucher);
        // voucher.Account=null
        api.vouchers().addVoucher(voucher)
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


export const editVoucher= (id, voucher, onSuccess) => dispatch => {
        voucher.Account=null
        // voucher.Attachments=null
        // voucher.StudentFees=null
        api.vouchers().editVoucher(id, voucher)
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.EDIT,
                                payload: res.data
                        })
                        console.log(res);
                        // reload()
                        onSuccess
                
                })
                .catch(err => console.log(err))

}


export const deleteVoucher = (id, onSuccess) => dispatch => {
        console.log(id);
        api.vouchers().deleteVoucher(id)
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