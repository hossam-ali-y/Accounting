import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from "prop-types";

const DeleteModal = (props) => {
        return (
                <div className="modal custom-modal fade" id="delete_account" role="dialog">
                        <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                        <div className="modal-body">
                                                <div className="form-header">
                                                        <h3>Delete {props.modelName}</h3>
                                                        <p>هل أنت متأكد من أنك  تريد الحذف؟</p>
                                                </div>
                                                <div className="modal-btn delete-action">
                                                        <div className="row">
                                                                <div className="col-6">
                                                                        <a id="del" href="#" className="btn btn-primary continue-btn"
                                                                        // (click)='deleteConfClick()'
                                                                        >حذف</a>
                                                                </div>
                                                                <div className="col-6">
                                                                        <a href="#" data-dismiss="modal" className="btn btn-primary cancel-btn">إلغاء</a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div >
        );
}

DeleteModal.propTypes={
        modelName:PropTypes.string
}

export default connect()(DeleteModal);