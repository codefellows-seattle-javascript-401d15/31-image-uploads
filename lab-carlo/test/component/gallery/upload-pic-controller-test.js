'use strict';

const expect = require('chai').expect;

describe('Upload Pic Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, picService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.picService = picService;

      this.mockBindings = {
        pic: {
          name: 'one',
          desc: 'one',
          file: 'fileOne',
          _id: '1234'
        },
        gallery: {
          name: 'galleryOne',
          desc: 'galleryOne',
          pics: [],
          _id: '5678'
        }
      };

      this.$window.localStorage.token = 'test token';
      this.scope = this.$rootScope.$new();
      this.uploadPicCtrl = this.$componentController(
        'uploadPic',
        {
          scope: this.scope,
          picService: this.picService
        },
        this.mockBindings
      );
      this.uploadPicCtrl.$onInit();

      done();
    });
  });

  afterEach(done => {
    delete this.uploadPicCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Functional methods', () => {
    beforeEach(done => {
      this.expectUrl = 'http://localhost:3000/api/gallery/5678/pic/1234';
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

    describe('#uploadPicCtrl.uploadPic', () => {
      it('should accept a valid POST request', done => {
        this.$httpBackend.expectPOST(this.expectUrl, this.expectHeaders)
          .respond(201);

        this.uploadPicCtrl.uploadPic();
        done();
      });
    });
  });
});
