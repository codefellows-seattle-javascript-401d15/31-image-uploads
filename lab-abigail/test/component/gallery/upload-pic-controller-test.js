// 'use strict';
//
// const expect = require('chai').expect;
//
// describe.only('Upload Controller', function() {
//   beforeEach(done => {
//     angular.mock.module('cfgram');
//     angular.mock.inject(($rootScope, $httpBackend, $window, $location, $componentController) => {
//       this.$rootScope = $rootScope;
//       this.$httpBackend = $httpBackend;
//       this.$window = $window;
//       this.$location = $location;
//       this.uploadPicCtrl = new $componentController('uploadPic');
//       done();
//     });
//   });
//
//   describe('#editGalleryCtrl.updateGallery()', () => {
//     it('should make a valid PUT request for all galleries', done => {
//       let expectHeaders = {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${this.$window.localStorage.token}`,
//       };
//
//       let updateGallery = {
//         name: 'gallery update',
//         desc: 'description update',
//       };
//
//       let mockBindings = {
//         gallery: {
//           _id: '12345',
//           name: 'test name',
//           desc: 'test description',
//           pics: [],
//         },
//       };
//
//       let expectUrl = 'http://localhost:3000/api/gallery/12345/pic/';
//
//       this.editGalleryCtrl.$onInit();
//       this.$httpBackend.expectPUT(expectUrl, updateGallery, expectHeaders)
//       .respond(200);
//       this.editGalleryCtrl.gallery = updateGallery;
//       expect(this.editGalleryCtrl.updateGallery).to.not.throw();
//
//       this.$httpBackend.$flush();
//       this.$rootScope.$apply();
//       done();
//     });
//   });
// });


// template: require('./upload-pic.html'),
// controllerAs: 'uploadPicCtrl',
// bindings: {
//   gallery: '<',
// },
// controller: [
//   '$log', 'picService', function($log, picService) {
//     this.$onInit = () => {
//       $log.debug('uploadPicController');
//       this.pic = {};
//
//       this.uploadPic = () => {
//         picService.uploadPic(this.gallery, this.pic)
//         .then(
//           () => {
//             this.pic.name = null;
//             this.pic.desc = null;
//             this.pic.file = null;
//           },
//           err => $log.error(err)
//         );
