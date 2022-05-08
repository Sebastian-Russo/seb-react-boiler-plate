import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootId = document.getElementById("root");

ReactDOM.render(
    <App />,
  rootId    
);


if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootId
    );
  });
}

