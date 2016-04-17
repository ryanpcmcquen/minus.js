(function () {
  var attachIt = function (s) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', chrome.extension.getURL(s), true);
    xhr.addEventListener('load', function () {
      var source = String(xhr.responseText);
      var appendedScript = document.createElement('script');
      appendedScript.textContent = source;
      (document.head || document.documentElement).appendChild(appendedScript);
    });
    xhr.send();
  };

  attachIt('minus.js');
}());
