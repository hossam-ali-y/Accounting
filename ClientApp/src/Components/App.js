import React, { Component } from 'react';
import './App.css';
import Home from './Home';

// import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import SidBar from './SidBar';

class App extends Component {

  render() {
    return (

      <div className="main-wrapper">
        <Navbar userName="Hossam" />
        <SidBar />
        <Home/>

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
