'use strict';

const Fabric = require('fabric');

function Greeter (config) {
  this.config = config || {};
  this.store = new Fabric.Store();
}

Greeter.prototype.start = function () {
  this.fabric.on('join', this._handleJoin.bind(this));
};

Greeter.prototype._handleJoin = function (join) {
  console.log('[GREETER]', 'handling join:', join);
};

module.exports = Greeter;
