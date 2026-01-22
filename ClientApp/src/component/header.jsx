import React, { useEffect, useState } from 'react'
import { PropTypes } from "prop-types";
import { connect } from 'react-redux';
import * as actions from "../actions/account";
const Header = (props) => {


        const [currentPage, setCurrentPage] = useState(props.pages[props.page<props.pages.length?props.page:0])

        // useEffect(() => {
        //         setCurrentPage(props.pages[0])
        // },[props])

        function PageNav(props) {

                const navItems = props.navItems;
                // const currentPage = props.currentPage;
                console.log(navItems);
                const listItems = navItems.map((item, index) =>
                        <li className="breadcrumb-item" key={index}><a href={item.Url}>{item.Name}</a></li>
                );
                return (
                        <div className="col">
                                <h3 className="page-title">{currentPage.name}</h3>
                                <ul className="breadcrumb">
                                        {listItems}
                                        <li className="breadcrumb-item active">{currentPage.name}</li>
                                </ul>
                        </div>
                )
        }

        const pageChanged = (index) => {
                if(index==0)
                props.getAllMasterAndReload();
                else if(index==1)
                props.getAllSubAccounts()
        }
        return (

                <div>

                        <div className="page-header">

                                <div className="row align-items-center">

                                        <PageNav navItems={props.navItems} pages={props.pages} />
                                        <div className="col-auto float-right ml-auto">
                                                <a href="#" className="btn add-btn" data-toggle="modal" data-target={props.modal.id}
                                                        onClick={() => { if (props.currentId > 0) props.setCurrentId(0) }}
                                                >
                                                        <i className="fa fa-plus"></i>
                                                        New {props.modal.name}</a>
                                                {/* <button type="button" style={{ height: 'fit-content' }} className="btn btn-secondary ml-1"
                                                        onClick={() => { props.setCurrentId(0) }}
                                                //       [disabled]="account.Id==0" (click)="initial()"
                                                > NEW
                                                </button> */}
                                                <div className="view-icons">
                                                        {
                                                                props.pages.map((page, index) =>
                                                                        <a hidden={currentPage.id==page.id} key={index} className="btn btn-link" style={{ cursor: 'pointer' }}
                                                                                onClick={() => { pageChanged(page.id); setCurrentPage(props.pages[index]); }}>
                                                                                {/* <i className="fa fa-th"></i> */}
                                                                                {page.name}
                                                                        </a>
                                                                )
                                                        }

                                                        {/* <a className="btn btn-link active" style={{ cursor: 'pointer' }}
                                                                onClick={() => { props.getAllSubAccounts(); setCurrentPage(props.pages[1]); }}>
                                                                <i className="fa fa-bars"></i>
                                                                Sub
                                                        </a> */}
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        );


}

Header.propTypes = {
        currentId: PropTypes.number,
        setCurrentId: PropTypes.func,
        modal: PropTypes.object,
        navItems: PropTypes.array,
        pages: PropTypes.array,
        page: PropTypes.number,
        // resetForm: PropTypes.func,
}

const mapStateToProps = state => ({
        // list: state.AppReducer.list,
        // masterAccounts: state.AppReducer.subList,
})

const mapDispatchToProps = {
        getAllMasterAndReload: actions.getAllMasterAndReload,
        getAllSubAccounts: actions.getAllSub,
        // getAllMasterAccounts: actions.getAllMaster,
        // deleteAccount: actions.deleteAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)