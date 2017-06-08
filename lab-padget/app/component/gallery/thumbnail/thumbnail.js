'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  controller: ['$log', 'picService', function($log, picService) {
    $log.debug('Pic File Controller');

    this.deletePicFile = () => {
      picService.deletePicFile(this.gallery, this.pic._id);
    };
  }],
  bindings: {
    pic: '<',
    gallery: '<',
  },
};
