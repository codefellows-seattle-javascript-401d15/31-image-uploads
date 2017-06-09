'use strict';

describe('Navbar controller', function() {
  beforeEach(() => { /* eslint-disable */
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller, $location, $window, authService) => {
      this.$rootScope = $rootScope;
      this.$scope = this.$rootScope.$new();
      this.$window = $window;
      this.$location = $location;
      this.authService = authService;
      this.$controller = $controller;
      // this.navbarCtrl = new $controller('NavbarController');
      this.$window.localStorage.setItem('token', 'test token');
      
      this.navbarCtrl = this.$controller(
        'NavbarController',
        {
          scope: this.$scope,
          authService: this.authService
        }
      )
      
      this.navbarCtrl.$onInit();
    })
  })
  // this.scope = this.$rootScope.$new();
  
  afterEach(() => {
    this.$rootScope.$apply();
    this.$window.localStorage.removeItem('token');
  });
  
  it('should be able to check the path', () => {
    expect(this.navbarCtrl.checkPath).toEqual(jasmine.any(Function));
  });
  
});