// 'use strict';
// 
// describe('Navbar controller', function() {
//   beforeEach(() => { /* eslint-disable */
//     angular.mock.module('routesApp');
//     angular.mock.inject(($rootScope, $controller, $window, authService) => {
//       this.$rootScope = $rootScope;
//       this.$window = $window;
//       this.authService = authService;
//       this.navbarCtrl = new $controller('NavbarController');
//     })
//     this.$window.localStorage.setItem('token', 'test token');
//   })
//   
//   // afterEach(() => {
//   //   this.$rootScope.$apply();
//   //   this.$window.localStorage.removeItem('token');
//   // });
//   
//   fit('should check the path', () => {
//     let badPath = 'http://localhost:3000';
//     
//     let goodPath = 'http://localhost:3000/join';
//     
//     this.$rootScope.$apply();
//     
//     expect(this.navbarCtrl.checkPath).not.toThrow();
//   });
//   
// });