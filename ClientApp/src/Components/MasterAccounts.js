import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import Header from './Header';
import DeleteModal from './DeleteModal';
import NewAccount from './NewAccount';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../actions/account';
import * as actions from "../actions/account";
import useForm from './useForm';


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
// const initialFieldValues = {
//         Id: 0,
//         Cid: '',
//         ParentId: 0,
//         ParentCid: '',
//         AccountName: '',
//         Type: 0,
//         IsMaster: 0,
//         OpeningAmount: 0,
//         OpeningAmountType: 0,
//         Satus: 0,
//         Description: '',
//         CreateDate: new Date(),

// }

const MasterAccounts = (props) => {

        const [currentId, setCurrentId] = useState(0)

        useEffect(() => {
                // props = props
                if (props.page == 0)
                        props.getMasterList()
                else if (props.page == 1)
                        props.getSubList()

                props.getSub()
        }, [])



        const onDeleteClick = (id) => {
                if (window.confirm("Are you sure to delete this record?")) {
                        console.log(id);
                        props.deleteAccount(id, () => window.alert("Account Deleted successfully"))
                }
        }

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


        // function editClick(account) {
        //         console.log("hjjj");
        //         console.log(account);
        // }

        // function TableBody(props) {

        //         const accounts = this.props.accounts;
        //         console.log(accounts);


        //         // console.log(listItems);
        //         return (
        //                 accounts
        //         );
        // }



        var page = "Accounts"

        return (

                <div>
                        {/* <NewAccount/> */}
                        <NewAccount
                                isMaster={1}
                                masterAccounts={props.masterAccounts}
                                currentId={currentId} setCurrentId={setCurrentId}
                        // account={props.item}
                        />
                        <DeleteModal modelName={page} />
                        <Header currentId={currentId} setCurrentId={setCurrentId}
                                modal={
                                        {
                                                name: 'Account',
                                                id: '#new_account'
                                        }
                                }
                                navItems={[{ Name: 'Home', url: 'home' }, { Name: 'Financial', url: 'financial' },
                                { Name: 'Accounts', url: 'accounts' }]}
                                pages={props.pages} page={props.page} />

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
                                                                        <th>Account Type </th>
                                                                        <th>OpeningAmount</th>
                                                                        <th>OpeningAmountType</th>
                                                                        {/* <th>Status</th> */}
                                                                        <th className="text-nowrap">Create Date</th>
                                                                        <th className="text-nowrap">Modified Date</th>
                                                                        <th>Description</th>
                                                                        <th>Status</th>
                                                                        <th className="text-right no-sort">Action</th>
                                                                </tr>
                                                        </thead>

                                                        <tbody id="emp-tbody">
                                                                {
                                                                        props.list.map((account, index) =>

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
                                                                                        <td>{account.Type ? 'Credit' : 'Debit'}</td>
                                                                                        <td>{account.OpeningAmount}</td>
                                                                                        <td>{account.OpeningAmountType ? 'Credit' : 'Debit'}</td>
                                                                                        {/* <td>{account.Status}</td> */}
                                                                                        <td>{account.CreateDate}</td>
                                                                                        <td>{account.ModifiedDate}</td>
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
                                                                                                                        onClick={() => { setCurrentId(account.Id) }}>
                                                                                                                        <i className="fa fa-pencil m-r-5"></i> Edit</a>

                                                                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_accounts"
                                                                                                                        onClick={() => { onDeleteClick(account.Id) }}
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
const stasteProps = state => (MasterAccounts.propTypes = {
        list: state.AppReducer.list,
        masterAccounts: state.AppReducer.subList,
        pages: [
                { id: 0, name: 'Master Accounts', url: 'master' },
                { id: 1, name: 'Sub Accounts', url: 'sub' }
        ],
        page: 0
})

const actionProps = MasterAccounts.propTypes = {
        getMasterList: actions.getAllMasterAndReload,
        // getList: actions.getAllSub,
        getSubList: actions.getAllSub,
        getSub: actions.getAllMaster,

        deleteAccount: actions.deleteAccount
}

// Accounts.propTypes = {
//         names: PropTypes.array.isRequired,
//     };
export default connect(stasteProps, actionProps)(MasterAccounts);