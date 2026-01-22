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
import * as actions from '../actions/voucher';
import { reload } from '../actions/shared';

var $ = window.jQuery


const useStyles = makeStyles((theme) => ({
        formControl: {
                margin: theme.spacing(1),
                minWidth: 180,
        },
        selectEmpty: {
                marginTop: theme.spacing(2),
        },
}));


export const initialFieldValues = {
        Id: 0,
        AccountId: 0,
        Cid: '',
        // AccountName: '',
        Amount: 0,
        Type: 0,
        // IsMaster: false,
        // OpeningAmount: 0,
        // OpeningAmountType: 0,
        // Satus: 0,
        Description: '',
        CreateDate: new Date(),
        ModifiedDate: null,

}


const NewVouchers = (props) => {

        useEffect(() => {
                // props.getAllAccount()
                // console.log(props.currentId);
                if (props.currentId != 0) {

                        setValues(
                                // props.isMaster == 1 ? { ...props.masterAccounts.find(x => x.Id == props.currentId) }: 
                                { ...props.list.find(x => x.Id == props.currentId) }
                        )
                        // console.log(props.list.find(x => x.Id == props.currentId));
                }
                else {
                        resetForm()
                }
        }, [props.currentId])

        const {
                values,
                setValues,
                handelInputChange,
                resetForm,
        } = useForm(initialFieldValues, props.setCurrentId);


        const classes = useStyles();


        // const resetFormAndSetValues = () => {
        //         return resetForm
        // }

        const submitClick = (e) => {
                e.preventDefault()
                // console.log(values);
                const onSuccess = (operation) => {
                        window.alert("Voucher " + operation + " successfully");
                        resetForm()
                        reload()
                }

                if (props.currentId == 0)
                        props.addVoucher(values, onSuccess("Added"))
                else
                        props.editVoucher(props.currentId, values, onSuccess("Updated"))
        }


        return (
                <div>
                        <div id="new_voucher" className="modal custom-modal fade" role="dialog">
                                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title">
                                                                {props.currentId == 0 ? 'New ' : 'Edit '} Voucher
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

                                                                        <div className={`float-right ml-auto ${!(props.currentId > 0) ? 'd-none' : null}`}>
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
                                                                                                                <FormControl className={classes.formControl}>
                                                                                                                        <InputLabel id="demo-simple-select-helper-label">Choose Account {values.AccountId}</InputLabel>

                                                                                                                        <Select
                                                                                                                                labelId="demo-simple-select-helper-label"
                                                                                                                                id="demo-simple-select-helper"
                                                                                                                                name="AccountId"
                                                                                                                                value={values.AccountId}
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
                                                                                                                <FormControl className={classes.formControl}>
                                                                                                                        <InputLabel id="Type"> Voucher Type</InputLabel>
                                                                                                                        <Select
                                                                                                                                labelId="Type-helper-label"
                                                                                                                                id="Type-helper"
                                                                                                                                value={values.Type}
                                                                                                                                name="Type"
                                                                                                                                onChange={handelInputChange}>
                                                                                                                                <MenuItem value={false} >Debit</MenuItem>
                                                                                                                                <MenuItem value={true} >Credit</MenuItem>
                                                                                                                        </Select>

                                                                                                                </FormControl>
                                                                                                        </div>

                                                                                                </div >


                                                                                                <div className="row">

                                                                                                        <div className="col-sm-6 m-t-5">
                                                                                                                <div className="form-focus select-focus">
                                                                                                                        {/* <label>Amount YER</label> */}
                                                                                                                        <input className="form-control" style={{ textAlign: 'center' }} type="number"
                                                                                                                                autoComplete="off"
                                                                                                                                value={values.Amount} onChange={handelInputChange}
                                                                                                                                name="Amount" min="0.01"
                                                                                                                                required />
                                                                                                                        <label className="focus-label" >Amount YER </label>
                                                                                                                </div>
                                                                                                        </div>

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

                                                                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                                                                        <Grid container justifyContent="space-around">
                                                                                                                                <KeyboardDatePicker
                                                                                                                                        disableToolbar
                                                                                                                                        variant="inline"
                                                                                                                                        format="dd/MM/yyyy"
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
                                                                                                                                        className={!(props.currentId > 0) ? 'd-none' : null}
                                                                                                                                        disabled={true}
                                                                                                                                        margin="normal"
                                                                                                                                        id="date-picker-dialog"
                                                                                                                                        label="Date picker dialog"
                                                                                                                                        format="dd/MM/yyyy"
                                                                                                                                        value={values.ModifiedDate}
                                                                                                                                        onChange={handelInputChange}
                                                                                                                                        KeyboardButtonProps={{
                                                                                                                                                'aria-label': 'change date',
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


NewVouchers.propTypes = {
        // isMaster: PropTypes.bool,
        masterAccounts: PropTypes.array,
        currentId: PropTypes.number,
        setCurrentId: PropTypes.func
}

const stasteProps = state => (NewVouchers.propTypes = {
        list: state.AppReducer.list,
        // subList: state.AppReducer.subList
        // item: state.AppReducer.item,
})

const actionProps = NewVouchers.propTypes = {
        // getAllAccount: actions.getAllAccount,
        addVoucher: actions.addVoucher,
        editVoucher: actions.editVoucher,
        reload: reload,
}

export default connect(stasteProps, actionProps)(NewVouchers);
