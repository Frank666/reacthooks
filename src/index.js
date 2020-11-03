import React from 'react';
import ReactDOM from 'react-dom';
import UseState from './components/useState'
import UseEffect from './components/useEffect'
import Forms from './components/forms'
import UseRef from './components/useRef'
import UseContext from './components/useContext'

ReactDOM.render(
  <React.StrictMode>
    <UseState />
    <UseEffect />
    <Forms />
    <UseRef />
    <UseContext />
  </React.StrictMode>,
  document.getElementById('root')
);