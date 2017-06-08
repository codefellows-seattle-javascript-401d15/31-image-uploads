'use strict';

// require('./_delete-pic.scss')

module.exports = {
  template: require('./delete-pic.html'),
  controllerAs: 'deletePicCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
  },
  controller: [
    '$log',
    'picService',
    function($log, picService) {
      this.$onInit = () => {
        $log.debug('deletePicController');
        this.pic = {};

        this.deletePic = () => {
          picService.deletePic(this.gallery, this.pic)
          .then(
            () => {
              this.pic.name = null;
              this.pic.desc = null;
              this.pic.file = null;
            },
            err => $log.error(err)
          );
        };
      };
    },
  ],
};
