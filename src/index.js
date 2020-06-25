import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//card component is the robofriends charCards
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
//  registeredServiceWorker();
 
serviceWorker.unregister();
