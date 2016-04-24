/*! attachIt.js v0.2.1 by ryanpcmcquen */
(function () {
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
}());