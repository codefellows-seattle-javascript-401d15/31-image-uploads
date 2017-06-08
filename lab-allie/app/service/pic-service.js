'use strict';
/* eslint-disable */
module.exports = [
  '$log', '$q', '$http', 'Upload', 'authService', 
  function($log, $q, $http, Upload, authService) {
    $log.debug('Pic service');
    
    let service = {};
    
    service.uploadPic = function(gallery, pic) {
      $log.debug('picService.uploadPic()');
      
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
    
    service.deletePic = function(gallery, pic) {
      $log.debug('picService.deletePic()');
      
      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${gallery._id}/pic/${pic._id}`;
        
        let config = {          
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          }
        };
        return $http.delete(url, config)        
      })
      .then(res => {
        gallery.pic.forEach((ele, idx) => {
          if (ele._id === res.data._id)
          gallery.pic.splice(idx, 1);
        })
        return gallery.pic;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      })
    };
    
    return service;
  },
];