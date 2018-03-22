import { now } from './utils'
//注單menu
document.getElementById("orderList_open").onclick = function() {orderList_open()};
function orderList_open() {
  document.getElementById("orderList").classList.toggle("show");
  window.scrollTo(1300, document.body.scrollHeight);
}

//clock
// document.getElementById("body").onload = function() {
//   startTime();
// };
document.body.onload = function startTime() {
  var today = new Date();
  var y = today.getFullYear();
  var M = today.getMonth();
  var d = today.getDay();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("sysTime").innerHTML =
    y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s;
  var t = setTimeout("startTime()", 500);
};
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
