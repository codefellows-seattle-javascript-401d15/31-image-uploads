'use strict';

const expect = require('chai').expect;

describe('Gallery Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, picService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.picService = picService;

      this.mockBindings = {
        gallery: {
          name: 'galleryOne',
          desc: 'galleryOne',
          pics: [],
          _id: '5678'
        }
      };

      this.$window.localStorage.token = 'test token';
      this.scope = this.$rootScope.$new();
      this.createGalleryCtrl = this.$componentController(
        'thumbnail',
        {
          scope: this.scope,
          picService: this.picService
        },
        this.mockBindings
      );
      this.createGalleryCtrl.$onInit();

      done();
    });
  });

  afterEach(done => {
    delete this.createGalleryCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default Properties', () => {
  });

  describe('Functional Methods', () => {
    beforeEach(done => {
      this.expectUrl = 'http://localhost:3000/api/gallery/5678/pic/1234';
      this.expectHeaders = {
        'Authorization': `Bearer ${this.$window.localStorage.token}`,
        'Accept': 'application/json, text/plain, */*'
      };
      done();
    });
    afterEach(done => {
      this.$httpBackend.flush();
      this.$rootScope.$apply();
      done();
    });

    describe('#createGalleryCtrl.deletePic', () => {
      it('should accept a delete request', done => {
        this.$httpBackend.expectDELETE(this.expectUrl, this.expectHeaders)
          .respond(204);

        this.createGalleryCtrl.deletePic();
        done();
      });
    });
  });
});
