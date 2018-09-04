// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {

var start = Date.now();

return new Promise(
    function (resolve, reject) {
      if(time >= 400 && time <= 600) {
        setTimeout(function(){
          var timeLapse = Date.now() - start;
          resolve(timeLapse);
        }, time);
      } else {
        var reason;
        if(time > 600){
          reason = new Error('This time is too much !');
        } else {
          reason = new Error('This time is too short !');
        }
        reject(reason);
      }
    }
  )
}

export function asyncDelay(time) {
  return delay(time);
}
/*  var start = Date.now();

  return new Promise(
      (resolve, reject) => {
        if(time >= 400 && time <= 600) {
          setTimeout(function(){
            var timeLapse = Date.now() - start;
            resolve(timeLapse);
          }, time);
        } else {
          var reason;
          if(time > 600){
            reason = new Error('This time is too much !');
          } else {
            reason = new Error('This time is too short !');
          }
          reject(reason);
        }
      }
    )*/
