import React, { Component } from 'react';
import Home from './home';

// import ReactDOM from 'react-dom';
import Navbar from './navbar';
import SidBar from './sidBar';
import { Provider } from "react-redux";
import { store } from "../actions/store";


class App extends Component {

  render() {
    return (

      <div className="main-wrapper">
        <Provider store={store}>
          <Navbar userName="Hossam" />
          {/* <SidBar /> */}
          <Home />
        </Provider>
      </div>
    );
  }
}

// function App() {
//   var page="home"
//   return (

//     <div className="App">
//           <h1>{page}</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
