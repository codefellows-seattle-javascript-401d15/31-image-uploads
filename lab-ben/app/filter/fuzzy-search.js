'use strict';

module.exports = function() {
  return function(galleries, search='') {
    return galleries.filter(gallery => {
      gallery.name.split('').includes(search);
    });
  };
};
