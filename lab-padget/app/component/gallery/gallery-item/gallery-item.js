'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
  },
  controller: [
    '$log',
    '$rootScope',
    'galleryService',
    'picService',
    function($log, $rootScope, galleryService, picService) {
      this.$onInit = () => {
        $log.debug('Gallery Item Controller');

        this.showEditGallery = false;

        this.deleteGallery = () => {
          this.gallery.pics.forEach(pic => picService.deletePic(this.gallery, pic._id));
          galleryService.deleteGallery(this.gallery._id);
        };
      };
    },
  ],
};
