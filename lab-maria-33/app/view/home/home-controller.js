'use strict';

module.exports = [
  '$log',
  '$rootScope',
  '$location',
  '$window',
  'authService',
  'galleryService',
  function($log, $rootScope, $location, $window, authService, galleryService) {
    this.$onInit = () => {
      $log.debug('HomeController');

      if(!$window.localStorage.token) {
        authService.getToken()
        .then(
          () => $location.url('/home'),
          () => $location.url('/signup')
        );
      }

      this.title = 'Welcome to the homepage';

      this.galleries = [];

      this.getGalleries = () => {
        return galleryService.fetchGalleries()
          .then(galleries => {
            this.galleries = galleries;
            this.currentGallery = this.galleries[-1];
          });
      };

      $rootScope.$on('locationChangeSuccess', this.getGalleries);
      return this.getGalleries();
    };
  },
];
