// 'use strict';
//
// const expect = require('chai').expect;
//
// describe('Navbar Controller', function() {
//   beforeEach(done => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $httpBackend, $window, $location, $componentController) => {
//       this.$rootScope = $rootScope;
//       this.$httpBackend = $httpBackend;
//       this.$window = $window;
//       this.$location = $location;
//       this.createGalleryCtrl = new $componentController('navbar');
//       done();
//     });
//   });
//
//
//   describe('Navbar location to change', () => {
//     it('should pass', done => {
//       let url = $location.url;
//       url = 'http://localhost:3000/#!/join#login';
//       expect(url).to.be.a('string');
//       done();
//     });
//   });
// });
