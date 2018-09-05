// Hint: use setInterval, create a new Promise and measure time with Date.now()
const MIN_BASE_TIME = 400;
const MAX_BASE_TIME = 600;

export function delay(time) {

var start = Date.now();

return new Promise(
    function (resolve, reject) {
      if(time >= MIN_BASE_TIME && time <= MAX_BASE_TIME) {
        setTimeout(() => resolve(Date.now() - start), time);
      } else {
        var reason;
        if(time > MAX_BASE_TIME){
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
