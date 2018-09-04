// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {

var start = Date.now();

return new Promise(
    function (resolve, reject) {
      if(time > 400 && time < 600) {
        setTimeout(function(){
          var timeLapse = Date.now() - start;
          resolve(timeLapse);
        }, time);
        //setTimeout(resolve(Date.now() - start), time);
      } else {
        var reason = new Error('This time is too much !');
        reject(reason);
      }
    }
  )
}

export function asyncDelay() {

}
