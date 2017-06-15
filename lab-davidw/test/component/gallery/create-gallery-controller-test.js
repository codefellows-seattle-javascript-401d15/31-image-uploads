'use strit';

const expect = require('chai').expect;

describe('Create Gallery Controller', function() {
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
          _id: '5678',
        },
      };

      this.$window.localStorage.token = 'test token';
      this.scope = this.$rootScope.$new();
      this.galleryCtrl = this.$componentController(
        'gallery',
        {
          scope: this.scope,
          galleryService: this.galleryService,
        },
        this.mockBindings
      );
      this.galleryCtrl.$onInit();

      done();
    });
  });

  afterEach(done => {
    delete this.galleryCtrl;
    delete this.$window.localStorage.token;

    done();
  });

  describe('Default properties', () => {
    beforeEach(done => {
      this.expectUrl = `${__API_URL__}/api/gallery`;
      this.expectHeaders = {
        'Authorization': `Bearer ${this.$window.localStorage.token}`,
        'Accept': 'application/json, text/plain, */*',
      };
      done();
    });

    afterEach(done => {
      this.$httpBackend.flush();
      this.$rootScope.$apply();
      done();
    });
  });
});
