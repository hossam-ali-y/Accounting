import React, { Component } from 'react'
import NewAccount from './NewAccount';

class Header extends Component {
        constructor(props) {
                super(props);
                this.state = {}
        }
        render() {

                function PageNav(props) {
                        const navItems = props.navItems;
                        const currentPage = props.currentPage;
                        console.log(navItems);
                        const listItems = navItems.map((item,index) =>
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

                                                <PageNav navItems={this.props.navItems} currentPage={this.props.currentPage} />
                                                <div className="col-auto float-right ml-auto">
                                                        <a href="#" className="btn add-btn" data-toggle="modal" data-target="#new_account"><i className="fa fa-plus"></i> Add Account</a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default Header;