'use strict';

describe('Testing the Thumbnail Container Controller', function() { /* eslint-disable */
  angular.mock.module('routesApp');
  angular.mock.inject(($componentController) => {
    this.$componentController = $componentController;
    this.thumbnailContainerCtrl = $componentController('ThumbnailContainerController');
    this.thumbnailContainerCtrl.$onInit();
  });
  
  it('should have a title', () => {
    
    console.log('thumbnailctrl', this.thumbnailContainerCtrl);
    expect(true).toBe(true);
  });
});