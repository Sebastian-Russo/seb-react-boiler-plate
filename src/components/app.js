import React from 'react';
import { hot } from "react-hot-loader";
import '../sass/app.scss';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="App">
      <h1>I'm configuring setting up Webpack!!!</h1>
      {/* <p>{`The count now is: ${counter}`}</p>
      <button onClick={setCounter(counter + 1)}>Click me</button> */}
    </div>
  )
}


export default hot(module)(App); // wrapping App with hot(module) would enable HMR in every other component down the tree
