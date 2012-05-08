//     Emerson.js 0.0.0
//     
//     (c) 2012 Corey Innis
//     Emerson may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://coolerator.net

(function(){

  // Initial Setup
  // --------------------------------------------------------------------------

  // Save a reference to the global object...
  // `window` in the browser, `global` on the server.
  var root = this;

  // The top-level namespace. All public Emerson classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Emerson;
  if (typeof exports !== 'undefined') {
    Emerson = exports;
  } else {
    Emerson = root.Emerson = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Emerson.VERSION = '0.0.0';
}).call(this);