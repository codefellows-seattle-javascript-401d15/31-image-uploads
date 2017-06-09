'use strict';

const expect = require('chai').expect;

describe('Landing Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $controller, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$controller = $controller;
      this.galleryService = authService;

      this.scope = this.$rootScope.$new();
      this.$window.localStorage.token = 'test token';
      this.landingCtrl = this.$controller (
        'LandingController',
        {
          scope: this.scope,
          galleryService: this.galleryService,
        }
      );
      this.landingCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.landingCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {
    it('should have an #$onInit method', done => {
      expect(this.landingCtrl.$onInit).to.be.an.instanceOf(Function);
      done();
    });
    it('should not show Signup to start', done => {
      expect(this.landingCtrl.showSignup).to.equal(false);
      done();
    });
  });
});
