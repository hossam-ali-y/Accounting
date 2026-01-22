/*
Author       : Dreamguys
Template Name: SmartHR - Bootstrap Admin Template
Version      : 3.4
*/

$(document).ready(function () {

  //   var table = $('#datatable').DataTable( {
  //     paging: false
  // } );

  // table.destroy();

  // table = $('#datatable').DataTable( {
  //     searching: false
  // } );

  // Datatable
  new $.fn.dataTable.Api('.datatable');
  if ($('.datatable').length > 0) {
    $('.datatable').DataTable({
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
      order: [[1, 'asc']],

    });
  }

});
