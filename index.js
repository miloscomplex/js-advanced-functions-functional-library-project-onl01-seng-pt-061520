const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object') {
        for (let element in collection) {
          callback(collection[element], element, collection)
        }
      } else {
        collection.forEach((element, index) => {
          callback(element, index, collection)
        })
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      if (typeof collection === 'object') {
        for (let element in collection) {
          newArray.push(callback(collection[element], element, collection))
        }
      } else {
        collection.forEach((element, index) => {
          newArray.push(callback(element, index, collection))
        })
      }
      return newArray
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
