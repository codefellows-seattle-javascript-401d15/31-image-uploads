'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', '$rootScope', 'galleryService', function($log, $rootScope, galleryService) {
    this.$onInit = () => {
      $log.debug('Gallery Item Controller');

      this.showEditGallery = false;
      this.daysSince = new Date() - new Date(this.gallery.created);
      this.cost = 123.567;

    };

    this.deleteGallery = () => {
      galleryService.deleteGallery(this.gallery._id, this.gallery)
      .then(
        (res) => $log.log(`${res.status} deleted the thing`),
        err => $log.error(err)
      );
    };

    this.makeCurrentGallery = () => {
      $log.log('omg it ran');
      $rootScope.$emit('updateCurrentGallery', this.gallery._id);
    };

  }],
  bindings: {
    gallery: '<'
  }
};
