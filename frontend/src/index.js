import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import JavascriptTimeAgo from 'javascript-time-ago';

// The desired locales.
import en from 'javascript-time-ago/locale/en';
import br from 'javascript-time-ago/locale/br';

// Initialize the desired locales.
JavascriptTimeAgo.locale(en);
JavascriptTimeAgo.locale(br);

ReactDOM.render(<App />, document.getElementById('root'));
