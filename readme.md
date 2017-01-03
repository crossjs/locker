#locker

[![Build Status](https://api.travis-ci.org/pandorajs/locker.png?branch=master)](http://travis-ci.org/pandorajs/locker)
[![Coverage Status](https://coveralls.io/repos/pandorajs/locker/badge.png?branch=master)](https://coveralls.io/r/pandorajs/locker?branch=master)


##how to use

```bash
npm install pandora-locker -S
```

```js
var locker = new Locker();
locker.set('x', 1);
locker.set('length', 10);
console.log(locker.get('x'))
```
