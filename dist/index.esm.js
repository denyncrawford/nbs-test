import BarcodeScanner from 'native-barcode-scanner';
import robot from 'robotjs';

let scanner = new BarcodeScanner({
  endKey: 'Intro'
});

scanner.on('code', code => {
  console.log(code);
  // scanner.off();
});

setTimeout(async () => {
  // Type "Hello World".
  robot.typeString("code1lol");

  // Press enter.
  robot.keyTap("enter");
  robot.typeString("code1lol");

  // Press enter.
  robot.keyTap("enter");
  setTimeout(() => process.exit(), 1000);

},1000);
