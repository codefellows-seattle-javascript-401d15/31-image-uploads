'use strict';

module.exports = {
  template: require('./upload-pic.html'),
  controllerAs: 'uploadPicCtrl',
  controller: [
    '$log',
    'picService',
    function($log, picService) {
      this.$onInit = () => {
        $log.debug('uploadPicController');
        this.pic = {};


        this.wtfs = () => {
          console.log(this.pic);
        };

        this.clear = () => {
          this.pic.name = null;
          this.pic.desc = null;
          this.pic.file = null;
          this.pic.file.name = '';
        };


        this.uploadPic = () => {
          picService.uploadPic(this.gallery, this.pic)
          .then(
            () => {
              this.clear();
            },
            err => $log.error(err)
          );
        };
      };
    }],
  bindings: {
    gallery: '<',
  },
};
