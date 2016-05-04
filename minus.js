/*! minus.js v0.3.0 by ryanpcmcquen */

/*jshint esversion:6*/

(() => {

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

  const infoLog = (o) => (
    console.info("You now have `minus.js` shortcuts under the global object `" + o + "`.")
  );
  
  if (!window.m) {
    window.m = m;
    infoLog("m");
  } else if (!window.mi) {
    window.mi = m;
    infoLog("mi");
  } else {
    console.warn("You already have global objects named `m` & `mi`. \n `minus.js` has gracefully shown itself the door.");
  }

  return m;

})();
