'use strict';

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pics: '<',
    gallery: '<',
  },
  controller: ['$log', 'picService', function($log, picService) {
    this.$onInit = () => {
      $log.debug('Thumbnail controller');
      
      this.currentGallery = 
      
      this.deletePic = () => {
        picService.deletePic(this.pic)
        .then(
          () => $log.log('Picture deleted!'),
          err => $log.error(err)
        );
      };
    };
  }],
};