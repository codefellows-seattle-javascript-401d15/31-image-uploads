'use strict';

const expect = require('chai').expect;

describe('Edit Gallery Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, galleryService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.galleryService = galleryService;

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
      this.editGalleryCtrl = this.$componentController(
        'editGallery',
        {
          scope: this.scope,
          galleryService: this.galleryService
        },
        this.mockBindings
      );
      this.editGalleryCtrl.$onInit();

      done();
    });
  });

  afterEach(done => {
    delete this.editGalleryCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Functional methods', () => {
    beforeEach(done => {
      this.expectUrl = 'http://localhost:3000/api/gallery/5678';
      this.expectHeaders = {
        'Authorization': `Bearer ${this.$window.localStorage.token}`,
        'Accept': 'application/json, text/plain, */*'
      };
      done();
    });

    after(done => {
      this.$rootScope.$apply();
      done();
    });

    describe('#editGalleryCtrl.updateGallery', () => {
      it('should accept a valid PUT request', done => {
        this.$httpBackend.expectPUT(this.expectUrl, this.expectHeaders)
          .respond(200);

        this.editGalleryCtrl.updateGallery();
        done();
      });
    });
  });
});
