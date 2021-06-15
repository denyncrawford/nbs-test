'use strict';

var BarcodeScanner = require('native-barcode-scanner');
var robot = require('robotjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BarcodeScanner__default = /*#__PURE__*/_interopDefaultLegacy(BarcodeScanner);
var robot__default = /*#__PURE__*/_interopDefaultLegacy(robot);

let scanner = new BarcodeScanner__default['default']({
  endKey: 'Intro'
});

scanner.on('code', code => {
  console.log(code);
  // scanner.off();
});

setTimeout(async () => {
  // Type "Hello World".
  robot__default['default'].typeString("code1lol");

  // Press enter.
  robot__default['default'].keyTap("enter");
  robot__default['default'].typeString("code1lol");

  // Press enter.
  robot__default['default'].keyTap("enter");
  setTimeout(() => process.exit(), 1000);

},1000);
