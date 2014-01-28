define(function (require, exports, module) {

/**
 * 对象储物柜
 * @module Locker
 */

'use strict';

var $ = require('$'),
  Util = require('util'),
  Class = require('class');

/**
 * 对象存取储物柜
 * @class Locker
 * @constructor
 */
var Locker = new Class({

  /**
   * 构造函数
   * @param {string} [pre] key前缀
   * @param {object} [stk] 柜组
   * @method __construct
   */
  __construct: function (pre, stk) {
    this.prefix = pre || Util.nuid();
    this.stacks = stk || {};
  },

  /**
   * 从储物柜中取得指定对象，参数key未指定则返回全部
   * @param {mix} [key] 对象key
   * @method get
   */
  get: function (key) {
    if (typeof key !== 'undefined') {
      key = this.prefix + key;
      if (this.stacks.hasOwnProperty(key)) {
        return this.stacks[key];
      }
      return null;
    }
    return this.stacks;
  },

  /**
   * 将对象存入储物柜
   * @param {string} key 对象key
   * @param {object} object 对象
   * @method set
   */
  set: function (key, obj) {
    this.stacks[this.prefix + key] = obj;
  },

  /**
   * 从储物柜中删除指定对象
   * @param {string} key 对象key
   * @method remove
   */
  remove: function (key) {
    if (key !== '') {
      delete this.stacks[this.prefix + key];
    }
  },

  /**
   * 清空储物柜
   * @method empty
   */
  empty: function () {
    $.each(this.stacks, $.proxy(function (key, obj) {
      if (key.indexOf(this.prefix) === 0) {
        delete this.stacks[key];
      }
    }, this));
  }

});

return Locker;

});
