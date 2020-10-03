import React from 'react';
import ReactDOM from 'react-dom';
import '../src/theme/index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))

// ReactDOM.render(<App/>, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
    const changeBlock = function changeBlock() {
        const browserHeight = document.documentElement.clientHeight;
        [].forEach.call(document.querySelectorAll('.app'), (el) => {
            el.style.height = `${browserHeight}px`;
        });
    };

    window.onresize = changeBlock;
    changeBlock();
});