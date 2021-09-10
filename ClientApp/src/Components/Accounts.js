import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import Header from './Header';
import DeleteModal from './DeleteModal';
import NewAccount from './NewAccount';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../actions/account';
import * as actions from "../actions/account";


//  
// class Accounts extends Component {

// constructor(props) {
//         super(props);
//         this.state = {
//                 account: {},
//                 accounts: []
//         }
//         this.getAccoounts();
//         // this.editClick = this.editClick.bind(this);

// }
const Accounts = (props) => {

        useEffect(() => {
                props.getAllSubAccounts()
        }, [])

        const url = "https://localhost:5001/api/"

        // function getAccoounts() {

        //         return axios.get(this.url + "Accounts/NotMasterAccounts")
        //                 .then(res => {
        //                         // this.accounts = res.data
        //                         this.setState({
        //                                 accounts: res.data
        //                         })
        //                         this.reload()
        //                         // console.log(this.accounts);
        //                 })
        // }


        function editClick(account) {
                console.log("hjjj");
                console.log(account);
        }

        function TableBody(props) {

                const accounts = props.accounts;
                console.log(accounts);


                // console.log(listItems);
                return (
                        accounts
                );
        }


        // const [username, setUserName] = useState(initialState)
        var page = "Accounts"
        // function editClick(account) {
        //         // console.log(account);
        // }



        return (

                <div>
                        {/* <NewAccount/> */}
                        <NewAccount accounts={props.list} account={props.item} />
                        <DeleteModal modelName={page} />
                        <Header navItems={[{ Name: 'Home', url: 'home' }, { Name: 'Financial', url: 'financial' },
                        { Name: 'Accounts', url: 'accounts' }]}
                                currentPage={{ Name: 'Sub Accounts', url: 'subacounts' }} />

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

                                                        <tbody id="emp-tbody">
                                                                {
                                                                        props.list.map((account,index) =>

                                                                                <tr key={index}>
                                                                                        <td>{account.Id}</td>
                                                                                        <td>{account.Cid}</td>
                                                                                        <td>
                                                                                                <h2 className="table-avatar">
                                                                                                        <a href="#" data-toggle="modal" data-target="#edit_employee">{account.AccountName}
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
                                                                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#new_account"
                                                                                                                >
                                                                                                                        <i className="fa fa-pencil m-r-5"></i> Edit</a>
                                                                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_account"
                                                                                                                //     (click)='deleteClick(item)'
                                                                                                                ><i className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </td>
                                                                                </tr >
                                                                        )
                                                                }
                                                        </tbody>


                                                </table>
                                        </div>
                                </div>
                        </div>

                </div>



        );

}
const stasteProps = state => ({
        list: state.AppReducer.list,
        item:state.AppReducer.item
})

const actionProps = {
        getAllSubAccounts: actions.getAllSub
}
export default connect(stasteProps, actionProps)(Accounts);