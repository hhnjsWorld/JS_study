"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateFormat = exports.arrayRandomValue = void 0;

//随机数封装好的方法
var arrayRandomValue = function arrayRandomValue(array) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 ? arguments[2] : undefined;
  end = end ? end : array.length;
  start--;
  var index = start + Math.floor(Math.random() * (end - start));
  return array[index];
}; //定义日期格式方法


exports.arrayRandomValue = arrayRandomValue;

var dateFormat = function dateFormat(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
  var config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  };

  for (var key in config) {
    format = format.replace(key, config[key]);
  }

  return format;
};

exports.dateFormat = dateFormat;