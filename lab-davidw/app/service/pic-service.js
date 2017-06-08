'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'Upload',
  'Delete',
  'authService',
  function($q, $log, $http, Upload, Delete, authService) {
    $log.debug('Pic Service');

    let service = {};

    service.deletePic = function(gallery, pic) {
      $log.debug('#picService.deletePic');

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${gallery._id}/pic/${picId}`;
        let headers = {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        };

        return Delete.delete({
          url,
          headers,
          method: 'DELETE',
          data: {
            name: pic.name,
            desc: pic.desc,
            file: pic.file,
          },
        });
      })
      .then(
        res => {
          gallery.pics.pop(res.data);
          return res.data;
        },
        err => {
          $log.error(err.message);
          $q.reject(err);
        }
      );
    };

    service.uploadPic = function(gallery, pic) {
      $log.debug('#picService.uploadpic');

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${gallery._id}/pic`;
        let headers = {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        };

        return Upload.upload({
          url,
          headers,
          method: 'POST',
          data: {
            name: pic.name,
            desc: pic.desc,
            file: pic.file,
          },
        });
      })
      .then(
        res => {
          gallery.pics.push(res.data);
          return res.data;
        },
        err => {
          $log.error(err.message);
          $q.reject(err);
        }
      );
    };

    return service;
  },
];
