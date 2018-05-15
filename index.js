var recipes = {}

var blank = {}

var updateObjectWithKeyAndValue = function(object,key,value){
  return Object.assign(blank,object,{
    [key]:value
  })
}