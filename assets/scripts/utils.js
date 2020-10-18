function utils(){}


utils.throttle = function (fn, wait){
  var timer = null;

  return function (...args){
    if(!timer){
      timer = setTimeout(()=> timer = null, wait);
      return fn.apply(this, args)
    }
  }
}