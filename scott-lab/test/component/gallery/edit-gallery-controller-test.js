'use strict'

const expect = require('chai').expect

describe('Edit Gallery Component', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.createGalleryCtrl = $componentController('createGallery')
      done()
    })
  })

  beforeEach(done => {
    this.createGalleryCtrl.$onInit()
    this.$window.localStorage.setItem('token', 'test token')
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
    this.$httpBackend.flush()
    this.$rootScope.$apply()
    done()
  })

  describe('#editGalleryCtrl.createGallery()', () => {
    it('should make a valid PUT request for all galleries', done => {
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

      this.$httpBackend.expectPUT(expectUrl, expectGallery, expectHeaders)
        .respond(200, expectGallery)
        this.createGalleryCtrl.gallery = expectGallery
        expect(this.createGalleryCtrl.createGallery).to.not.throw()

      done()
    })
  })
})
