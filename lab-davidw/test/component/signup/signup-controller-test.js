'use strict';

const expect = require('chai').expect;

describe('Signup Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
      this.signupCtrl = $componentController(
        'signup',
        {
          scope: this.scope,
          authService: this.authService,
        }
      );

      this.mockBindings = {
        user: {
          username: 'test',
          email: 'test@test.com',
          password: 'Pass12345',
        },
      };
      this.signupCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.signupCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {
    it('should have a title', done => {

      expect(this.signupCtrl.title).to.be.a('string');
      done();
    });

    it('should be the string: Welcome to signup page!', done => {

      expect(this.signupCtrl.title).to.equal('Welcome to the signup page!');
      done();
    });
  });

  describe('Functional methods', () => {
    beforeEach( done => {
      this.expectUrl = `${__API_URL__}/api/signup`;
      this.expectHeaders = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.mockBindings.user}`,
      },

      done();
    });

    afterEach(done => {
      this.$rootScope.$apply();
      done();
    });

    describe('#signup', () => {
      it('should sign up a valid user', done => {

        this.$httpBackend.expectPOST(this.expectUrl, this.expectHeaders)
      .respond(200, this.$window.localStorage.token);

        done();
      });
    });
  });
});
