'use strict';

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('Delete Gallery Controller');
      this.deleteGallery = () => {
        galleryService.deleteGallery(this.gallery._id, this.gallery)
        .then(
          () => $log.log('deleted successfully'),
          err => $log.error(err)
        );
      };
      
      this.showEditGallery = false;

      this.makeCurrentGallery = () => {
        let index;
        for(let i = 0; i< this.galleries.length; i++) {
          if(this.galleries[i]._id === this.gallery._id) {
            index = i
          }
        }
        this.currentGallery = this.galleries[index];

      };
    };
  }],
  bindings: {
    gallery: '<',
  },
};
