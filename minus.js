/*! minus.js v0.4.0 by ryanpcmcquen */
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

  m.qp = (s, p) => {
    const pa = m.apsc(m.qa(p));
    (typeof s === 'string') && (s = m.q(s));
    return pa.filter((n) => {
      return (n.contains(s)) ? n : false;
    })[0];
  };

  if (!window.m) {
    window.m = m;
  } else if (!window.mi) {
    window.mi = m;
  } else {
    window.min = m;
  }

  return m;

})();
