import React, { useEffect, useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, alpha } from '@material-ui/core/styles';
import { Grid, TableCell } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { alpha } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import useForm from './useForm';
// import { PropType } from "prop-types";
import PropTypes from "prop-types";
import * as actions from '../actions/account';

var $ = window.jQuery
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
                minWidth: 180,
        },
        selectEmpty: {
                marginTop: theme.spacing(2),
        },
}));

const initialFieldValues = {
        Id: 0,
        Cid: '',
        ParentId: 0,
        ParentCid: '',
        AccountName: '',
        Type: 0,
        IsMaster: 0,
        OpeningAmount: 0,
        OpeningAmountType: 0,
        Satus: 0,
        Description: '',
        CreateDate: new Date(),

}


const NewAccount = (props) => {

        useEffect(() => {
                if (props.currentId != 0) {
                        setValues({
                                ...props.list.find(x => x.Id == props.currentId)
                        })
                        // console.log(props.list.find(x => x.Id == props.currentId));
                }
        }, [props.currentId])

        const classes = useStyles();

        const {
                values,
                setValues,
                handelInputChange,
                resetForm
        } = useForm(initialFieldValues, props.setCurrentId);

        const submitClick = (e) => {
                e.preventDefault()
                // console.log(values);
                const onSuccess = (operation) => {
                        window.alert("Account " + operation + " successfully");
                        resetForm()
                        actions.reload()
                }
                if (props.currentId == 0)
                        props.addAccount(values, onSuccess("Added"))
                else
                        props.editAccount(props.currentId, values, onSuccess("Updated"))
        }

        // const [values, setValues] = useState(initialFieldValues);

        // const handelInputChange = (e) => {
        //         console.log(e.target);
        //         // const [name, value] = e.target;
        //         // const name = e.target.name;
        //         // const value = e.target.value;
        //         // return (
        //         setValues({
        //                ...values,
        //                 [e.target.name]: e.target.value
        //         })
        //         // );
        // }


        return (
                <div>
                        <div id="new_account" className="modal custom-modal fade" role="dialog">
                                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title">
                                                                {props.currentId == 0 ? 'New ' : 'Edit '} Account
                                                                {/* {{account.Id>0?('EDITACCOUNT'|translate):('NEWACCOUNT'|translate)}} */}
                                                        </h5>

                                                        <div className="row modal-info col-md-8 col-sm-8">

                                                                <div className="col-md-10 col-sm-8" style={{ paddingRight: ' 0px' }}>


                                                                        <button type="button" style={{ height: 'fit-content' }} className="btn btn-success ml-1"
                                                                                onClick={submitClick}
                                                                        //       (click)="saveClick()" [disabled]="form.invalid"
                                                                        >
                                                                                {props.currentId == 0 ? 'Insert ' : 'Edit '}
                                                                                {/* {{account.Id>0?('EDIT'|translate):('ADD'|translate)}} */}
                                                                        </button>

                                                                        <button type="button" style={{ height: 'fit-content' }} className="btn btn-secondary ml-1"
                                                                                onClick={resetForm}
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
                                                        <form onSubmit={submitClick}>

                                                                <div className="row">
                                                                        <div className="col-md-12 col-lg-6:12 col-xl-12">
                                                                                <div className="card flex-fill">
                                                                                        <div className="card-body">

                                                                                                <div className="row">

                                                                                                        <div className="col-md-6">
                                                                                                                <div className="form-group  form-focus select-focus">
                                                                                                                        <input className="form-control" name="AccountName"
                                                                                                                                value={values.AccountName} onChange={handelInputChange}
                                                                                                                                required />
                                                                                                                        <label className="focus-label">
                                                                                                                                AccountName
                                                                                                                        </label>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-6">
                                                                                                                <FormControl className={classes.formControl}>
                                                                                                                        <InputLabel id="Type"> Account Type</InputLabel>
                                                                                                                        <Select
                                                                                                                                labelId="Type-helper-label"
                                                                                                                                id="Type-helper"
                                                                                                                                value={values.Type}
                                                                                                                                name="Type"
                                                                                                                                onChange={handelInputChange}>
                                                                                                                                <MenuItem value={false} >Debit</MenuItem>
                                                                                                                                <MenuItem value={true} >Credit</MenuItem>
                                                                                                                        </Select>
                                                                                                                        {/* <FormHelperText>Some important helper text</FormHelperText> */}
                                                                                                                </FormControl>
                                                                                                        </div>
                                                                                                        {/* {console.log(account)} */}
                                                                                                        {/* <TableCell></TableCell>
                                                                                                                    <Grid></Grid>
                                                                                                                <Grid></Grid> */}
                                                                                                        {/* <ToList accounts={props.accounts} /> */}

                                                                                                        {/* {console.log()} */}
                                                                                                </div >


                                                                                                <div className="row">

                                                                                                        <div className="col-md-6">
                                                                                                                <FormControl className={classes.formControl}>
                                                                                                                        <InputLabel id="demo-simple-select-helper-label">Parent Account</InputLabel>

                                                                                                                        <Select
                                                                                                                                labelId="demo-simple-select-helper-label"
                                                                                                                                id="demo-simple-select-helper"
                                                                                                                                name="ParentId"
                                                                                                                                // defaultValue={accountId}
                                                                                                                                // aria-controls={false}
                                                                                                                                value={values.ParentId}
                                                                                                                                onChange={handelInputChange}>
                                                                                                                                {
                                                                                                                                        props.masterAccounts.map((account, index) =>
                                                                                                                                                <MenuItem value={account.Id} key={index}>{account.AccountName}</MenuItem>
                                                                                                                                        )
                                                                                                                                }
                                                                                                                        </Select>
                                                                                                                        {/* <FormHelperText>Some important helper text</FormHelperText> */}
                                                                                                                </FormControl>

                                                                                                        </div>
                                                                                                        <div className="col-md-6">

                                                                                                                {/* <div className="form-group  form-focus"> */}
                                                                                                                <FormControlLabel
                                                                                                                        control={
                                                                                                                                <Checkbox
                                                                                                                                        // defaultChecked
                                                                                                                                        name="IsMaster"
                                                                                                                                        value={values.IsMaster == 0 ? 1 : 0}
                                                                                                                                        onChange={handelInputChange}
                                                                                                                                        color="primary"
                                                                                                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                                                                />
                                                                                                                        }
                                                                                                                        label=" Is Parent"
                                                                                                                />
                                                                                                                {/* <Checkbox
                                                                                                                                // defaultChecked
                                                                                                                                name="IsMaster"
                                                                                                                                value={values.IsMaster == 0 ? 1 : 0}
                                                                                                                                onChange={handelInputChange}
                                                                                                                                color="primary"
                                                                                                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                                                                        />
                                                                                                                        <input type="checkbox" name="IsMaster"  checked={values.IsMaster} value={values.IsMaster??1:0} onChange={handelInputChange} />
                                                                                                                        <label className="focus-label" > Is Parent </label> */}
                                                                                                                {/* </div> */}
                                                                                                        </div>

                                                                                                        {/* <div className="col-md-6">
                                                                                                                <div className="form-group  form-focus select-focus">

                                                                                                                        <select className="select" name="Type" value={values.Type} onChange={handelInputChange}>
                                                                                                                                <option value={0}>Debit</option>
                                                                                                                                <option value={1}>Credit</option>
                                                                                                                        </select>
                                                                                                                        <label className="focus-label" >Account Type <span className="text-danger">*</span></label>
                                                                                                                </div >
                                                                                                        </div > */}

                                                                                                </div >

                                                                                                <div className="row">

                                                                                                        <div className="col-sm-6 m-t-5">
                                                                                                                <div className="form-focus select-focus">
                                                                                                                        {/* <label>Opening Amount YER</label> */}
                                                                                                                        <input className="form-control" style={{ textAlign: 'center' }} type="number"
                                                                                                                                autoComplete="off"
                                                                                                                                value={values.OpeningAmount} onChange={handelInputChange}
                                                                                                                                name="OpeningAmount" min="0.01"
                                                                                                                                required />
                                                                                                                        <label className="focus-label" >Opening Amount YER </label>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                        <div className="col-md-6">
                                                                                                                {/* <div className="form-group  form-focus select-focus"> */}

                                                                                                                {/* <select className="select" value={values.OpeningAmountType} name="OpeningAmountType" onChange={handelInputChange}>
                                                                                                                                <option value={0}>Debit</option>
                                                                                                                                <option value={1}>Credit</option>
                                                                                                                        </select> */}
                                                                                                                <FormControl className={classes.formControl}>
                                                                                                                        <InputLabel id="OpeningAmountType">Opening Amount Type</InputLabel>
                                                                                                                        <Select
                                                                                                                                labelId="OpeningAmountType-helper-label"
                                                                                                                                id="OpeningAmountType-helper"
                                                                                                                                value={values.OpeningAmountType}
                                                                                                                                name="OpeningAmountType"
                                                                                                                                onChange={handelInputChange}>
                                                                                                                                <MenuItem value={false} >Debit</MenuItem>
                                                                                                                                <MenuItem value={true} >Credit</MenuItem>
                                                                                                                        </Select>
                                                                                                                        {/* <FormHelperText>Some important helper text</FormHelperText> */}
                                                                                                                </FormControl>

                                                                                                                {/* <label className="focus-label" >Opening Amount Type <span className="text-danger">*</span></label> */}


                                                                                                                {/* </div > */}
                                                                                                        </div >

                                                                                                        <div className="col-md-12" style={{ marginTop: '25px' }}>
                                                                                                                {/* <label className="" >STATEMENT</label> */}
                                                                                                                {/* <div className="form-group"> */}
                                                                                                                <textarea className="form-control" type="text" name="Description"
                                                                                                                        value={values.Description} onChange={handelInputChange}
                                                                                                                        minLength="3" placeholder="Description" >
                                                                                                                </textarea>

                                                                                                                {/* </div> */}
                                                                                                        </div >

                                                                                                        <div className="col-md-12">
                                                                                                                {/* <div className="form-group"> */}
                                                                                                                {/* <label className="col-form-label"> Created Date</label>
                                                                                                                        <div className="cal-icon">
                                                                                                                                { <input className="form-control datetimepicker studentDate"
                                                                                                                                        value={values.CreateDate} onChange={handelInputChange}
                                                                                                                                        type="text" autoComplete="off"
                                                                                                                                        name="CreateDate"

                                                                                                                                        minLength="10" /> }
                                                                                                                        </div> */}
                                                                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                                                                        <Grid container justifyContent="space-around">
                                                                                                                                <KeyboardDatePicker
                                                                                                                                        disableToolbar
                                                                                                                                        variant="inline"
                                                                                                                                        format="MM/dd/yyyy"
                                                                                                                                        margin="normal"
                                                                                                                                        id="date-picker-inline"
                                                                                                                                        label="Date picker inline"
                                                                                                                                        value={values.CreateDate}
                                                                                                                                        onChange={handelInputChange}
                                                                                                                                        KeyboardButtonProps={{
                                                                                                                                                'aria-label': 'change date',
                                                                                                                                        }}
                                                                                                                                />

                                                                                                                                <KeyboardDatePicker
                                                                                                                                        margin="normal"
                                                                                                                                        id="date-picker-dialog"
                                                                                                                                        label="Date picker dialog"
                                                                                                                                        format="MM/dd/yyyy"
                                                                                                                                        value={values.CreateDate}
                                                                                                                                        onChange={handelInputChange}
                                                                                                                                        KeyboardButtonProps={{
                                                                                                                                                'aria-label': 'change date',
                                                                                                                                        }}
                                                                                                                                />
                                                                                                                                <KeyboardTimePicker
                                                                                                                                        margin="normal"
                                                                                                                                        id="time-picker"
                                                                                                                                        label="Time picker"
                                                                                                                                        value={values.CreateDate}
                                                                                                                                        onChange={handelInputChange}
                                                                                                                                        KeyboardButtonProps={{
                                                                                                                                                'aria-label': 'change time',
                                                                                                                                        }}
                                                                                                                                />
                                                                                                                        </Grid>
                                                                                                                </MuiPickersUtilsProvider>
                                                                                                                {/* </div> */}
                                                                                                        </div>

                                                                                                </div >

                                                                                        </div >
                                                                                </div >
                                                                        </div >

                                                                </div >
                                                                <div className="submit-section" style={{ marginTop: '10px !important' }}>

                                                                        <button id="sendMovement" type="submit" hidden className="btn btn-primary submit-btn">
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

NewAccount.propTypes = {
        masterAccounts: PropTypes.array,
        currentId: PropTypes.number,
        setCurrentId: PropTypes.func
}

const stasteProps = state => (NewAccount.propTypes = {
        list: state.AppReducer.list
        // item: state.AppReducer.item,
})

const actionProps = NewAccount.propTypes = {
        addAccount: actions.addAccount,
        editAccount: actions.editAccount,
        reload: actions.reload,
}

export default connect(stasteProps, actionProps)(NewAccount);

