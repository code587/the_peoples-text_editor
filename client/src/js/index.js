import { Workbox } from 'workbox-window';
import Editor from './editor';
import { getAllDb, putDb } from './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Make sure service worker is supported by browser
if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
      navigator.serviceWorker
          .register('/src-sw.js')
          .then(reg => console.log('SW is registered'))
          .catch(swErr => console.log(
                `SW Install Error: ${swErr}}`));
    });
}
