/*! minus.js v0.1.0 by ryanpcmcquen*/
/*global window*/
/*jslint browser:true, white:true*/

(function () {
  'use strict';


  var m = {};

  m.d = document;
  m.o = Object;
  m.ap = Array.prototype;

  m.qs = function (s) {
    return m.d.querySelector(s);
  };

  m.qsa = function (s) {
    return m.d.querySelectorAll(s);
  };

  m.ael = function (s, e, c) {
    return s.addEventListener(e, c);
  };

  m.oc = function (p, o) {
    return m.o.create(p, o);
  };

  m.ok = function (o) {
    return m.o.keys(o);
  };

  m.apsc = function (a, s, e) {
    s = s || 0;
    e = e || undefined;
    return m.ap.slice.call(a, s, e);
  };

  window.m = m;
  return m;

}());