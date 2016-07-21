# simple modules
[![Build Status](https://travis-ci.org/zxdong262/simple-modules.svg?branch=master)](https://travis-ci.org/zxdong262/simple-modules)

simple dom/event/ajax/selector syntactic sugar and basic ui framework(ie9+ or maybe no ie).

the target is creating very small(`$.js` only 1.2k compressed and not gzipped) and basic modules to be used in webpack/global. for simple pages, load the script/css into html to reduce http requests.

- selector( `$(selector)` )
- event
```js
    Node.on(type, callback)
    Node.off(type, callback)
```
- ajax
```js

    //all return Promise(xhr)
    $.ajax(options)
    /*
    {
        url: String
        ,data: Object
    }
    */
    $.get(url)
    $.post(url, data)
```
- classHandling
```js
$(selector).addClass
$(selector).removeClass
$(selector).hasClass
```

## test
```bash
git clone https://github.com/zxdong262/simple-modules.git
cd simple-modules
npm install
npm run dev
```


