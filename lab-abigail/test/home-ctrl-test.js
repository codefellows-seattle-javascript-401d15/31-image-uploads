'use strict';

const expect = require('chai').expect;

describe.only('Home Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $controller, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$controller = $controller;
      this.authService = authService;

      this.$window.localStorage.token = 'test token';
      this.homeCtrl = this.$controller('HomeController');
      this.homeCtrl.$onInit();
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
      expect(this.homeCtrl.galleries).to.be.instanceOf(Array);
      done();
    });

    it('should have a galleries array', done => {
      expect(this.homeCtrl.fetchGalleries).to.be.instanceOf(Function);
      done();
    });
  });

  describe('Functional methods', () => {
    describe('#HomeController.fetchGalleries', () => {
      beforeEach(done => {
        let expectUrl = 'http://localhost:3000/api/gallery';
        let expectHeaders = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.$window.localStorage.token}`,
        };
      });
    });
    it('should make a valid GET request', done => {
      this.$httpBackend.expectGET(this.expectUrl, this.expectHeaders)
      .respond(200);
      done();
    });

    it('should make a valid GET request', done => {
      this.$httpBackend.whenGET(this.expectUrl, this.expectHeaders)
      .respond(200, this.expectGalleries);
      done();
    });
  });
});
