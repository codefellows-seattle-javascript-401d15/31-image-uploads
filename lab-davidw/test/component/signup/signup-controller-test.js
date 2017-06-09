'use strict';

const expect = require('chai').expect;

describe('Signup Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      // this.componentController = $componentController;
      this.authService = authService;
      this.signupCtrl = $componentController('signup');

      this.mockBindings = {
        user: {
          name: 'test',
          email: 'test@test.com',
          password: 'pass1234',
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

    it('should be the string: Welcome to Signup', done => {

      expect(this.signupCtrl.title).to.equal('Welcome to the signup page!');
      done();
    });
  });

  describe('Functional methods', () => {
    beforeEach( done => {
      this.expectUrl = `${__API_URL__}/api/signup`;
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

    describe('#signupCtrl.signup', () => {
      it('should accept a valid POST request', done => {
        this.$httpBackend.expectPOST(this.expectUrl, this.expectHeaders)
      .respond(200);

        this.signupCtrl.signup(this.user);
        done();
      });
    });
  });
});
