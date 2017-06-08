'use strict';

module.exports = ['$log', '$q', '$http', 'Upload', 'authService',
  function($log, $q, $http, Upload, authService){
    $log.debug('Pic Service');

    let service = {};

    service.uploadPic = function(gallery, pic){
      $log.debug('#uploadPic');

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${gallery._id}/pic`;
        let headers = {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
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
      .then(res => {
        gallery.pics.push(res.data);
        return res.data;
      })
      .catch(err => {
        $log.error(err.message);
        $q.reject(err);
      });
    };

    // service.deletePic = function(gallery, pic){
    //
    // };

    return service;
  }];
