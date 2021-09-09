import React, { Component } from 'react'

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
                        const listItems = navItems.map((item) =>
                                <li class="breadcrumb-item"><a href={item.Url}>{item.Name}</a></li>
                        );
                        return (
                                <div class="col">
                                        <h3 class="page-title">{currentPage.Name}</h3>
                                        <ul class="breadcrumb">
                                                {listItems}
                                                <li class="breadcrumb-item active">{currentPage.Name}</li>
                                        </ul>
                                </div>
                        )
                }

                return (

                        <div class="page-header">


                                <div class="row align-items-center">

                                        <PageNav navItems={this.props.navItems} currentPage={this.props.currentPage} />
                                        <div class="col-auto float-right ml-auto">
                                                <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_salary"><i class="fa fa-plus"></i> Add Account</a>
                                        </div>
                                </div>
                        </div>

                );
        }
}

export default Header;