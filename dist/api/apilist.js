'use strict';

var _api = require('./api.js');

var env = "-test"; //-dev 或者 -test
var apiMall = 'https://educhain.91xuexibao.com/';
/**
 * 获取用户code的接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
var getUserCode = function getUserCode(params) {
    return (0, _api.wxRequest)(params, apiMall + 'wxTinyProgram/api/loginByCode');
};

var updateUser = function updateUser(params) {
    return (0, _api.wxRequest)(params, apiMall + 'user/api/update');
};

var getsetcourse = function getsetcourse(params, id) {
    return (0, _api.wxRequest)(params, apiMall + 'course/api/info/' + params.id);
};

var getinfocourse = function getinfocourse(params, id) {
    return (0, _api.wxRequest)(params, apiMall + ('course/api/single/info/' + params.id), "POST");
};

// 支付订单接口
var getOrder = function getOrder(params, id) {
    return (0, _api.wxRequest)(params, apiMall + ('pay/api/order/' + params.id), "POST");
};

module.exports = {
    getUserCode: getUserCode,
    updateUser: updateUser,
    getsetcourse: getsetcourse,
    getinfocourse: getinfocourse,
    getOrder: getOrder

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaWxpc3QuanMiXSwibmFtZXMiOlsiZW52IiwiYXBpTWFsbCIsImdldFVzZXJDb2RlIiwicGFyYW1zIiwidXBkYXRlVXNlciIsImdldHNldGNvdXJzZSIsImlkIiwiZ2V0aW5mb2NvdXJzZSIsImdldE9yZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFJQSxJQUFJQSxNQUFNLE9BQVYsQyxDQUFrQjtBQUNsQixJQUFNQyxVQUFVLGtDQUFoQjtBQUNBOzs7OztBQUtBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFEO0FBQUEsV0FBWSxvQkFBVUEsTUFBVixFQUFrQkYsVUFBVSwrQkFBNUIsQ0FBWjtBQUFBLENBQXBCOztBQUdBLElBQU1HLGFBQWEsU0FBYkEsVUFBYSxDQUFDRCxNQUFEO0FBQUEsV0FBWSxvQkFBVUEsTUFBVixFQUFrQkYsVUFBVSxpQkFBNUIsQ0FBWjtBQUFBLENBQW5COztBQUdBLElBQU1JLGVBQWUsU0FBZkEsWUFBZSxDQUFDRixNQUFELEVBQVNHLEVBQVQ7QUFBQSxXQUFnQixvQkFBVUgsTUFBVixFQUFrQkYsVUFBVSxrQkFBVixHQUErQkUsT0FBT0csRUFBeEQsQ0FBaEI7QUFBQSxDQUFyQjs7QUFHQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNKLE1BQUQsRUFBU0csRUFBVDtBQUFBLFdBQWdCLG9CQUFVSCxNQUFWLEVBQWtCRixXQUFZLDRCQUE0QkUsT0FBT0csRUFBL0MsQ0FBbEIsRUFBdUUsTUFBdkUsQ0FBaEI7QUFBQSxDQUF0Qjs7QUFFQTtBQUNBLElBQU1FLFdBQVcsU0FBWEEsUUFBVyxDQUFDTCxNQUFELEVBQVNHLEVBQVQ7QUFBQSxXQUFnQixvQkFBVUgsTUFBVixFQUFrQkYsV0FBVyxtQkFBbUJFLE9BQU9HLEVBQXJDLENBQWxCLEVBQTZELE1BQTdELENBQWhCO0FBQUEsQ0FBakI7O0FBR0FHLE9BQU9DLE9BQVAsR0FBaUI7QUFDYlIsNEJBRGE7QUFFYkUsMEJBRmE7QUFHYkMsOEJBSGE7QUFJYkUsZ0NBSmE7QUFLYkM7O0FBTGEsQ0FBakIiLCJmaWxlIjoiYXBpbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICB3eFJlcXVlc3RcclxufSBmcm9tICcuL2FwaSc7XHJcblxyXG5sZXQgZW52ID0gXCItdGVzdFwiIC8vLWRldiDmiJbogIUgLXRlc3RcclxuY29uc3QgYXBpTWFsbCA9ICdodHRwczovL2VkdWNoYWluLjkxeHVleGliYW8uY29tLydcclxuLyoqXHJcbiAqIOiOt+WPlueUqOaIt2NvZGXnmoTmjqXlj6NcclxuICogQHBhcmFtICB7W3R5cGVdfSBwYXJhbXMgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5jb25zdCBnZXRVc2VyQ29kZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnd3hUaW55UHJvZ3JhbS9hcGkvbG9naW5CeUNvZGUnKTtcclxuXHJcblxyXG5jb25zdCB1cGRhdGVVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICd1c2VyL2FwaS91cGRhdGUnKTtcclxuXHJcblxyXG5jb25zdCBnZXRzZXRjb3Vyc2UgPSAocGFyYW1zLCBpZCkgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICdjb3Vyc2UvYXBpL2luZm8vJyArIHBhcmFtcy5pZCk7XHJcblxyXG5cclxuY29uc3QgZ2V0aW5mb2NvdXJzZSA9IChwYXJhbXMsIGlkKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgKCAnY291cnNlL2FwaS9zaW5nbGUvaW5mby8nICsgcGFyYW1zLmlkICkgLFwiUE9TVFwiKTtcclxuXHJcbi8vIOaUr+S7mOiuouWNleaOpeWPo1xyXG5jb25zdCBnZXRPcmRlciA9IChwYXJhbXMsIGlkKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgKCdwYXkvYXBpL29yZGVyLycgKyBwYXJhbXMuaWQpICwgXCJQT1NUXCIpIDtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldFVzZXJDb2RlICxcclxuICAgIHVwZGF0ZVVzZXIgICxcclxuICAgIGdldHNldGNvdXJzZSAsXHJcbiAgICBnZXRpbmZvY291cnNlICxcclxuICAgIGdldE9yZGVyXHJcblxyXG59XHJcbiJdfQ==