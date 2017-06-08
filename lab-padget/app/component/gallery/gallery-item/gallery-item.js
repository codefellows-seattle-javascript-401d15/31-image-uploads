'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', 'picService', function($log, galleryService, picService) {
    $log.debug('Gallery Item Controller');

    this.showEditGallery = false;

    this.deleteGallery = () => {
      this.gallery.pics.forEach(pic => picService.deletePicFile(this.gallery, pic._id));
      galleryService.deleteGallery(this.gallery._id);
    };
  }],
  bindings: {
    gallery: '<',
  },
};
