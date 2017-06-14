'use strict'

const expect = require('chai').expect

describe('Delete Gallery Component', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.createGalleryCtrl = $componentController('createGallery')
      this.delGalleryCtrl = $componentController('delGallery')
      done()
    })
  })

  beforeEach(done => {
    this.expectUrl = 'http://localhost:3000/api/gallery'
    this.expectHeaders = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.$window.localStorage.token}`
    }
    this.expectGalleries = [
      {
        name: 'one',
        desc: '1',
        _id: '1234'
      },
      {
        name: 'two',
        desc: '2',
        _id: '2345'
      }
    ]
    done()
  })

  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    // this.$httpBackend.flush()
    this.$rootScope.$apply()
    done()
  })

  describe('#createGalleryCtrl.createGallery()', () => {
    it('should make a valid DELETE request for a gallery', done => {
      let expectUrl = 'http://localhost:3000/api/gallery/1234'
      let expectHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }
      let expectGallery = {
        name: 'gallery one',
        desc: 'description one'
      }

      this.$httpBackend.expectDELETE(expectUrl, expectHeaders)
        .respond(204)

      done()
    })
  })
})
