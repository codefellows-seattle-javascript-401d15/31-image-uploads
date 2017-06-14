'use strict'

module.exports = function(){
  return function(galleries, str=''){
    let matched = []
    galleries.forEach(gal => {
      // if(gal.name.toLowerCase().contains(str.toLowerCase())) matched.push(gal)
      let beginsWith = gal.name.toLowerCase().substring(0, str.length)
      if(beginsWith === str.toLowerCase()) matched.push(gal)
    })
    return matched
  }
}
