import React, { Component, useEffect, useState } from 'react'
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

// function longResolve() {
//   return new Promise(res => {
//     setTimeout(res, 3000);
//   });
// }

// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   componentDidMount() {
//     longResolve().then(() => {
//       alert(this.state.count);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState(state => ({ count: state.count + 1 }));
//           }}
//         >
//           Count: {this.state.count}
//         </button>
//         <p>
//           Refresh, click the button a few times before 3 seconds. The output
//           will be whatever the count is at the moment of the console.log
//         </p>
//       </div>
//     );
//   }
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     longResolve().then(() => {
//       alert(count);
//     });
//   }, [count]);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count: {count}
//       </button>
//       <p>
//         Refresh, click the button a few times before 3 seconds. The output will
//         be whatever the count is at the moment of the console.log
//       </p>
//     </div>
//   );
// }

export default App;
