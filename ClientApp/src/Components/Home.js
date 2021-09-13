import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import logo from '../logo.svg';
// import axios from "axios"
import axios from "axios";
import Accounts from './Accounts';


class Home extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        accounts: []
                }
                // this.getAccoounts();
        }

        url = "https://localhost:5001/api/"



        getAccoounts() {
                return axios.get(this.url + "Accounts")
                        .then(res => {
                                // this.accounts = res.data
                                this.setState({
                                        accounts: res.data
                                })
                                // console.log(this.accounts);
                        })
        }


        render() {
                var page = "Accounts"

                const logoAlt = "Logo";

                // function ToList(props) {
                //         const accounts = props.accounts;
                //         const listItems = accounts.map((item) =>
                //                 <li>{item.AccountName}</li>
                //         );
                //         // const listItems=
                //         // accounts.forEach(account => {

                //         //        <li>{account.AccountName}</li>
                //         // });
                //         console.log(listItems);
                //         return (
                //                 <ul>{listItems}</ul>
                //         );
                // }


                return (
                        <div className="page-wrapper">
                                <div className="content container-fluid">
                                        <Accounts />
                                        {/* 
                                        <h1 className="text-center bg-dark text-white">{page}</h1>
                                        <header className="App-header" >
                                        <ToList accounts={this.state.accounts} /> 
                    
                                                <img src={logo} className="App-logo" alt="" title={`${logoAlt} alt`} />
                                                <p>
                                                        Edit <code>src/App.js</code> and save to reload.
                                                </p>
                                                <a
                                                        className="App-link"
                                                        href="https://reactjs.org"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                >
                                                        Learn React
                                                </a>
                                        </header>
                              */}
                                </div>
                        </div>
                );
        }
}

export default Home;