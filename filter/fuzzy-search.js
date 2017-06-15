'use strict';

module.exports = function() {
  return function(galleries, searchTerm){
    let pattern = fuzzyPattern(searchTerm);

    return galleries.filter(gallery => {
      return pattern.test(gallery.name.toUpperCase());
    });
  };
};

function fuzzyPattern(text) {
  if(!text) return /.*/;
  return new RegExp(`.*${input.toUpperCase().split('').join('.*')}.*`);
}
