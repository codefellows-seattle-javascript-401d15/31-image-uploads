'use strict';

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  controller:[
    '$log',
    'picService',
    function($log, picService) {
      this.$onInit = () => {
        $log.debug('thumbnailCtrl');

        this.deletePic = () => {
          $log.debug('#thumbnailCtrl.deletePic');

          picService.deletePic(this.gallery, this.pic)
          .then((res) => $log.log(`${res.status}, delete successful`),
            err => $log.error(err)
          );
        };
      };
    },
  ],
  bindings: {
    pic: '<',
    gallery: '<',
  },
};
