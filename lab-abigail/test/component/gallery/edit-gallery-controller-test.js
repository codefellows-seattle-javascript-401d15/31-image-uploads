'use strict';

const expect = require('chai').expect;

describe('Edit Gallery Component', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.editGalleryCtrl = new $componentController('editGallery');
      done();
    });
  });

  beforeEach(done => {
    this.$window.localStorage.setItem('token', 'test token');
    done();
  });

  afterEach(done => {
    this.$window.localStorage.removeItem('token');
    done();
  });

  describe('#editGalleryCtrl.updateGallery()', () => {
    it('should make a valid PUT request for all galleries', done => {
      let expectHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`,
      };

      let updateGallery = {
        name: 'gallery update',
        desc: 'description update',
      };

      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'test name',
          desc: 'test description',
          pics: [],
        }
      };

      let expectUrl = 'http://localhost:3000/api/gallery/12345';

      this.editGalleryCtrl.$onInit();
      this.$httpBackend.expectPUT(expectUrl, updateGallery, expectHeaders)
      .respond(200);
      this.editGalleryCtrl.gallery = updateGallery;
      expect(this.editGalleryCtrl.updateGallery).to.not.throw();

      this.$rootScope.$apply();
      done();
    });
  });
});
