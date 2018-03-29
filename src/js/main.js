import { now } from './utils'
//注單menu
document.getElementById("orderList_open").onclick = function() {orderList_open()};
function orderList_open() {
  document.getElementById("orderList").classList.toggle("show");
  window.scrollTo(1300, document.body.scrollHeight);
}



//clock
function startTime() {   //body.onload的時候執行此function
  var today = new Date();                       //取得本地時間
  today.setTime(today.getTime() - 7 * 60 * 60 * 1000);
  var y = today.getFullYear();                  //取得年份
  var M = today.getMonth() + 1;                     //取得月份
  var d = today.getDate();                       //取得日期
  var h = today.getHours();                     //取得小時
  var m = today.getMinutes();                   //取得分鐘
  var s = today.getSeconds();
  h = checkTime(h);                    //取得秒數
  m = checkTime(m);                             //將m代入function checkTime
  s = checkTime(s);
  document.getElementById('sysTime').innerHTML =
    y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s;  //顯示格式
  var t = setTimeout(startTime, 1000);       //宣告t 每1秒重新取得本地時間
}
function checkTime(i) { //將個位數的值前面加上“0"
  if (i < 10) {
    i = "0" + i
  }; // add zero in front of numbers < 10

  return i;
}

//CountDown
var ms = 2 * 60 * 1000;
var h, m, s;

function countDown() {
  ms -= 1000;
  s = Math.floor((ms / 1000) % 60);
  //當時間超過一分鐘時
  if (ms >= 60000) {
    m = Math.floor((ms / 60000) % 60);
    h = 0;
    //當秒鐘數<1，減去一分鐘
    if (s < 1) {
      ms = Math.floor(ms - 60 * 1000);
    }
    //當時間大於等於一小時
    if (ms > 59 * 60 * 1000) {
      h = Math.floor(ms / 3600000);
    }
    //當分鐘數<1，減去一小時
    if (m < 1) {
      ms = Math.floor(ms - 60 * 60 * 1000);
    }
  }
  //當時間小於一分鐘時
  if (ms < 60000) {
    h = "0";
    m = "0";
  }

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("countDown").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(countDown, 1000);
  //當時間小於0
  if (ms <= 0) {
    clearTimeout(t);
  }
}
window.onload = function () {
  countDown();
  startTime();
}

