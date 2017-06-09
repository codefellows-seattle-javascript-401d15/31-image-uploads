'use strict';

module.exports = {
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl',
  controller: ['$log', '$location', 'authService', 
    function($log, $location, authService) {
      this.$onInit = () => {
        $log.debug('NavbarController');
        
        this.checkPath = function() {
          let path = $location.path();
          if(path === '/join') this.hideButtons = true;
          
          if(path !== '/join') {
            this.hideButtons = false;
            authService.getToken()
            .catch(() => {
              $location.url('/join#login');
            });
          }
        };
      };
    },
  ],
};