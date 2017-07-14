'use strict';

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumbnailContainerCtrl',
  controller: [
    '$log',
    function($log) {
      $log.debug('thumbnailContainerCtrl');


    },
  ],
  bindings: {
    gallery: '<',
  },
};
