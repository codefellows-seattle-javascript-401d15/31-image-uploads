'use strict';

const expect = require('chai').expect;

describe('Login Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.authService = authService;
      this.scope = this.$rootScope.$new();
      this.loginCtrl = this.$componentController(
        'login',
        {
          scope: this.scope,
          authService: this.authService,
        });

      this.loginCtrl.$onInit();
      this.$window.localStorage.token = '1234';

      this.mockBindings = {
        user: {
          username: 'user',
          email: 'test@test.com',
          password: 'Pass12345',
        },
      };
      done();
    });
  });

  afterEach(done => {
    delete this.loginCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Functional methods', () => {
    beforeEach( done => {
      delete this.$window.localStorage.token;
      this.expectUrl = `${__API_URL__}/api/login`;
      this.expectConfig = {
        'Accept': 'application/json',
        'Authorization': `Basic ${this.$window.btoa('user:Pass12345')}`,
      };
      done();
    });

    afterEach(done => {
      this.$rootScope.$apply();
      done();
    });

    describe('#loginCtrl.login', () => {
      it('should accept a valid GET request', done => {
        this.$httpBackend.expectGET(this.expectUrl, this.expectConfig)
      .respond(200);

        done();
      });
      it('should login a valid user', done=> {
        this.$httpBackend.expectGET(this.expectConfig, this.expectConfig, this.user)
      .respond(200, expect.token);
      
        done();
      });
    });
  });
});
