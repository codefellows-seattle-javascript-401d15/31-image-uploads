'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', '$rootScope', 'galleryService', function($log, galleryService) {
    $log.debug('Gallery Item Controller');
    this.$onInit = () => {
      this.showEditGallery = false;
    };
  }],
  bindings: {
    gallery: '<'
  }
};

function GalleryItemController($log, $rootScope, galleryService) {
  $log.debug('#GalleryItemController');

  this.showEditGallery = false;

  this.deleteGallery = () => {
    galleryService.deleteGallery(this.gallery._id)
    .then(
      res => $log.log(`${res.status}, Successfully Deleted`),
      err => $log.error(err)
    );
  };
}
