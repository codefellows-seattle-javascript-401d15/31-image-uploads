'use strict';

//require('./')

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<'
  }
};
