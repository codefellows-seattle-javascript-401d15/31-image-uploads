'use strict';

module.exports = function() {
  return function(galleries, search) {
    let fuzzySearch = generateSearch(search);

    return galleries.filter(gallery => {
      return fuzzySearch.test(gallery.name.toLowerCase());
    });
  };
};

function generateSearch(input) {
  if(!input) return /.*/;
  let fuzzyString = '.*' + input.toLowerCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
}
