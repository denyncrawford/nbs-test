# This is a reproduction repo for building native barcode reader with PKG

This test is using node16 if you want to build for another version please change the target on the pkg options.

## Building

**To build the script**:

- Edit some stuff
- Run `npm i -g rollup`
- Run `npm run build`

**To build the executable**:

- Run `npm i`
- Run `npm i pkg -g`
- Run `pkg .`

## Make it work

**Change the line `10` of `node_modules/gkm/gkm.js` with the following**:

```JavaScript
const route = path.join(process.cwd(), 'node_modules/gkm')
var gkm = spawn('java', ['-jar', path.join(route, 'lib/gkm.jar')]);
```

## Testing

This repo includes the built working executable at the dist folder.