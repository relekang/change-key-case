# change-key-case

A wrapper around [change-case][] that changes the keys of an object.


[change-case]: https://www.npmjs.com/package/change-case

## Installation

```
npm i change-key-case
```

## Usage

Possible cases: camel, constant, dot, header, lower, no, param, pascal,
path, sentence, snake, swap, title, upper.

```javascript
import changeKeyCase from "change-key-case"

changeKeyCase("sentence")({someProperty: true})
// =>  {"Some property": true}

changeKeyCase("sentence", {someProperty: true})
// =>  {"Some property": true}


// can be useful with console.table
const sentenceCase = changeKeyCase("sentence")
console.table(
  [
    {id: "1234", photoService: "flickr"},
    {id: "abcd", photoService: "unsplash"},
  ].map(sentenceCase)
)
// =>
// Id   Photo service
// ---- -------------
// 1234 flick
// abcd unsplash

// or to change api responses with snake case to camel case
const camelCase = changeKeyCase("camel")
fetch("/api/things")
  .then(response => response.json())
  .then(camelCase)
```
