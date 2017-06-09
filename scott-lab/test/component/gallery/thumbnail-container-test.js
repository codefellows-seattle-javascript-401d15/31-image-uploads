'use strict'

const expect = require('chai').expect

describe('Thumbnail Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, picService) => {
      this.$rootScope = $rootScope
      this.$window = $window
      this.$httpBackend = $httpBackend
      this.$componentController = $componentController
      this.picService = picService

      this.mockBindings = {
        pic: {
          name: 'one',
          desc: '1',
          file: 'fileOne',
          _id: '1234'
        },
        gallery: {
          name: 'galleryOne',
          desc: 'g1',
          pics: [],
          _id: 'g1234'
        }
      }

      this.$window.localStorage.token = 'test token'
      this.scope = this.$rootScope.$new()
      this.thumbnailCtrl = this.$componentController(
        'thumbnail',
        {
          scope: this.scope,
          picService: this.picService
        },
        this.mockBindings
      )
      this.thumbnailCtrl.$onInit()

      done()
    })
  })

  afterEach(done => {
    delete this.thumbnailCtrl
    delete this.$window.localStorage.token
    done()
  })

  describe('Default properties', () => {

  })

  describe('Functional methods', () => {
    beforeEach(done => {
      this.expectUrl = 'http://localhost:3000/api/gallery/g1234/pic/1234'
      this.expectHeaders = {
        'Authorization': `Bearer ${this.$window.localStorage.token}`,
        'Accept': 'application/json, text/plain, */*'
      }
      done()
    })

    afterEach(done => {
      this.$httpBackend.flush()
      this.$rootScope.$apply()
      done()
    })

    describe('#thumbnailCtrl.deletePic', () => {
      it('should accept a valid DELETE request', done => {
        this.$httpBackend.expectDELETE(this.expectUrl, this.expectHeaders)
          .respond(204)

        this.thumbnailCtrl.deletePic()
        done()
      })
    })
  })
})
