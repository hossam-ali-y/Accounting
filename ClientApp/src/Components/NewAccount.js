import React, { useEffect, useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TableCell } from '@material-ui/core';

// class NewAccount extends Component {
//         constructor(props) {
//                 super(props);
//                 this.state = {
//                         account: props.account

//                 }
//         }





const useStyles = makeStyles((theme) => ({
        formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
        },
        selectEmpty: {
                marginTop: theme.spacing(2),
        },
}));

export default function NewAccount(props) {

        const classes = useStyles();
        const [accountId, setAccount] = useState(0);
        const [id, setId] = useState(0);
        const [accountName, setAccountName] = useState('');

        useEffect(() => {
                //      setId(props.id>0?props.id:0);
                // console.log(props.id);
                // setAccount(props.account.Id)
                // setId(props.account.Id)
        })

        const handleChange = (event) => {
                setId(event.target.value);
                console.log(event.target.value);
                // console.log(id);
        };
        const handleChangeAccountName = (event) => {
                setAccountName(event.target.value);
        };


        // function ToList(props) {
        //         const accounts = props.accounts
        //         const list = accounts.map((account) =>
        //                 <MenuItem value={account.Id}>{account.AccountName}</MenuItem>
        //         )
        //         // console.log(list);
        //         return (

        //                 <Select
        //                         labelId="demo-simple-select-helper-label"
        //                         id="demo-simple-select-helper"
        //                         value={id}
        //                         onChange={handleChange}
        //                 >
        //                         <MenuItem value="">
        //                                 <em>None</em>
        //                         </MenuItem>
        //                         {list}
        //                 </Select>

        //         )
        // }
        return (
                <div>
                        <div id="new_account" className="modal custom-modal fade" role="dialog">
                                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title">
                                                                New Account
                                                                {/* {{account.Id>0?('EDITACCOUNT'|translate):('NEWACCOUNT'|translate)}} */}
                                                        </h5>

                                                        <div className="row modal-info col-md-8 col-sm-8">

                                                                <div className="col-md-10 col-sm-8" style={{ paddingRight: ' 0px' }}>


                                                                        <button type="button" style={{ height: 'fit-content' }} className="btn btn-success ml-1"
                                                                        //       (click)="saveClick()" [disabled]="form.invalid"
                                                                        >
                                                                                Add
                                                                                {/* {{account.Id>0?('EDIT'|translate):('ADD'|translate)}} */}
                                                                        </button>

                                                                        <button type="button" style={{ height: 'fit-content' }} className="btn btn-secondary ml-1"
                                                                        //       [disabled]="account.Id==0" (click)="initial()"
                                                                        > NEW
                                                                        </button>

                                                                        <div className="float-right ml-auto">
                                                                                <a href="#" target="_blank" className="btn btn-white">
                                                                                        <i className="fa fa-print fa-lg"></i> Print
                                                                                </a>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                        </button>
                                                </div >

                                                <div className="modal-body">
                                                        <form >

                                                                <div className="row">
                                                                        <div className="col-md-12 col-lg-6:12 col-xl-12">
                                                                                <div className="card flex-fill">
                                                                                        <div className="card-body">

                                                                                                <div className="row">

                                                                                                        <div className="col-md-6">
                                                                                                                <div className="form-group  form-focus select-focus">
                                                                                                                        <input className="form-control" name="AccountId"
                                                                                                                                value={accountName} onChange={handleChangeAccountName}
                                                                                                                                required />
                                                                                                                        <label className="focus-label">
                                                                                                                                AccountName
                                                                                                                        </label>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                        {/* {console.log(account)} */}
                                                                                                        <div className="col-md-6">
                                                                                                                <FormControl className={classes.formControl}>
                                                                                                                        <InputLabel id="demo-simple-select-helper-label">Account {id}</InputLabel>
                                                                                                                        {/* <TableCell></TableCell>
                                                                                                                    <Grid></Grid>
                                                                                                                <Grid></Grid> */}
                                                                                                                        {/* <ToList accounts={props.accounts} /> */}

                                                                                                                        {/* {console.log()} */}
                                                                                                                        <Select
                                                                                                                                labelId="demo-simple-select-helper-label"
                                                                                                                                id="demo-simple-select-helper"
                                                                                                                                // defaultValue={accountId}
                                                                                                                                // aria-controls={false}
                                                                                                                                value={id}
                                                                                                                                onChange={handleChange}>
                                                                                                                                {
                                                                                                                                        props.accounts.map((account, index) =>
                                                                                                                                                <MenuItem value={account.Id} key={index}>{account.AccountName}</MenuItem>
                                                                                                                                        )
                                                                                                                                }
                                                                                                                        </Select>

                                                                                                                        {/* <MenuItem value={20}>Twenty</MenuItem>
                                                                                                                                <MenuItem value={30}>Thirty</MenuItem> */}

                                                                                                                        <FormHelperText>Some important helper text</FormHelperText>
                                                                                                                </FormControl>

                                                                                                                {/* <div className="form-group  form-focus select-focus">

                                                                                                                                <select class="select">
                                                                                                                                        <option>Please Select</option>
                                                                                                                                        <option selected>Barry Cuda</option>
                                                                                                                                        <option>Tressa Wexler</option>
                                                                                                                                </select>
                                                                                                                                <label className="focus-label" >PARENTACCOUNT <span class="text-danger">*</span></label>
                                                                                                                        </div> */}

                                                                                                        </div>
                                                                                                </div >


                                                                                                <div className="row">

                                                                                                        <div className="col-md-6">

                                                                                                                <div className="form-group  form-focus">
                                                                                                                        <input type="checkbox" name="IsMaster" />
                                                                                                                        <label className="focus-label"> ISMASTER </label>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                        <div className="col-md-6">
                                                                                                                <div className="form-group  form-focus select-focus">

                                                                                                                        <select className="select" value={0}>
                                                                                                                                <option value={0}>Please Select</option>
                                                                                                                                <option value={1}>Barry Cuda</option>
                                                                                                                                <option value={2}>Tressa Wexler</option>
                                                                                                                        </select>
                                                                                                                        <label className="focus-label" >ACCOUNTTYPE <span className="text-danger">*</span></label>
                                                                                                                </div >
                                                                                                        </div >

                                                                                                </div >

                                                                                                <div className="row">

                                                                                                        <div className="col-sm-6">
                                                                                                                <div className="form-group form-focus">
                                                                                                                        <label>OPENINGAMOUNT YR</label>
                                                                                                                        <input className="form-control" style={{ textAlign: 'center' }} type="number"
                                                                                                                                autoComplete="off"
                                                                                                                                name="OpeningAmount" min="0.01"
                                                                                                                                required />

                                                                                                                </div>
                                                                                                        </div>

                                                                                                        <div className="col-md-6">
                                                                                                                <div className="form-group  form-focus select-focus">

                                                                                                                        <select className="select" value={1}>
                                                                                                                                <option value={0}>Please Select</option>
                                                                                                                                <option value={1}>Barry Cuda</option>
                                                                                                                                <option value={2}>Tressa Wexler</option>
                                                                                                                        </select>
                                                                                                                        <label className="focus-label" >OPENINGAMOUNTTYPE <span className="text-danger">*</span></label>


                                                                                                                </div >
                                                                                                        </div >

                                                                                                        <div className="col-md-12" style={{ marginTop: '25px' }}>
                                                                                                                {/* <label className="" >STATEMENT</label> */}
                                                                                                                <div className="form-group">
                                                                                                                        <textarea className="form-control" type="text" name="Description"
                                                                                                                                minLength="3" placeholder="Description">
                                                                                                                        </textarea>

                                                                                                                </div>
                                                                                                        </div >

                                                                                                        <div className="col-md-6">
                                                                                                                <div className="form-group">
                                                                                                                        <label className="col-form-label"> CREATEDDATE</label>
                                                                                                                        <div className="cal-icon">
                                                                                                                                <input className="form-control datetimepicker studentDate"
                                                                                                                                        type="text" autoComplete="off"
                                                                                                                                        name="CreateDate"

                                                                                                                                        minLength="10" />
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                </div >

                                                                                        </div >
                                                                                </div >
                                                                        </div >

                                                                </div >
                                                                <div className="submit-section" style={{ marginTop: '10px !important' }}>

                                                                        <button id="sendMovement" hidden className="btn btn-primary submit-btn">
                                                                                Submit
                                                                        </button>

                                                                </div >
                                                        </form >
                                                </div >
                                        </div >
                                </div >
                        </div >
                </div >
        );
}

// export default NewAccount;
