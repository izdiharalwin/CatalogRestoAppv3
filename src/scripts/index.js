/* eslint-disable indent */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import '../styles/hero.css';
import '../styles/navbar.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import '../styles/liked.css';
import '../styles/favorite.css';

import './component/nav-bar.js';
import './component/hero-section.js';
import './component/footer-section.js';

import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './global/config';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});