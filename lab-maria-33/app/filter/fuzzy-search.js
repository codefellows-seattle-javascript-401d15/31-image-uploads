'use strict';

module.exports = function() {
  return function(galleries, searchTerm){
    if(!searchTerm) return galleries;
    
    let pattern = new RegExp(`.*${searchTerm.toLowerCase().split('').join('.*')}.*`);
    return galleries.filter(gallery => pattern.test(gallery.name.toLowerCase()));
  };
};
