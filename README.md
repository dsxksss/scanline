# installation

```js
npm install scanline
```

# example

```js
const scanline = require("scanline");

(async () => {
  let name = scanline("What is your name?");
  console.log(`Wow hi ${name} !`);
})();
```
