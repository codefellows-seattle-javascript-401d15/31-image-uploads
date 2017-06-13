'use strict';

module.exports = function() {
  return function(galleries, searchTerm) {
    if(!searchTerm) return /.*/;

    let pattern = `${searchTerm.toUpperCase().split('').join('.*')}`;
    let regExp = new RegExp(pattern);

    return galleries.filter(gallery => regExp.test(gallery.name.toUpperCase()));
  };
};
