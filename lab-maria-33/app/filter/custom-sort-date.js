module.exports = function() {
  return function(galleries, limit=Infinity) {
    console.log('HELLO');
    return galleries.sort((a, b) => (new Date(b.created)) - (new Date(a.created))).slice(0, limit);
  };
};
