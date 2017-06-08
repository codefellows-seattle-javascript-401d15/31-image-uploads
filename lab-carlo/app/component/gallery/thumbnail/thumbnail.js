'use strict';

// require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<'
  },
  controller: ['$log', 'picService', function($log, picService) {
    $log.debug('Pic Item Controller');

    // this.showEditGallery = false;

    this.deletePic = () => {
      picService.deletePic(this.gallery, this.pic)
      .then(
        (res) => $log.log(`${res.status} deleted the thing`),
        err => $log.error(err)
      );
    };

  }],
};
