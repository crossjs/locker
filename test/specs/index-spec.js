var Locker = require('../../src');

describe('Locker', function() {
  it('locker.set/get', function() {
    var locker = new Locker();
    locker.set('x', 1);
    locker.set('length', 10);
    expect( locker.get('x')).to.be(1);
    expect( locker.get('length')).to.be(10);
  });

  it('locker.remove()', function() {
    var locker = new Locker();
    locker.set('x', 1);
    locker.remove('x');
    expect( locker.get('x')).to.not.be.ok();
  });

  it('locker.empty()', function() {
    var locker = new Locker();
    locker.set('x', 1);
    locker.set('length', 10);
    locker.empty();
    expect( locker.get('x')).to.not.be.ok();
    expect( locker.get('length')).to.not.be.ok();
  });

  it('locker.length()', function() {
    var locker = new Locker();
    expect( locker.length()).to.be(0);
    locker.set('x', 1);
    expect( locker.length()).to.be(1);
    locker.set('length', 10);
    expect( locker.length()).to.be(2);
    locker.remove('x');
    expect( locker.length()).to.be(1);
  });

  it('locker.first()', function() {
    var locker = new Locker();
    locker.set('x', 1);
    locker.set('length', 10);
    expect( locker.first()).to.be(1);
    expect( locker.last()).to.be(10);
    locker.set('x', 1);
    expect( locker.last()).to.be(10);
    locker.remove('length');
    expect( locker.last()).to.be(1);
  });

});
