/*! attachIt.js v0.5.0 by ryanpcmcquen */
/*jshint esversion:6*/
(() => {
  'use strict';
  const attachIt = (s) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', chrome.extension.getURL(s), true);
    xhr.addEventListener('load', () => {
      const source = String(xhr.responseText);
      const appendedScript = document.createElement('script');
      appendedScript.textContent = source;
      (document.head || document.documentElement).appendChild(appendedScript);
    });
    xhr.send();
  };
  attachIt('minus.js');
})();
