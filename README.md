# installation

```js
npm install scanline
```

# example

```js
const scanline = require("scanline");

scanline("What is your name?").them(name=>console.log(`Wow hi ${name} !`);)
 
// or you need get input value

(async () => {
  let name = scanline("What is your name?");
  console.log(`Wow hi ${name} !`);
})();
```
