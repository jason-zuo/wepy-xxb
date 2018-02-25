"use strict";

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wxRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var url = arguments[1];
    var method = arguments[2];
    var data, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _wepy2.default.showToast({
              title: "加载中",
              icon: "loading"
            });

            data = params.query || {};
            _context.next = 4;
            return _wepy2.default.request({
              url: url,
              method: params.method || 'POST',
              data: data,
              header: { 'Content-Type': 'application/json' },
              success: function success(data) {
                _wepy2.default.hideToast();
              }
            });

          case 4:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function wxRequest() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  wxRequest: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkYXRhIiwicXVlcnkiLCJyZXF1ZXN0IiwiaGVhZGVyIiwic3VjY2VzcyIsImhpZGVUb2FzdCIsInJlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUE7QUFBQSxxRUFBWTtBQUFBLFFBQU9DLE1BQVAsdUVBQWdCLEVBQWhCO0FBQUEsUUFBb0JDLEdBQXBCO0FBQUEsUUFBeUJDLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkLDJCQUFLQyxTQUFMLENBQWU7QUFDYkMscUJBQU8sS0FETTtBQUViQyxvQkFBTTtBQUZPLGFBQWY7O0FBS0lDLGdCQU5VLEdBTUhOLE9BQU9PLEtBQVAsSUFBZ0IsRUFOYjtBQUFBO0FBQUEsbUJBT0UsZUFBS0MsT0FBTCxDQUFhO0FBQzNCUCxtQkFBS0EsR0FEc0I7QUFFM0JDLHNCQUFRRixPQUFPRSxNQUFQLElBQWlCLE1BRkU7QUFHM0JJLG9CQUFNQSxJQUhxQjtBQUkzQkcsc0JBQVEsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBSm1CO0FBSzNCQyx1QkFBUyxpQkFBVUosSUFBVixFQUFnQjtBQUN2QiwrQkFBS0ssU0FBTDtBQUNEO0FBUDBCLGFBQWIsQ0FQRjs7QUFBQTtBQU9WQyxlQVBVO0FBQUEsNkNBZ0JQQSxHQWhCTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBb0JBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZmO0FBRGUsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB1cmwsIG1ldGhvZCkgPT4ge1xyXG4gICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogXCLliqDovb3kuK1cIixcclxuICAgICAgaWNvbjogXCJsb2FkaW5nXCJcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGxldCBkYXRhID0gcGFyYW1zLnF1ZXJ5IHx8IHt9O1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgfHwgJ1BPU1QnLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHdlcHkuaGlkZVRvYXN0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3eFJlcXVlc3RcclxufVxyXG4iXX0=