'use strict';

var BarcodeScanner = require('native-barcode-scanner');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BarcodeScanner__default = /*#__PURE__*/_interopDefaultLegacy(BarcodeScanner);

// import robot from 'robotjs';

let scanner = new BarcodeScanner__default['default']({
  endKey: 'Intro'
});

scanner.on('code', code => {
  console.log(code);
  scanner.off();
  process.exit();
});

// setTimeout(async () => {
//   // Type "Hello World".
//   robot.typeString("code1lol");

//   // Press enter.
//   robot.keyTap("enter");
//   robot.typeString("code1lol");

//   // Press enter.
//   robot.keyTap("enter");
//   setTimeout(() => process.exit(), 1000)

// },1000)
