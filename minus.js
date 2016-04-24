/*! minus.js v0.2.1 by ryanpcmcquen */

/*global window*/
/*jslint browser:true, white:true, es6:true*/

(function () {

  'use strict';

  const m = {};

  m.d = document;
  m.o = Object;
  m.ap = Array.prototype;

  m.eq = (e, s) => e.querySelector(s);
  m.eqa = (e, s) => e.querySelectorAll(s);

  m.q = (s) => m.eq(m.d, s);
  m.qa = (s) => m.eqa(m.d, s);

  m.ael = (s, e, c) => s.addEventListener(e, c);

  m.oc = (p, o) => m.o.create(p, o);
  m.ok = (o) => m.o.keys(o);

  m.apsc = (a, s = 0, e = undefined) => m.ap.slice.call(a, s, e);

  m.qs = m.q;
  m.qsa = m.qa;
  m.eqs = m.eq;
  m.eqsa = m.eqa;

  if (!window.m) {
    window.m = m;
  } else {
    console.warn("You already have a global object named 'm'. \n 'minus.js' has gracefully shown itself the door.");
  }

  return m;

}());