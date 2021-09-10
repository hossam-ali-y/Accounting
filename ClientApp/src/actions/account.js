import api from "./api"

export const ACTION_TYPES = {
        ADD: 'AAA',
        EDIT: 'EDIT',
        DELETE: 'DELETE',
        GET_ALL_SUB: 'GET_ALL_SUB'
}


function reload() {
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
                        // console.log(res);
                })
                .catch(err => console.log(err))

}