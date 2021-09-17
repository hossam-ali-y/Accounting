import React from 'react'
import { PropTypes } from "prop-types";
import { connect } from 'react-redux';

const Header = (props) => {


        // const [currentId, setCurrentId] = useState(0)

        function PageNav(props) {
                const navItems = props.navItems;
                const currentPage = props.currentPage;
                console.log(navItems);
                const listItems = navItems.map((item, index) =>
                        <li className="breadcrumb-item" key={index}><a href={item.Url}>{item.Name}</a></li>
                );
                return (
                        <div className="col">
                                <h3 className="page-title">{currentPage.Name}</h3>
                                <ul className="breadcrumb">
                                        {listItems}
                                        <li className="breadcrumb-item active">{currentPage.Name}</li>
                                </ul>
                        </div>
                )
        }

        return (
                <div>

                        <div className="page-header">

                                <div className="row align-items-center">

                                        <PageNav navItems={props.navItems} currentPage={props.currentPage} />
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
                                                        <a className="btn btn-link" style={{ cursor: 'pointer' }}>
                                                                {/* <i className="fa fa-th"></i> */}
                                                                Master
                                                        </a>

                                                        <a className="btn btn-link active" style={{ cursor: 'pointer' }}>
                                                                {/* <i className="fa fa-bars"></i> */}
                                                                Sub
                                                        </a>
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
        currentPage: PropTypes.object,
        // resetForm: PropTypes.func,
}

// NewAccount.propTypes = {
//         isMaster: PropTypes.bool,
//         masterAccounts: PropTypes.array,
//         currentId: PropTypes.number,
//         setCurrentId: PropTypes.func
// }

export default connect()(Header)