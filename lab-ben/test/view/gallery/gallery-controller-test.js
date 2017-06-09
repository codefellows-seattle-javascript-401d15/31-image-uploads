'use strict';

const expect = require('chai').expect;

describe('Gallery Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $controller, galleryService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$controller = $controller;
      this.galleryService = galleryService;

      this.scope = this.$rootScope.$new();
      this.$window.localStorage.token = 'token';
      this.galleryCtrl = this.$controller(
        'GalleryController',
        {
          scope: this.scope,
          galleryService: this.galleryService,
        }
      );
      this.galleryCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.homeCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {
    it('should have a galleries array', done => {
      expect(this.galleryCtrl.galleries).to.be.instanceOf(Array);
      done();
    });
  });

});
