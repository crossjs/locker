define(function (require, exports) {

  'use strict';

  var Locker = require('../src/locker');

  QUnit.start();

  module('Module Locker');
  test('locker.set/get', function() {
    var locker = new Locker();
    locker.set('x', 1);
    locker.set('length', 10);
    equal( locker.get('x'), 1, '' );
    equal( locker.get('length'), 10, '' );
  });

  module('Module Locker');
  test('locker.remove()', function() {
    var locker = new Locker();
    locker.set('x', 1);
    locker.remove('x');
    equal( locker.get('x'), undefined, '' );
  });

  module('Module Locker');
  test('locker.empty()', function() {
    var locker = new Locker();
    locker.set('x', 1);
    locker.set('length', 10);
    locker.empty();
    equal( locker.get('x'), undefined, '' );
    equal( locker.get('length'), undefined, '' );
  });

});