'use strict'

require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<', // < tells angular one-way data binding
    gallery: '<'
  }
}
