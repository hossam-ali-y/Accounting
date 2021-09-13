import api from "./api"

export const ACTION_TYPES = {
        GET_ALL_SUB: 'GET_ALL_SUB',
        GET_ALL_MASTER: 'GET_ALL_MASTER',
        ADD: 'ADD',
        EDIT: 'EDIT',
        DELETE: 'DELETE',
}


export const reload = () => {
        console.log("reloaded");
        // (document).ready(function () {
        // Datatable
        new window.jQuery.fn.dataTable.Api('.datatable');
        if (window.jQuery('.datatable').length > 0) {
                window.jQuery('.datatable').DataTable({
                        bFilter: true,
                        retrieve: true,
                        // data: dataSet,
                        // data:  this.studentService.studentDto,
                        mDataProp: "",
                        autofill: true,
                        destroy: true,
                        paging: true,
                        searching: true,
                        // dataType: "json",
                        defaultContent: " ",
                        fixedHeader: true,
                        lengthChange: true,
                        pageLength: 10,
                        className: 'datatable',
                        // "info": "Showing page _PAGE_ of _PAGES_",
                        // infoFiltered: "(filtered from _MAX_ total records)",
                        options: [
                                { label: "", value: "True" }
                        ],
                        aoColumnDefs: [{
                                targets: 0,
                                orderable: true,
                                className: 'select-checkbox'

                        }],
                        // dom: 'Bfrtip',
                        buttons: [
                                'selectAll',
                                'selectNone'
                        ],
                        select: {
                                // style: 'os',
                                selector: 'td:first-child',
                        },
                        order: [[0, 'des']],

                });
        }
        //       })

}


export const getAllSub = () => dispatch => {
        api.account().getAllSub()
                .then(res => {
                        dispatch({
                                type: ACTION_TYPES.GET_ALL_SUB,
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
                                type: ACTION_TYPES.GET_ALL_MASTER,
                                payload: res.data
                        })
                        // reload()
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
                                payload: { Id: id, ...account }
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