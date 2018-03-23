import { now } from './utils'
//注單menu
document.getElementById("orderList_open").onclick = function() {orderList_open()};
function orderList_open() {
  document.getElementById("orderList").classList.toggle("show");
  window.scrollTo(1300, document.body.scrollHeight);
}

//clock
document.body.onload = function startTime() {   //body.onload的時候執行此function
  var today = new Date();                       //取得本地時間
  var y = today.getFullYear();                  //取得年份
  var M = today.getMonth();                     //取得月份
  var d = today.getDay();                       //取得日期
  var h = today.getHours();                     //取得小時
  var m = today.getMinutes();                   //取得分鐘
  var s = today.getSeconds();                   //取得秒數
  m = checkTime(m);                             //將m代入function checkTime
  s = checkTime(s);
  document.getElementById('sysTime').innerHTML =
    y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s;  //顯示格式
  var t = setTimeout(startTime, 500);       //宣告t 每五百毫秒重新取得本地時間
}
function checkTime(i) {                      //將個位數的值前面加上“0"
  if (i < 10) {
    i = "0" + i
  }; // add zero in front of numbers < 10

  return i;
}

