import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  const number1 = 2;
  const number2 = 5;
  return(
    <React.Fragment>
      {
        number1 + number2
      }
    </React.Fragment>
  )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)