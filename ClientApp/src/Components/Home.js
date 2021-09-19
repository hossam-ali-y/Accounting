import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import logo from '../logo.svg';
// import axios from "axios"
import axios from "axios";
import Accounts from './Accounts';
import MasterAccounts from './MasterAccounts';
import Vouchers from './Vouchers';
// import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
class Home extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        accounts: []
                }
                // this.getAccoounts();
        }

        url = "https://localhost:5001/api/"

        render() {
                var page = "Accounts"
                const logoAlt = "Logo";
                return (
                        // <Router>
                                <div className="page-wrapper">
                                        <div className="content container-fluid">
                                                {/* <Accounts /> */}
                                                  <MasterAccounts/>
                                                {/* <Vouchers /> */}
                                                {/* <Switch>
                                                <Route path="/subaccounts" component={Accounts} />
                                                <Route path="/masteraccount" component={MasterAccounts} />
                                                <Route path="/vouchers" component={Vouchers} />
                                                </Switch> */}
                                        </div>
                                </div>
                        // </Router>
                );
        }
}

export default Home;