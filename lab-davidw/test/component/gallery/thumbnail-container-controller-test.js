// 'use strict';
//
// const expect = require('chai').expect;
//
// describe('Thumbnail Container Controller', function() {
//   beforeEach(done => {
//     angular.mock('cfgram');
//     angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, picService) => {
//       this.$rootScope = $rootScope;
//       this.$window = $window;
//       this.$httpBackend = $httpBackend;
//       this.componentController = $componentController;
//       this.picService = picService;
//
//       this.scope = this.$rootScope.$new();
//       this.thumbnailContainerCtrl = this.$componentController(
//         'thumbnail',
//         {
//           scope: this.scope,
//           picService: this.picService,
//         },
//         this.mockBindings
//       );
//       this.thumbnailCtrl.$onInit();
//
//       done();
//     });
//   });
//
//   this.scope = this.$rootScope.$new();
//   this.thumbnailContainerCtrl = this.$componentController(
//         'thumbnailContainerCtrl',
//     {
//       scope: this.scope,
//       picService: this.picService,
//     },
//         this.mockBindings
//       );
//   this.thumbnailContainerCtrl.$onInit();
//
//   // done();
// });
//
// afterEach(done => {
//   delete this.thumbnailContainerCtrl;
//   done();
// });
//
//
// describe('Default properties', () => {
//   it('should exist', done => {
//     expect('this.thumbnailContainerCtrl.bindings()').to.be.an.instanceOf(Object);
//
//     done();
//   });
// });
