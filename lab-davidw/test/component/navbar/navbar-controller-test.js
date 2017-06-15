// 'use strict';
//
// const expect = require('chai').expect;
//
// describe('Navbar Controller', function() {
//   beforeEach(done => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, authService) => {
//       this.$rootScope = $rootScope;
//       this.$window = $window;
//       this.$httpBackend = $httpBackend;
//       this.$componentController = $componentController;
//       this.authService = authService;
//
//       this.scope = this.$rootScope.$new();
//       this.navbarCtrl = this.$componentController (
//               'NavbarController',
//         {
//           scope: this.scope,
//           authService: this.authService,
//         }
//             );
//       this.navbarCtrl.$onInit();
//       done();
//     });
//   });
//
//   afterEach(done => {
//     delete this.navbarCtrl;
//     delete this.$window.localStorage.token;
//
//     done();
//   });
//
//   describe('Default properties', () => {
//     it('should have a #checkPath method', done => {
//       expect(this.navbarCtrl.checkPath).to.be.an.instanceOf('function');
//
//       done();
//     });
//
//     it('should not show Logout button at start', done => {
//       expect(this.navbarCtrl.hideButtons).to.equal(false);
//
//       done();
//     });
//   });
// });
