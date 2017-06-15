'use strict'

//scss require

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<'
  }
//   controller: [
//     '$log',
//     'picService',
//     function($log, picService){
//       this.$onInit = () => {
//         $log.debug('edit pic controller')
//
//         this.editPic = () => {
//
//         }
//
//         this.deletePic = () => {
//           console.log('selected gallery: ', this.gallery)
//           console.log('selected picture: ', this.pic);
//           picService.deletePic(this.gallery._id, this.pic._id)
//           .then(
//             () => $log.log('successful pic deletion'),
//             err => $log.error(err)
//           )
//         }
//
//       }
//     }
//   ]
// }
}
