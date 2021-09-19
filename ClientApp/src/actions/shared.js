var $ = window.jQuery;

export const ACTION_TYPES = {
        GET_ALL: 'GET_ALL',
        GET_SUB_LIST: 'GET_SUB_LIST',
        ADD: 'ADD',
        EDIT: 'EDIT',
        DELETE: 'DELETE',
}


export const reload = () =>{
                console.log("reloaded");
                // (document).ready(function () {
                // Datatable
                new $.fn.dataTable.Api('.datatable');
                if($('.datatable').length > 0) {
                        $('.datatable').DataTable({
                                bFilter: true,
                                retrieve: true,
                                // data: data,
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

// export const shared = () => {



//         return {
//                 reload
//         }

// }

// export default shared;


