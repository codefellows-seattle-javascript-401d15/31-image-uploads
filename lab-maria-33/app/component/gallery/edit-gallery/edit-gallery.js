'use strict';

module.exports = {
  template: require('./edit-gallery.html'),
  controllerAs: 'editGalleryCtrl',
  controller: [
    '$log',
    'galleryService',
    function($log, galleryService) {
      this.$onInit = () => {
        $log.debug('Edit Gallery Controller');

        this.editGallery = () => {
          galleryService.updateGallery(this.gallery, this.gallery._id)
          .then(() =>  {
            () => $log.log('updated successfully'),
            err => $log.error(err);
          });
        };

      };
    }],
  bindings: {
    gallery: '<',
  },
};
