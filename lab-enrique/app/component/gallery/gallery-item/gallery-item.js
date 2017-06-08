'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    $log.debug('Gallery Item Controller');

    this.showEditGallery = false;

  }],
  bindings: {
    gallery: '<'
  }
};

function GalleryItemController($log, galleryService) {
  $log.debug('#GalleryItemController');

  this.showEditGallery = false;

  this.deleteGallery = () => {
    galleryService.deleteGallery(this.gallery._id)
    .then(
      res => $log.log(`${res.status}, gallery deleted`),
      err => $log.error(err)
    );
  };
}
