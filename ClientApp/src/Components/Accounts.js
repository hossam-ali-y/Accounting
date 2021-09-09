import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import Header from './Header';


class Accounts extends Component {
        $
        constructor(props) {
                super(props);
                this.state = {
                        accounts: []
                }
                this.getAccoounts();


        }

        url = "https://localhost:5001/api/"

        getAccoounts() {

                return axios.get(this.url + "Accounts/NotMasterAccounts")
                        .then(res => {
                                // this.accounts = res.data
                                this.setState({
                                        accounts: res.data
                                })
                                this.reload()
                                // console.log(this.accounts);
                        })
        }


        reload() {
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
        // editClick() {
        //         console.log("clivk");
        // }
        render() {

                var page = "Accounts"
                function editClick(account) {
                        // console.log(account);
                }

                function TableBody(props) {

                        const accounts = props.accounts;
                        const listItems = accounts.map((account) =>

                                <tr >
                                        <td>{account.Id}</td>
                                        <td>{account.Cid}</td>
                                        <td>
                                                <h2 className="table-avatar">
                                                        <a href="#" data-toggle="modal" data-target="#edit_employee"
                                                        >{account.AccountName}

                                                        </a>
                                                </h2>
                                        </td>
                                        <td>{account.Parent ? account.Parent.AccountName : ''}</td>
                                        <td>{account.OpeningAmount}</td>
                                        <td>{account.OpeningAmountType}</td>
                                        {/* <td>{account.Status}</td> */}
                                        <td>{account.CreateDate}</td>
                                        <td>{account.Description}</td>

                                        <td>
                                                <div className="dropdown action-label">
                                                        {
                                                                account.Status ? <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
                                                                        : <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                                        }

                                                        <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> Active</a>
                                                                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                                        </div>
                                                </div>
                                        </td>
                                        <td className="text-right">
                                                <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                                                className="material-icons">more_vert</i></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_employee"
                                                                        onClick={editClick(account)}>
                                                                        <i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"
                                                                //     (click)='deleteClick(item)'
                                                                ><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                </div>
                                        </td>
                                </tr >

                        );

                        // console.log(listItems);
                        return (

                                <tbody id="emp-tbody">
                                        {listItems}
                                </tbody>


                        );
                }


                return (

                        <div>

                                <Header navItems={[{ Name: 'Home', Url: 'home' }, { Name: 'Financial', Url: 'financial' },
                                { Name: 'Accounts', Url: 'accounts' }]}
                                        currentPage={{ Name: 'Sub Accounts', Url: 'subacounts' }} />

                                <div className="row">
                                        <div className="col-md-12">
                                                <div className="table-responsive">
                                                        <table className="table table-striped custom-table datatable">

                                                                <thead>
                                                                        <tr>
                                                                                <th>ID</th>
                                                                                <th>CID</th>
                                                                                <th className="text-nowrap">Account Name</th>
                                                                                <th>Account Parent </th>
                                                                                <th>OpeningAmount</th>
                                                                                <th>OpeningAmountType</th>
                                                                                {/* <th>Status</th> */}
                                                                                <th className="text-nowrap">Create Date</th>
                                                                                <th>Description</th>
                                                                                <th>Status</th>
                                                                                <th className="text-right no-sort">Action</th>
                                                                        </tr>
                                                                </thead>

                                                                <TableBody accounts={this.state.accounts} />

                                                        </table>
                                                </div>
                                        </div>
                                </div>
                        </div>

                );
        }
}

export default Accounts;