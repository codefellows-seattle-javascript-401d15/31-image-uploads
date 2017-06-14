// 'use strict';
//
// const expect = require('chai').expect;
//
// describe('Home controller', function() {
//   beforeEach(done => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $window, $httpBackend, $controller, authService) => {
//       this.$rootScope = $rootScope;
//       this.$window = $window;
//       this.$httpbackend = $httpBackend;
//       this.$controller = $controller;
//       this.authService = authService;
//
//       this.$window.localStorage.token = 'test token';
//       this.homeCtrl = this.$controller('HomeController');
//       this.homeCtrl.$onInit();
//       done();
//     });
//   });
//
//   afterEach(done => {
//     delete this.homeCtrl;
//     delete this.$window.localStorage.token;
//     done();
//   });
//
//   describe('Default properties', () => {
//     it('should have a galleries array', done => {
//       expect(this.homeCtrl.galleries).to.be.instanceOf(Array);
//       done();
//     });
//     it('should have a fetchGalleries method', done => {
//       expect(this.homeCtrl.fetchGalleries).to.be.instanceOf(Function);
//     });
//   });
//
//   describe('Functional methods', () => {
//     describe('#HomeController.fetchGalleries', () => {
//       beforeEach(done => {
//         this.expectUrl = 'http://localhost:3000/api/gallery';
//         this.expectHeaders = {
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${this.$window.localStorage.token}`
//         };
//         this.expectGalleries = [
//           {name: 'one', desc: 'one', _id: '1234'},
//           {name: 'two', desc: 'two', _id: '5878'}
//         ];
//         done();
//       });
//       afterEach(done => {
//         this.$httpBackend.flush();
//         this.$rootScope.$apply();
//         done();
//       });
//
//       it('should make a valid GET request', done => {
//         this.$httpBackend.expetGET(this.expectUrl, this.expectHeaders)
//         .respond(200);
//
//         this.homeCtrl.fetchGalleries();
//         done();
//       });
//       it('should return an array of galleries', done => {
//         this.$httpBackend.whenGET(this.expectUrl, this.expectHeaders)
//         .respond(200, this.expectGalleries);
//
//         done();
//       });
//     });
//     describe('#HomeController.fetchGalleries', () => {
//
//     });
//   });
// });
