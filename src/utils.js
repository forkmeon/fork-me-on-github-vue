const Utils = {};

Utils.merge = function(r, s) {
  this.each(s, function(v, k) {
    r[k] = v;
  });
  return r;
};

Utils.each = function(obj, fn) {
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      fn.call(this, obj[i], i);
    }
  }
  return obj;
};

module.exports = Utils;
