'use strict';

module.exports = function() {
  return function(galleries, limit=Infinity) {
    return galleries.sort((a, b) => b.pics.length > a.pics.length).slice(0, limit);
  };
};
