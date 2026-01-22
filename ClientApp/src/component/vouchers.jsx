import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import Header from './header';
import DeleteModal from './deleteModal';
import NewAccount from './newAccount';
import { connect } from 'react-redux';
import * as actions from "../actions/voucher";
import NewVouchers from './newVouchers';


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
const Vouchers = (props) => {

        const [currentId, setCurrentId] = useState(0)

        useEffect(() => {
                // props = props
                props.getAll()
                props.getAllAccount()
                // props.getAllCredit()
                // props.getAllDebit()
        }, [])


        const onDeleteClick = (id) => {
                if (window.confirm("Are you sure to delete this record?")) {
                        console.log(id);
                        props.deleteVoucher(id, () => window.alert("Account Deleted successfully"))
                }
        }

        const url = "https://localhost:5001/api/"

        var page = "Vouchers"

        return (

                <div>
                        {/* <NewAccount/> */}
                        <NewVouchers
                                isMaster={0}
                                masterAccounts={props.masterAccounts}
                                currentId={currentId} setCurrentId={setCurrentId}
                        // account={props.item}
                        />
                        <DeleteModal modelName={page} />
                        <Header currentId={currentId} setCurrentId={setCurrentId}
                                modal={
                                        {
                                                name: 'Voucher',
                                                id: '#new_voucher'
                                        }
                                }
                                navItems={[{ Name: 'Home', url: 'home' }, { Name: 'Financial', url: 'financial' },
                                { Name: 'Vouchers', url: 'vouchers' }]}
                                currentPage={{ Name: 'All Vouchers', url: 'allvouchers' }} />

                        <div className="row">
                                <div className="col-md-12">
                                        <div className="table-responsive">
                                                <table className="table table-striped custom-table datatable">

                                                        <thead>
                                                                <tr>
                                                                        <th>ID</th>
                                                                        <th>Account ID</th>
                                                                        <th>CID</th>
                                                                        <th className="text-nowrap">Account Name</th>
                                                                        <th>Amount </th>
                                                                        <th> Type </th>
                                                                        {/* <th>OpeningAmount</th> */}
                                                                        {/* <th>OpeningAmountType</th> */}
                                                                        {/* <th>Status</th> */}
                                                                        <th className="text-nowrap">Create Date</th>
                                                                        <th className="text-nowrap">Modified Date</th>
                                                                        <th>Description</th>
                                                                        {/* <th>Status</th> */}
                                                                        <th className="text-right no-sort">Action</th>
                                                                </tr>
                                                        </thead>

                                                        <tbody id="emp-tbody">
                                                                {
                                                                        props.list.map((account, index) =>

                                                                                <tr key={index}>
                                                                                        <td>{index+1}</td>
                                                                                        {/* <td>{account.Id}</td> */}
                                                                                        <td>{account.AccountId}</td>
                                                                                        <td>{account.Account ? account.Account.Cid : null}</td>
                                                                                        <td>
                                                                                                <h2 className="table-avatar">
                                                                                                        <a href="#" data-toggle="modal" data-target="#new_voucher"
                                                                                                             onClick={() => { setCurrentId(account.Id) }}>
                                                                                                                {account.Account ? account.Account.AccountName : null}
                                                                                                        </a>
                                                                                                </h2>
                                                                                        </td>
                                                                                        <td>{account.Amount}</td>
                                                                                        <td>{account.Type ? 'Credit' : 'Debit'}</td>
                                                                                        {/* <td>{account.OpeningAmount}</td>
                                                                                        <td>{account.OpeningAmountType ? 'Credit' : 'Debit'}</td> */}
                                                                                        {/* <td>{account.Status}</td> */}
                                                                                        <td>{account.CreateDate}</td>
                                                                                        <td>{account.ModifiedDate}</td>
                                                                                        <td>{account.Description}</td>

                                                                                        {/* <td>
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
                                                                                        </td> */}
                                                                                        <td className="text-right">
                                                                                                <div className="dropdown dropdown-action">
                                                                                                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                                                                                                className="material-icons">more_vert</i></a>
                                                                                                        <div className="dropdown-menu dropdown-menu-right">
                                                                                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#new_voucher"
                                                                                                                        onClick={() => { setCurrentId(account.Id) }}
                                                                                                                >
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
const mapStateToProps = state => ({
        list: state.AppReducer.list,
        masterAccounts: state.AppReducer.subList,
})

const mapDispatchToProps = {
        getAll: actions.getAll,
        getAllAccount: actions.getAllAccount,
        getAllDebit: actions.getAllDebit,
        getAllCredit: actions.getAllCredit,
        deleteVoucher: actions.deleteVoucher
}

export default connect(mapStateToProps, mapDispatchToProps)(Vouchers);